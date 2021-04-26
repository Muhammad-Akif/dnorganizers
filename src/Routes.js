import React from 'react';
// import { Switch, Route } from 'react-router-dom';
//dnorganizers
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './config/ScrollToTop';
import View from './components/View Details/View';
import User from './user UI/User'
import Admin from './admin/Admin'
import Wedpack from './user UI/componenets/Wedpack'
import Birthpack from './user UI/componenets/Birthpack'
import Corppack from './user UI/componenets/Corppack'
import Ratings from './user UI//componenets/Ratings'
import Booked from './user UI//componenets/Booked'
import Invoices from './user UI/componenets/Invoices'
import Custom from './user UI/componenets/Custom'
import Logout from './user UI/componenets/Logout.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// Components
import Main from './components/MainView/Home/Main';
import About from './components/MainView/About/About';
import Destinations from './components/MainView/Destinations/Destinations';
import Country from './components/MainView/Destinations/Country/Country'
import Blog from './components/MainView/Blog/Blog';
import Services from './components/MainView/Services/Services';
import Contacts from './components/MainView/Contacts/Contacts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About} />
      <Route exact path='/destinations' component={Destinations} />
      <Route exact path='/destinations/:country' component={Country} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contacts' component={Contacts} />
    </Switch>
  )
}

export default Routes