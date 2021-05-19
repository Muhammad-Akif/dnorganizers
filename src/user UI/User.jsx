import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../config/firebase'
import Package from '../Models/models/package';
import transformIntoPackage from '../bariers/transformIntoPackages';
import { useDispatch, useSelector } from 'react-redux';
import { updateBirthday, updateCorporate, updateEvents, updateWedding } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function User() {
  const classes = useStyles();
  // const [weddingPkg, setweddingPkg] = useState([]);
  // const [birthdayPkg, setbirthdayPkg] = useState([]);
  // const [corporatePkg, setcorporatePkg] = useState([]);
  const dispatch = useDispatch();
  const {wedding, birthday, corporate} = useSelector(state => state.packages);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(!open);
    firebase.database().ref('/events').on('value', function (snapshot) {
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
    setOpen(false);
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
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  )
}
