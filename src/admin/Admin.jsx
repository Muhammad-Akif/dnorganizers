import React, { useEffect } from 'react';
import * as l from '../AdminAppLg.styles';
import * as s from '../AdminAppSm.styles';
import * as Palette from '../colors';
import AdminNavbar from './AdminNavbar'
import './Global.scss';
import "./Admin.css"
import firebase from '../config/firebase'
import { useDispatch } from 'react-redux';
import { setItems, authenticate, updateEvents } from '../redux/actions';



// Components
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView'


const Admin = (props) => {
  // const { weddingItems, birthdayItems, corporateItems } = useSelector(state => state.items)
  // console.log(weddingItems[2])
  // const list = []
  // for (let item in weddingItems[2]) {
  //   let itemName = weddingItems[2][item].name
  //   list.push(itemName)
  // }
  // console.log("l ====>",list)
  const dispatch = useDispatch();
  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify(this.state.activeUser));
    // const user = localStorage.getItem('user');
    // if (user){ 
    //   dispatch(authenticate('', user))
    // }
    firebase.database().ref('/events').on('value', function (snapshot) {
      let snap = snapshot.val()
      const wedpkg = snap.wedding.packages
      const birthpkg = snap.birthday.packages
      const corppkg = snap.corporate.packages
      const wedItems = snap.wedding.items
      const birthItems = snap.birthday.items
      const corpItems = snap.corporate.items
      dispatch(setItems(wedItems, birthItems, corpItems))
      dispatch(updateEvents({ wedpkg, birthpkg, corppkg }));

    })

  }, [])







  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Admin',
    shortName: 'Admin'
  };
  const menuItems = [
    { name: 'Wedding', to: '/wedding', icon: '/icons/about.svg', subMenuItems: [] },
    { name: 'Birthday', to: '/birthday', icon: '/icons/blog.svg', subMenuItems: [] },
    { name: 'Corporate', to: '/corporate', icon: '/icons/destinations.svg', subMenuItems: [] },
    { name: 'VerifySlips', to: '/VerifySlips', icon: '/icons/contacts.svg', subMenuItems: [] },
    { name: 'Filter', to: '/filter', icon: '/icons/services.svg', subMenuItems: [] },
    { name: 'Logout', to: '/', icon: '/icons/birthday.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }


  return (
    <>
      <div className="AdminSidebarfull">
        <l.AppLg>
          <Sidebar
            backgroundImage={backgroundImage}
            sidebarHeader={sidebarHeader}
            menuItems={menuItems}
            fonts={fonts}
            colorPalette={Palette.brown}
          />
          <MainView>
            {props.children}
          </MainView>
        </l.AppLg>
      </div>
      <div className="AdminSidebarsmall">
        <AdminNavbar />
        <s.AppSm>
          <MainView>
            {props.children}
          </MainView>
        </s.AppSm>
      </div>
    </>
  );
}

export default Admin;
