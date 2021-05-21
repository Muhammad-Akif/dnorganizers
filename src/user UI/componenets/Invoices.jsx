import { ContactsOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import Navbar from "./Navbar"
import {useSelector, useDispatch} from 'react-redux';
import firebase from '../../config/firebase';
import { setPendingInvoices } from '../../redux/actions';

export default function Invoices() {
    const dispatch = useDispatch();
    
    const pullData = () => {
        firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
            console.log(snapshot.val())
            dispatch(setPendingInvoices(snapshot.val(), 'akifmuhammad321@gmail.com'));
        });
    }
    useEffect(() => {
        pullData();
    }, [])
    const invoices = useSelector((state) => state.invoices.pendingInvoices);
    return (
        <>
        <Navbar/>
        <div>
            <ul>
                {invoices.map(obj => <li>{obj.eventName}</li>)}
            </ul>
        </div>
        </>
    )
}



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
//       <table>
//         <thead style={thStyle}>
//           <th>column 1</th>
//           <th>column 2</th>
//           <th>column 3</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//         </tbody>
//       </table>
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
