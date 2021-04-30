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
    {name: 'Packages', to: '/Packages', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'Rating', to: '/Rating', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Verify', to: '/Verify', icon: '/icons/blog.svg', subMenuItems: [] },
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
