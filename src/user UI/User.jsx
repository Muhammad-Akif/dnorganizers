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
        //     firebase.database().ref('/events/wedding/packages').on('value', function (snapshot) {
        //       let items = snapshot.val()
        //       console.log(items)
        //       const list = []
        //       for (let item in items) {
        //           let itemName = items[item]
        //           console.log("itemName ===> ", itemName)
        //           list.push(itemName)
        //       }
        //       setData(list)
        //   });
    })
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
