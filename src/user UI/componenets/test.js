


// import { ContactsOutlined } from '@material-ui/icons';
// import React from 'react';
// import Navbar from "./Navbar"
// import { useSelector, useDispatch, connect } from 'react-redux';
// import firebase from '../../config/firebase';
// import { setPendingInvoices } from '../../redux/actions';
// import InvoicesTable from './InvoicesTable'
// import ReactToPrint from "react-to-print";

// class Invoices extends React.Component {
//     pullData = () => {
//         firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
//             console.log(snapshot.val())
//             // dispatch(setPendingInvoices(snapshot.val(), email));
//             this.props.setPendingInvoices(snapshot.val(), this.props.email)
//         });
//     }
//     conponentDidMount() {
//         this.pullData();
//     }
//     render() {
//         // const dispatch = useDispatch();
//         // const invoices = useSelector((state) => state.invoices.pendingInvoices);
//         return (
//             <>
//                 <Navbar />
//                 <div>
//                     {/* <ul>
//                     {invoices.map(obj => <li>{obj.eventName}</li>)}
//                 </ul> */}
//                     <div className="text-center">
//                         <strong style={{ fontSize: '5rem', color: "#F14E95", fontFamily: "'Sacramento', Arial, serif" }}> Invoices </strong>
//                     </div>
//                     <ReactToPrint
//                         trigger={() => <button>Print this out!</button>}
//                         content={() => this.componentRef}
//                     />
//                     <InvoicesTable ref={(el) => (this.componentRef = el)} />
//                 </div>
//             </>
//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPendingInvoices: (val, email) => dispatch(setPendingInvoices(val, email))
//     }
// };
// const mapStateToProps = (state) => {
//     return {
//         email: state.auth.email
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Invoices)



// import React from "react";
// import ReactToPrint from "react-to-print";

// const thStyle = {
//   fontFamily: "Anton",
//   fontWeight: "normal",
//   fontStyle: "normal"
// };

// class ComponentToPrint extends React.Component {
//   render() {
//     return (
    //   <table>
    //     <thead style={thStyle}>
    //       <th>column 1</th>
    //       <th>column 2</th>
    //       <th>column 3</th>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>data 1</td>
    //         <td>data 2</td>
    //         <td>data 3</td>
    //       </tr>
    //       <tr>
    //         <td>data 1</td>
    //         <td>data 2</td>
    //         <td>data 3</td>
    //       </tr>
    //       <tr>
    //         <td>data 1</td>
    //         <td>data 2</td>
    //         <td>data 3</td>
    //       </tr>
    //     </tbody>
    //   </table>
//     );
//   }
// }

// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <button>Print this out!</button>}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={(el) => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

// export default Example;
