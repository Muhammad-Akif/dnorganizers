import { ContactsOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import Navbar from "./Navbar"
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase';
import { setPendingInvoices } from '../../redux/actions';

export default function Invoices() {
    const dispatch = useDispatch();
    
    const pullData = () => {
        firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
            console.log(snapshot.val())
            dispatch(setPendingInvoices(snapshot.val(), 'akifmuhammad321@gmail.com'));
        });
    }
    useEffect(() => {
        pullData();
    }, [])
    const invoices = useSelector((state) => state.invoices.pendingInvoices);
    return (
        <>
        <Navbar/>
        <div>
            <ul>
                {invoices.map(obj => <li>{obj.eventName}</li>)}
            </ul>
        </div>
        </>
    )
}
