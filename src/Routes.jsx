import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './config/ScrollToTop';
import View from './components/View Details/View';
import User from './user UI/User'
import Ratings from './user UI//componenets/Ratings'
import Booked from './user UI//componenets/Booked'
import Invoices from './user UI/componenets/Invoices'
import Logout from './user UI/componenets/Logout.jsx'
import Main from './components/MainView/Home/Main.jsx';
import Birthday from './components/MainView/Birthday/Birthday'
import Corporate from './components/MainView/Corporate/Corporate'
import Filter from './components/MainView/Reviews/Filter'
import VerifySlips from './components/MainView/Verify/VerfySlips.jsx'
import CV from "./user UI/componenets/CV"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Routes = () => {
  // if (localStorage.getItem('user')) {
  const { email, logout } = useSelector(state => state.auth);
  let isShowAdmin = false;
  if (localStorage.getItem('admin')) {
    isShowAdmin = true;
  }

  let isShowUser = false;
  if (logout || email.length > 2) {
    isShowUser = true;
    console.log('inside ===++++++++')
  }

  if (localStorage.getItem('user')) {
    isShowUser = true;
  }


  console.log('routes===================>', email, localStorage.getItem('user'))

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          {/* main */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route exact path='/event/:name' component={View} />
          {/* admin */}

          {/* user */}
          {
            isShowAdmin ? (
              <>
                <Route path='/wedding' component={Main} />
                <Route path='/birthday' component={Birthday} />
                <Route path='/corporate' component={Corporate} />
                <Route path='/VerifySlips' component={VerifySlips} />
                <Route path='/filter' component={Filter} />
              </>
            ) : isShowUser ? (

              <>
                <Route path='/packages' component={User} />
                <Route path='/ratings' component={Ratings} />
                <Route path='/booked' component={Booked} />
                <Route path='/invoices' component={Invoices} />
                <Route path='/cv' component={CV} />
                <Route path='/logout' component={Logout} />
              </>
            ) : (
              <Redirect to='/' />

            )
          }
          {
            // isShowUser ? (
            // ): (
            //     <>
            //     {/* <Redirect to='/' /> */ }
            //   </>
            // )
          }

          <Redirect to='/' />
        </Switch>
      </ScrollToTop>
    </Router >
  )
}

export default Routes;