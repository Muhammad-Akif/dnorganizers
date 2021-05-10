import User from '../user UI/User'
import Ratings from '../user UI/componenets/Ratings'
import Booked from '../user UI/componenets/Booked'
import Invoices from '../user UI/componenets/Invoices'
import Logout from '../user UI/componenets/Logout.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const UserRoute = () => {
    return (
      <Router>
          <Switch>
            {/* user */}
            <Route exact path='/packages' component={User} />
            <Route exact path='/ratings' component={Ratings} />
            <Route exact path='/booked' component={Booked} />
            <Route exact path='/invoices' component={Invoices} />
            <Route exact path='/logout' component={Logout} />
            <Redirect to='/packages' />
          </Switch>
      </Router>
    )
}

export default UserRoute;