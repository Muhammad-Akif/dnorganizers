import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect } from 'react';
import firebase from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { updateEvents,setItems, authenticate } from '../redux/actions';

export default function User() {
  const email = useSelector(state => state.auth.email)
  const dispatch = useDispatch();
  const {wedding, birthday, corporate} = useSelector(state => state.packages);
  const { weddingItems, birthdayItems, corporateItems } = useSelector(state => state.items)
  console.log(weddingItems[2])
  // const list = []
  // for (let item in weddingItems[2]) {
  //   let itemName = weddingItems[2][item].name
  //   list.push(itemName)
  // }
  // console.log("l ====>",list)
  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify(this.state.activeUser));
    const user = localStorage.getItem('user');
    if (user){ 
      dispatch(authenticate('', user))
    }
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
      {console.log('++++++++++++++++++++',email)}
      <Navbar />
      <div className="contnt">
        <div className="tabs">
          <VerticalTabs weddingPkg={wedding} birthdayPkg={birthday} corporatePkg={corporate} weddingItems={weddingItems[2]} birthdayItems={birthdayItems[2]} corporateItems={corporateItems[2]}/>
        </div>
        <div className="bottomtabs">
          <IconLabelTabs weddingPkg={wedding} birthdayPkg={birthday} corporatePkg={corporate} weddingItems={weddingItems[2]} birthdayItems={birthdayItems[2]} corporateItems={corporateItems[2]}/>
        </div>
      </div>
    </>
  )
}
