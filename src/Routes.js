import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './config/ScrollToTop';
import View from './components/View Details/View';
import User from './user UI/User'
import Wedpack from './user UI/componenets/Wedpack'
import Birthpack from './user UI/componenets/Birthpack'
import Corppack from './user UI/componenets/Corppack'
import Ratings from './user UI//componenets/Ratings'
import Booked from './user UI//componenets/Booked'
import Invoices from './user UI/componenets/Invoices'
import Logout from './user UI/componenets/Logout.jsx'
import Main from './components/MainView/Home/Main.jsx';
import Birthday from './components/MainView/Birthday/Birthday'
import Corporate from './components/MainView/Corporate/Corporate'
import Reviews from './components/MainView/Reviews/Reviews'
import VerifySlips from './components/MainView/Verify/VerfySlips.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import ContactUs from './components/pages/ContactUs';
// import SignUp from './components/pages/SignUp';
// import Marketing from './components/pages/Marketing';
// import Consulting from './components/pages/Consulting';

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          {/* main */}
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/event/:name' component={View} />
          <Route exact path='/corporatePackages' component={Corppack} />
          <Route exact path='/birthdaypackages' component={Birthpack} />
          <Route exact path='/weddingPackages' component={Wedpack} />
          {/* user */}
          <Route exact path='/packages' component={User} />
          <Route exact path='/ratings' component={Ratings} />
          <Route exact path='/booked' component={Booked} />
          <Route exact path='/invoices' component={Invoices} />
          <Route exact path='/logout' component={Logout} />
          {/* admin */}
          <Route exact path='/wedding' component={Main} />
          <Route exact path='/birthday' component={Birthday} />
          <Route exact path='/corporate' component={Corporate} />
          <Route exact path='/VerifySlips' component={VerifySlips} />
          <Route exact path='/Reviews' component={Reviews} />

          <Redirect to='/' />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default Routes