import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase'

export default function User() {
    const [weddingPkg, setweddingPkg] = useState([]);
    const [birthdayPkg, setbirthdayPkg] = useState([]);
    const [corporatePkg, setcorporatePkg] = useState([]);
    useEffect(() => {
      let wedlist = []
      let birthlist =[]
      let corplist =[]
      firebase.database().ref('/events').on('value', function (snapshot) {
        let snap = snapshot.val()
        let wedpkg = snap.wedding.packages
        for (let item in wedpkg) {
          let obj = wedpkg[item]
          wedlist.push(obj)
        }
        setweddingPkg(wedlist)
        let birthpkg = snap.birthday.packages
        for (let item in birthpkg) {
          let obj = birthpkg[item]
          birthlist.push(obj)
        }
        setbirthdayPkg(birthlist)
        let corppkg = snap.corporate.packages
        for (let item in corppkg) {
          let obj = corppkg[item]
          corplist.push(obj)
        }
        setcorporatePkg(corplist)
      })
      console.log(wedlist)
      console.log(birthlist)
      console.log(corplist)
    }, [])
    return (
        <>
            <Navbar />
            <div className="contnt">
                <div className="tabs">
                    <VerticalTabs weddingPkg={weddingPkg} birthdayPkg={birthdayPkg} corporatePkg={corporatePkg}/>
                </div>
                <div className="bottomtabs">
                    <IconLabelTabs weddingPkg={weddingPkg} birthdayPkg={birthdayPkg} corporatePkg={corporatePkg}/>
                </div>
            </div>
        </>
    )
}
