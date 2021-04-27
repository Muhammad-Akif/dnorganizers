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
    fullName: 'Yo Yo Travel',
    shortName: 'YO'
  };
  const menuItems = [
    {name: 'Admin', to: '/admin', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'About', to: '/about', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Blog', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Services', to: '/services', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Contacts', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
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
