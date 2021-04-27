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
import Custom from './user UI/componenets/Custom'
import Invoices from './user UI/componenets/Invoices'
import Logout from './user UI/componenets/Logout.jsx'
import Main from './components/MainView/Home/Main';
import About from './components/MainView/About/About';
import Services from './components/MainView/Services/Services';
import Blog from './components/MainView/Blog/Blog';
import Contacts from './components/MainView/Contacts/Contacts';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/user' component={User} />
          <Route exact path='/weddingPackages' component={Wedpack} />
          <Route exact path='/birthdaypackages' component={Birthpack} />
          <Route exact path='/corporatePackages' component={Corppack} />
          <Route exact path='/userRatings' component={Ratings} />
          <Route exact path='/userBooked' component={Booked} />
          <Route exact path='/userInvoices' component={Invoices} />
          <Route exact path='/userCustom' component={Custom} />
          <Route exact path='/admin' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/:name' component={View} />
          <Redirect to='/' />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default Routes