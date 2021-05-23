import React from 'react';
import Navbar from "./Navbar"
import { connect } from 'react-redux';
import firebase from '../../config/firebase';
import { setPendingInvoices, updatePendingInvoices, deletePendingInvoices } from '../../redux/actions';
import InvoicesTable from './InvoicesTable'
import ReactToPrint from "react-to-print";
import FormDialog from './ClearForm';
import CircularProgress from '@material-ui/core/CircularProgress';

class PrintHtmlTable extends React.Component {
    render() {
        return (
            <>
                <InvoicesTable obj={this.props.obj} />
            </>
        )
    }
}

class Invoices extends React.Component {
    
    constructor(props) {
        super()
        this.referenceContent = [];
        this.length = 0;
        this.clearbtn = false;
    }
    pullData = (setPendingInvoices, email) => {
        firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
            console.log(snapshot.val())
            setPendingInvoices(snapshot.val(), email)
            
        });
        // const a = this.props.invoices.length;
        
    }
    componentDidMount() {
        this.pullData(this.props.setPendingInvoices, this.props.email);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.invoices.length == this.length) {
            return
        } else {
            this.length = prevProps.invoices.length;
            this.referenceContent = [];
            for (let i = 0; i < this.length; i++) {
                this.referenceContent.push(`i${i}`);
            }
        }
    }
    render() {
        // const email = useSelector(state => state.auth.email)
        return (
            <>
            {console.log('---------------------',this.props.email)}
                <Navbar />
                {this.props.invoices.length >=1 ?
                    this.props.invoices.map((obj, i) => {
                        return (
                            <>
                                {console.log("-=-=-=",obj.status)}
                                {obj.status === "inprogress" ? this.clearbtn=true : this.clearbtn=false}
                                <PrintHtmlTable obj={obj} ref={(el) => (this.referenceContent[i] = el)} />
                                <ReactToPrint
                                    trigger={() => <button className="btn Cbtn btn-wdh">Print out!</button>}
                                    content={() => this.referenceContent[i]}
                                />
                                {this.clearbtn && 
                                <button className="btn Cbtn Dbtn btn-wdh" onClick={event => {
                                    // this.props.updatePendingInvoices()
                                    firebase.database().ref(`pendingInvoices/${obj.id}`).remove().then((data) => {
                                        this.props.deletePendingInvoices(obj.id)
                                        alert('Successfully Deleted', 'You have successfully deleted invoice.', [{ text: 'Ok' }])
                                    }).catch((error) => {
                                        alert('Unable to Delete Invoice', 'Please check your network connection.', [{ text: 'Ok' }])
                                        // setIsDeleting(false);
                                    })
                                    // console.log('++++++++++++++',obj)
                                }}>
                                    Delete
                                </button>}
                                {this.clearbtn && <FormDialog obj={obj} />}
                                <hr style={{ border: "1px dashed grey" }} />
                            </>
                        )
                    })
                    :
                <CircularProgress style={{ display: "table", margin: "30vh auto" }} color="secondary" /> 
            }
            </>
        )
    }
}
const mapDispatchToProps = {
    setPendingInvoices: setPendingInvoices,
    updatePendingInvoices: updatePendingInvoices,
    deletePendingInvoices: deletePendingInvoices,
};
const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        invoices: state.invoices.pendingInvoices
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoices)
















// import { ContactsOutlined } from '@material-ui/icons';
// import React, { useEffect, useRef } from 'react';
// import Navbar from "./Navbar"
// import { connect } from 'react-redux';
// import firebase from '../../config/firebase';
// import { setPendingInvoices, updatePendingInvoices, deletePendingInvoices } from '../../redux/actions';
// import InvoicesTable from './InvoicesTable'
// import ReactToPrint from "react-to-print";
// import FormDialog from './ClearForm';

// class PrintHtmlTable extends React.Component {
//     render() {
//         return (
//             <>
//                 <InvoicesTable obj={this.props.obj} />
//             </>
//         )
//     }
// }

// class Invoices extends React.Component {
    
//     constructor(props) {
//         super()
//         this.referenceContent = [];
//         this.length = 0;
//         this.clearbtn = false;
//     }
//     pullData = (setPendingInvoices, email) => {
//         firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
//             console.log(snapshot.val())
//             setPendingInvoices(snapshot.val(), email)
            
//         });
//         // const a = this.props.invoices.length;

//     }
//     componentDidMount() {
//         this.pullData(this.props.setPendingInvoices, this.props.email);
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.invoices.length == this.length) {
//             return
//         } else {
//             this.length = prevProps.invoices.length;
//             this.referenceContent = [];
//             for (let i = 0; i < this.length; i++) {
//                 this.referenceContent.push(`i${i}`);
//             }
//         }
//     }
//     render() {
//         // const email = useSelector(state => state.auth.email)
//         return (
//             <>
//             {console.log('---------------------',this.props.email)}
//                 <Navbar />
//                 {
//                     this.props.invoices.map((obj, i) => {
//                         return (
//                             <>
//                                 {console.log("-=-=-=",obj.status)}
//                                 {obj.status === "inprogress" ? this.clearbtn=true : this.clearbtn=false}
//                                 <PrintHtmlTable obj={obj} ref={(el) => (this.referenceContent[i] = el)} />
//                                 <ReactToPrint
//                                     trigger={() => <button className="btn Cbtn btn-wdh">Print out!</button>}
//                                     content={() => this.referenceContent[i]}
//                                 />
//                                 {this.clearbtn && 
//                                 <button className="btn Cbtn Dbtn btn-wdh" onClick={event => {
//                                     // this.props.updatePendingInvoices()
//                                     firebase.database().ref(`pendingInvoices/${obj.id}`).remove().then((data) => {
//                                         this.props.deletePendingInvoices(obj.id)
//                                         alert('Successfully Deleted', 'You have successfully deleted invoice.', [{ text: 'Ok' }])
//                                     }).catch((error) => {
//                                         alert('Unable to Delete Invoice', 'Please check your network connection.', [{ text: 'Ok' }])
//                                         // setIsDeleting(false);
//                                     })
//                                     // console.log('++++++++++++++',obj)
//                                 }}>
//                                     Delete
//                                 </button>}
//                                 {this.clearbtn && <FormDialog obj={obj} />}
//                                 <hr style={{ border: "1px dashed grey" }} />
//                             </>
//                         )
//                     })
//                 }
//             </>
//         )
//     }
// }
// const mapDispatchToProps = {
//     setPendingInvoices: setPendingInvoices,
//     updatePendingInvoices: updatePendingInvoices,
//     deletePendingInvoices: deletePendingInvoices,
// };
// const mapStateToProps = (state) => {
//     return {
//         email: state.auth.email,
//         invoices: state.invoices.pendingInvoices
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Invoices)