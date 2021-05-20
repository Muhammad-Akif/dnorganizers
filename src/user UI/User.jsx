import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect } from 'react';
import firebase from '../config/firebase'
import Package from '../Models/models/package';
import transformIntoPackage from '../bariers/transformIntoPackages';
import { useDispatch, useSelector } from 'react-redux';
import { updateBirthday, updateCorporate, updateEvents, updateWedding } from '../redux/actions';


export default function User() {
  // const [weddingPkg, setweddingPkg] = useState([]);
  // const [birthdayPkg, setbirthdayPkg] = useState([]);
  // const [corporatePkg, setcorporatePkg] = useState([]);
  const dispatch = useDispatch();
  const {wedding, birthday, corporate} = useSelector(state => state.packages);
  useEffect(() => {
    console.log("hi")
    console.log("firebase",firebase.database())
    firebase.database().ref('/events').on('value', function (snapshot) {
      console.log("yo")
      console.log("test =============== > ",snapshot.val())
      let snap = snapshot.val()
      
      let wedpkg = snap.wedding.packages

      // const wedList= transformIntoPackage(wedpkg)

      // console.log("===========>",weddingPkg)
      
      let birthpkg = snap.birthday.packages
      // const birthList= transformIntoPackage(birthpkg)
      
      let corppkg = snap.corporate.packages
      // const corpList= transformIntoPackage(corppkg)

      dispatch(updateEvents({wedpkg, birthpkg, corppkg}));

      // setweddingPkg([...wedList]);
      // setbirthdayPkg([...birthList]);
      // setcorporatePkg([...corpList]);
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
