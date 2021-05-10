import {useState,useEffect} from "react"
import Main from '../components/MainView/Home/Main';
import Birthday from '../components/MainView/Birthday/Birthday'
import Corporate from '../components/MainView/Corporate/Corporate'
import Reviews from '../components/MainView/Reviews/Reviews'
import VerifySlips from '../components/MainView/Verify/VerfySlips.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const AdminRoute = () => {
    const [isReload,setReload] = useState(true)
    useEffect(() => {
        setReload(false)
    }, [])
    return (
      <Router>
          <Switch>
            {/* admin */}
            <Route exact path='/wedding' component={Main} />
            <Route exact path='/birthday' component={Birthday} />
            <Route exact path='/corporate' component={Corporate} />
            <Route exact path='/VerifySlips' component={VerifySlips} />
            <Route exact path='/Reviews' component={Reviews} />
            <Redirect to='/wedding' />
          </Switch>
      </Router>
    )
}

export default AdminRoute;