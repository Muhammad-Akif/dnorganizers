import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect } from 'react';
import firebase from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { updateEvents,setItems } from '../redux/actions';

export default function User() {

  const dispatch = useDispatch();
  const {wedding, birthday, corporate} = useSelector(state => state.packages);
  useEffect(() => {
    firebase.database().ref('/events').on('value', function (snapshot) {
      let snap = snapshot.val()
    
      const wedpkg = snap.wedding.packages
      const birthpkg = snap.birthday.packages
      const corppkg = snap.corporate.packages
      const wedItems = snap.wedding.items
      const birthItems = snap.birthday.items
      const corpItems = snap.corporate.items

      dispatch(updateEvents({wedpkg, birthpkg, corppkg}));
      dispatch(setItems(wedItems,birthItems,corpItems))
    })
  }, [])
  return (
    <>
      <Navbar />
      <div className="contnt">
        <div className="tabs">
          <VerticalTabs weddingPkg={wedding} birthdayPkg={birthday} corporatePkg={corporate} />
        </div>
        <div className="bottomtabs">
          <IconLabelTabs weddingPkg={wedding} birthdayPkg={birthday} corporatePkg={corporate} />
        </div>
      </div>
    </>
  )
}
