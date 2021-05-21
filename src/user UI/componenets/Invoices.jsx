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
                <InvoicesTable obj={this.props.obj}/>
            </>
        )
    }
}

class Invoices extends React.Component {
    pullData = (setPendingInvoices, email) => {
        firebase.database().ref('pendingInvoices').once('value', function (snapshot) {
            console.log(snapshot.val())
            setPendingInvoices(snapshot.val(), email)
        });
    }
    componentDidMount() {
        this.pullData(this.props.setPendingInvoices, this.props.email);
    }
    render() {
        return (
            <>
                <Navbar />
                {
                    this.props.invoices.map(obj => {
                        return (
                            <>
                                <PrintHtmlTable obj={obj} ref={(el) => (this.componentRef = el)} />
                                <ReactToPrint
                                    trigger={() => <button className="btn Cbtn btn-wdh">Print out!</button>}
                                    content={() => this.componentRef}
                                />
                                <hr style={{border: "1px dashed grey"}}/>
                            </>
                        )
                    })
                }
            </>
        )
    }
}
const mapDispatchToProps = {
    setPendingInvoices: setPendingInvoices
};
const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        invoices: state.invoices.pendingInvoices
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Invoices)
