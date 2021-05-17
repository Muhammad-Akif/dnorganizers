import './User.css'
import Navbar from './componenets/Navbar';
import VerticalTabs from './Tabs';
import IconLabelTabs from './BottomTabs'
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../config/firebase'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function User() {
  const classes = useStyles();
  const [weddingPkg, setweddingPkg] = useState([]);
  const [birthdayPkg, setbirthdayPkg] = useState([]);
  const [corporatePkg, setcorporatePkg] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let wedlist = []
    let birthlist = []
    let corplist = []
    setOpen(!open);
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
    setOpen(false);
  }, [])
  return (
    <>
      <Navbar />
      <div className="contnt">
        <div className="tabs">
          <VerticalTabs weddingPkg={weddingPkg} birthdayPkg={birthdayPkg} corporatePkg={corporatePkg} />
        </div>
        <div className="bottomtabs">
          <IconLabelTabs weddingPkg={weddingPkg} birthdayPkg={birthdayPkg} corporatePkg={corporatePkg} />
        </div>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  )
}
