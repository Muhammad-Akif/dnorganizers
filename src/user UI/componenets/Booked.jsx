import React, {useEffect} from 'react'
import Navbar from "./Navbar"
import { useDispatch, useSelector } from 'react-redux';
import BookedCards from "./BookedCards"
import {setBookedEvents ,updateBookedEvents} from '../../redux/actions'
import firebase from '../../config/firebase';

export default function Booked() {
    const dispatch = useDispatch();
    const events = useSelector(state => state.bookedEvents.bookedEvents)

    const getData = () => {
        firebase.database().ref('bookedEvents/').once('value', function (snapshot) {
            dispatch(setBookedEvents(snapshot.val(), localStorage.getItem('user')));
            console.log('done', snapshot.val())
        }, function (err) {
            console.log('failed to fetch', err)
        });
    }

    const onSubmitReview = (id, ratings, desc) => {
        // console.log(id, ratings, desc)
        const ratingObj = {
            ratingNumber: ratings,
            ratingDesc: desc
        };
        firebase.database().ref(`bookedEvents/${id}`).update({
            status: 'usergivedreview',
            ratings: ratingObj
        }).then(() => {
            alert('Thanks for giving Review!', 'Your review will appear after Admin Acceptance.', [{ text: 'Ok', style: 'destructive' }])
            dispatch(updateBookedEvents(id, ratingObj, 'usergivedreview'));
        }).catch((err) => {
            alert('Something went wrong!', err.message, [{ text: 'Ok', style: 'destructive' }])
        });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0px" }}>
               {
                   events.map((item)=> <BookedCards item={item} onSubmitReview={onSubmitReview}/>)
               }
            </div>
        </>
    )
}