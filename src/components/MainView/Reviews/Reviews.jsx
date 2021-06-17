import React, { useEffect } from 'react';
// import Admin from '../../../admin/Admin';
import ReviewCards from "./ReviewCards"
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../../../config/firebase';
import { setBookedEventWithRatings } from '../../../redux/actions';

const Reviews = () => {
  const events = useSelector(state => state.bookedEvents.bookedEvents)
  const dispatch = useDispatch();

  const acceptReview = (ratings, eventName, designerName, bookedEventId, userEmail) => {
    // console.log(ratings, eventName, designerName, bookedEventId)
    Promise.all([
      firebase.database().ref('acceptedRatings/').push({ userEmail, eventName, ratings, designerName }),
      firebase.database().ref(`bookedEvents/${bookedEventId}`).update({ status: 'accepted' })
    ]).then((data) => {
      // console.log("Operations Successful", data)
      alert('Accepted!', 'This is now visible.', [{ text: 'Ok', style: 'destructive' }])
    }).catch((e) => {
      alert('Something went wrong!', 'Check your network.', [{ text: 'Ok', style: 'destructive' }])
    })
  }

  const rejectReview = (bookedEventId) => {
    Promise.all([
      firebase.database().ref(`bookedEvents/${bookedEventId}`).update({ status: 'rejected' })
    ]).then((data) => {
      // console.log("Operations Successful", data)
      alert('Accepted!', 'This is now visible.', [{ text: 'Ok', style: 'destructive' }])
    }).catch((e) => {
      alert('Something went wrong!', 'Check your network.', [{ text: 'Ok', style: 'destructive' }])
    })
  }

  useEffect(() => {
    // getData();
    const ref = firebase.database().ref('bookedEvents/')
    ref.on('value', function (snapshot) {
      dispatch(setBookedEventWithRatings(snapshot.val()));
      console.log('done', snapshot.val())
    }, function (err) {
      console.log('failed to fetch', err)
    });

    //remove listener
    return () => ref.off('value');
  }, [])

  const rating = [1, 2, 3, 4, 5];

  return (
    <div style={{ height: "78vh" }}>
    <div className="row">
      <div style={{ marginBottom: "0px", paddingBottom: "0px" }} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
        <h2>Filter & View Details</h2>
        <p style={{ marginTop: "-10px", paddingBottom: "5px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae odit sapiente magni eaque vero.
        </p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0px" }}>
      {events.length > 0 ?
        events.map(item => {
          return <ReviewCards acceptReview={acceptReview.bind(null, item.ratings, item.eventName, item.designerName, item.id, item.userEmail)} rejectReview={rejectReview.bind(null, item.id)} item={item} />;
        })
        :
        <div style={{ margin: '15% auto', color: 'red', display: 'table', fontSize: '30px', fontFamily: "book" }} >No Reviews to Filter...</div>
      }

    </div>
    </div>
  );
}

export default Reviews;