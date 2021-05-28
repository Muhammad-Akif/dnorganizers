import React, {useEffect} from 'react'
import Navbar from "./Navbar"
import { useDispatch, useSelector } from 'react-redux';
import BookedCards from "./BookedCards"
import {setBookedEvents} from '../../redux/actions'
import firebase from '../../config/firebase';

export default function Booked() {
    const dispatch = useDispatch();
    const [events, email] = useSelector(state => [state.bookedEvents.bookedEvents, state.auth.email])

    const getData = () => {
        firebase.database().ref('bookedEvents/').once('value', function (snapshot) {
            dispatch(setBookedEvents(snapshot.val(), localStorage.getItem('user')));
            console.log('done', snapshot.val())
        }, function (err) {
            console.log('failed to fetch', err)
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
                   events.map((item)=> <BookedCards item={item} />)
               }
            </div>
        </>
    )
}