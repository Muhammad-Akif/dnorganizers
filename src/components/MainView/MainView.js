import React from 'react';
import * as s from './MainView.styles';
import Routes from '../../Routes'
// import Main from '../../components/MainView/Home/Main';
// import About from './components/MainView/About/About';
// import Destinations from './components/MainView/Destinations/Destinations';
// import Country from './components/MainView/Destinations/Country/Country'
// import Blog from './components/MainView/Blog/Blog';
// import Services from './components/MainView/Services/Services';
// import Contacts from './components/MainView/Contacts/Contacts';

const MainView = (props) => {
  return (
    <s.MainViewContainer>
      {props.children}
    </s.MainViewContainer>
  )
}

export default MainView