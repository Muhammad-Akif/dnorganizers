import React, { useEffect } from 'react';
import Admin from '../../../admin/Admin';
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
      alert('Accepted!')
    }).catch((e) => {
      alert('Something went wrong!')
    })
  }

  const rejectReview = (bookedEventId) => {
    Promise.all([
      firebase.database().ref(`bookedEvents/${bookedEventId}`).update({ status: 'rejected' })
    ]).then((data) => {
      // console.log("Operations Successful", data)
      alert('Accepted!')
    }).catch((e) => {
      alert('Something went wrong!')
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

  return <Admin>
    <div className="row">
        <div style={{ marginBottom: "0px", paddingBottom: "0px" }} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <h2>Filter Harsh Reviews</h2>
          <p style={{ marginTop: "-10px", paddingBottom: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae odit sapiente magni eaque vero.
          </p>
        </div>
      </div>
      <div className="col-md-12">
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0px" }}>
        {events.length > 0 ?
          events.map(item => {
            return <ReviewCards acceptReview={acceptReview.bind(null, item.ratings, item.eventName, item.designerName, item.id, item.userEmail)} rejectReview={rejectReview.bind(null, item.id)} item={item} />;
          })
          :
          <div style={{ margin: '15% auto', color: 'red', display: 'table', fontSize: '30px', fontFamily: "book" }} >No Reviews to Filter...</div>
        }
      </div>

      <div className="container col-md-12">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main st Islamabad H8
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </Admin>
}

export default Reviews;