import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Comp
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import ScrollToTop from './config/ScrollToTop';
// import View from './components/View Details/View';
// import User from './user UI/User'
// import Admin from './admin/Admin'
// import Wedpack from './user UI/componenets/Wedpack'
// import Birthpack from './user UI/componenets/Birthpack'
// import Corppack from './user UI/componenets/Corppack'
// import Ratings from './user UI//componenets/Ratings'
// import Booked from './user UI//componenets/Booked'
// import Custom from './user UI/componenets/Custom'
// import Invoices from './user UI/componenets/Invoices'
// import Logout from './user UI/componenets/Logout.jsx'
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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
    <>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/user' component={User} />
        <Route exact path='/weddingPackages' component={Wedpack} />
        <Route exact path='/birthdaypackages' component={Birthpack} />
        <Route exact path='/corporatePackages' component={Corppack} />
        <Route exact path='/userRatings' component={Ratings} />
        <Route exact path='/userBooked' component={Booked} />
        <Route exact path='/userInvoices' component={Invoices} />
        <Route exact path='/userCustom' component={Custom} /> */}
        <Route exact path='/admin/main' component={Main} />
        <Route exact path='/admin/about' component={About} />
        <Route exact path='/admin/destinations' component={Destinations} />
        <Route exact path='/admin/blog' component={Blog} />
        <Route exact path='/admin/services' component={Services} />
        <Route exact path='/admin/contacts' component={Contacts} />
        {/* <Redirect to='/' /> */}
        <Route exact path='/destinations/:country' component={Country} />
        {/* <Route exact path='/:name' component={View} /> */}
        </>
  )
}

export default Routes