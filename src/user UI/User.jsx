import './User.css'
import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'


export default function User() {
    const [data, setData] = useState([]);
    useEffect(() => {
        firebase.database().ref('/events').on('value', function (snapshot) {
            let snap = snapshot.val()
            console.log(snap)
            // const list = []
            // for (let item in items) {
            //     let itemName = items[item]
            //     console.log("itemName ===> ", itemName)
            //     list.push(itemName)
            // }
            // setData(snap)
        })
    })
    console.log("localStorage ====> ",localStorage.getItem("email"))
    return (
        <>
            <Navbar />
            <div className="contnt">
                <div className="tabs">
                    <VerticalTabs />
                </div>
                <div className="bottomtabs">
                    <IconLabelTabs />
                </div>
            </div>
        </>
    )
}
