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
        this.isShowActivity = true
        this.pullData(this.props.setPendingInvoices, localStorage.getItem('user'));
        this.p = setInterval(() => {
           if (this.props.invoices.length == 0) {
                this.isShowActivity = false;
            }
        }, 5000)
    }
    // componentDidUpdate(prevProps) {
    //     console.log('componentDidUpdate',prevProps)
    //     if (prevProps.invoices.length == this.length) {
    //         console.log('======>',prevProps, this.length)
    //         return
    //     } else {
    //         console.log('else stattement')
    //         this.length = prevProps.invoices.length;
    //         this.referenceContent = [];
    //         for (let i = 0; i < this.length; i++) {
    //             this.referenceContent.push(`i${i}`);
    //         }
    //     }
    // }
    render() {
        // const email = useSelector(state => state.auth.email)
        return (
            <>
                {/* {console.log('---------------------',this.props.email)} */}
                <Navbar />
                {console.log("Email Invoices", localStorage.getItem('user'))}
                {this.props.invoices.length > 0 ?
                    this.props.invoices.map((obj, i) => {
                        { console.log('invoices length =>', this.props.invoices) }
                        return (
                            <>
                                {obj.status === "inprogress" ? this.clearbtn = true : this.clearbtn = false}
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
                    : !this.isShowActivity ? <CircularProgress style={{ display: "table", margin: "30vh auto" }} color="secondary" />: (
                        <div style={{margin: '15% auto', color: 'red', display: 'table', fontSize: '30px',fontFamily:"book"}} >Add Atleast one package</div>
                    )
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
        // email: state.auth.email,
        invoices: state.invoices.pendingInvoices
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoices)



// import React from 'react'
// class MyPrintableComponent extends React.Component {
//     render () {
//         return (
//             <div id={this.props.printableId}>
//                 <h1>IM GUNNA PRINT</h1>
//             </div>
//         )
//     }
// }

// export default class Invoices extends React.Component {
//     printOrder = () => {
//         const printableElements = document.getElementById('printme').innerHTML;
//         const orderHTML = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
//         const oldPage = document.body.innerHTML;
//         document.body.innerHTML = orderHTML;
//         window.print();
//         document.body.innerHTML = oldPage
//     }
//     render () {
//         return (
//             <div className='container'>
//                 <div onClick={() => this.printOrder()}>
//                     Print Order
//                 </div>
//                 <MyPrintableComponent printableId='printme'/>
//             </div>
//         )
//     }
// }












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