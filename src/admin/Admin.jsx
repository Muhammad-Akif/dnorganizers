import React from 'react';
import * as l from '../AdminAppLg.styles';
import * as s from '../AdminAppSm.styles';
import * as Palette from '../colors';
import AdminNavbar from './AdminNavbar'
import './Global.scss';
import "./Admin.css"

// Components
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView'


const Admin = (props) => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'DN',
    shortName: 'DN'
  };
  const menuItems = [
    { name: 'Wedding', to: '/wedding', icon: '/icons/about.svg', subMenuItems: [] },
    { name: 'Birthday', to: '/birthday', icon: '/icons/blog.svg', subMenuItems: [] },
    { name: 'Corporate', to: '/corporate', icon: '/icons/destinations.svg', subMenuItems: [] },
    { name: 'VerifySlips', to: '/VerifySlips', icon: '/icons/contacts.svg', subMenuItems: [] },
    { name: 'Reviews', to: '/Reviews', icon: '/icons/services.svg', subMenuItems: [] },
    { name: 'Logout', to: '/', subMenuItems: [] }
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
       <AdminNavbar/>
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
