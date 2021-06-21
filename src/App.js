import './App.css';
import HomeRoute from './Routes/HomeRoute';
import AdminRoute from './Routes/AdminRoute';
import UserRoute from './Routes/UserRoute';
import Routes from './Routes';
import { Provider, useSelector } from "react-redux";
import store from './redux/store';

function App() {
  return(
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;


// if (!sessionStorage.getItem("email")) {
//   return (
//     <Router>
//       <ScrollToTop>
//         <Switch>
//           {/* main */}
//           <Route exact path='/' component={Home} />
//           <Route exact path='/login' component={Login} />
//           <Route exact path='/signup' component={Signup} />
//           <Route exact path='/event/:name' component={View} />
//           {/* <Redirect to='/' /> */}
//         </Switch>
//       </ScrollToTop>
//     </Router>
//   )
// }
// else if (sessionStorage.getItem("email") === "admin@gmail.com") {
//   return (
//     <Router>
//         <Switch>
//           {/* admin */}
//           <Route exact path='/wedding' component={Main} />
//           <Route exact path='/birthday' component={Birthday} />
//           <Route exact path='/corporate' component={Corporate} />
//           <Route exact path='/VerifySlips' component={VerifySlips} />
//           <Route exact path='/Reviews' component={Reviews} />
//           <Redirect to='/wedding' />
//         </Switch>
//     </Router>
//   )
// }
// else {
//   return (
//     <Router>
//         <Switch>
//           {/* user */}
//           <Route exact path='/packages' component={User} />
//           <Route exact path='/ratings' component={Ratings} />
//           <Route exact path='/booked' component={Booked} />
//           <Route exact path='/invoices' component={Invoices} />
//           <Route exact path='/logout' component={Logout} />
//           <Redirect to='/packages' />
//         </Switch>
//     </Router>
//   )
// }