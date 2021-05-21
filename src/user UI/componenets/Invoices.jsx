import { ContactsOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react';
import Navbar from "./Navbar"
import { connect } from 'react-redux';
import firebase from '../../config/firebase';
import { setPendingInvoices } from '../../redux/actions';
import InvoicesTable from './InvoicesTable'
import ReactToPrint from "react-to-print";

class PrintHtmlTable extends React.Component {
    render() {
        return (
            <>
                <InvoicesTable />
            </>
        )
    }
}

class Invoices extends React.Component {
    pullData = () => {
        firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
            console.log(snapshot.val())
            this.props.setPendingInvoices(snapshot.val(), this.props.email)
        });
    }
    conponentDidMount() {
        this.pullData();
    }
    render() {
        return (
            <>
                <Navbar />
                <div>
                    {/* <ul>
                    {invoices.map(obj => <li>{obj.eventName}</li>)}
                </ul> */}
                    <PrintHtmlTable ref={(el) => (this.componentRef = el)} />
                    <ReactToPrint
                        trigger={() => <button className="btn Cbtn btn-wdh">Print out!</button>}
                        content={() => this.componentRef}
                    />
                </div>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPendingInvoices: (val, email) => dispatch(setPendingInvoices(val, email))
    }
};
const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoices)
