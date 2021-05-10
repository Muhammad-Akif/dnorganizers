import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ScrollToTop from '../config/ScrollToTop';
import View from '../components/View Details/View';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const HomeRoute = () => {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {/* main */}
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/event/:name' component={View} />
            {/* <Redirect to='/' /> */}
          </Switch>
        </ScrollToTop>
      </Router>
    )
}

export default HomeRoute;