import React from 'react';
import * as s from '../App.styles';
import * as Palette from '../colors'
import './Global.scss';

// Components
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../components/MainView/MainView'


const Admin = (props) => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'DN-Org.',
    shortName: 'DN'
  };
  const menuItems = [
    {name: 'Wedding', to: '/Packages', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Birthday', to: '/Rating', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Corporate', to: '/Rating', icon: '/icons/destinations.svg', subMenuItems: [] },
    {name: 'Verify Slip', to: '/Verify', icon: '/icons/contacts.svg', subMenuItems: [] },
    {name: 'Reviews', to: '/Reviews', icon: '/icons/services.svg', subMenuItems: [] },
    // {name: 'Invoices', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
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
    </s.App>
  );
}

export default Admin;
