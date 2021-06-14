import React, { useState, useEffect } from 'react';
import SlipCards from './AdminCards'
import Admin from '../../../admin/Admin';
import firebase from '../../../config/firebase';
import UserClear from '../../../Models/models/userClear';

const VerifySlips = () => {

  const [slips, setSlips] = useState([]);

  useEffect(() => {
      const ref = firebase.database().ref('userClear/')
      ref.on('value', function (snapshot) {
          // console.log(snapshot.val());
          const transformedData = [];
          for (let id in snapshot.val()) {
              const obj = snapshot.val()[id];
              transformedData.push(
                  new UserClear(id, obj.bankAddress, obj.branchCode, obj.date, obj.pendingInvoiceId, obj.invoiceData, obj.userEmail)
              )
          }
          setSlips([...transformedData]);
      });
      //remove listener
      return () => ref.off('value');
  }, [])


  const verifySlip = (pendingInvoiceId, userClearId, invoiceData) => {
    Promise.all([
        firebase.database().ref(`pendingInvoices/${pendingInvoiceId}`).remove(),
        firebase.database().ref(`userClear/${userClearId}`).remove(),
        firebase.database().ref(`bookedEvents/`).push({ ...invoiceData, status: 'inprogress', ratings: '0' })
    ]).then((data) => {
        // console.log("Operations Successful", data)
        alert('Verified Successfully!', 'User registered to this event.', [{ text: 'Ok', style: 'destructive' }])
    }).catch((e) => {
        alert('Something went wrong!', 'Check your network.', [{ text: 'Ok', style: 'destructive' }])
    })
}

const rejectSlip = (pendingInvoiceId, userClearId) => {
    Promise.all([
        firebase.database().ref(`pendingInvoices/${pendingInvoiceId}`).update({ status: 'submitwrong' }),
        firebase.database().ref(`userClear/${userClearId}`).remove(),
    ]).then((data) => {
        // console.log("Operations Successful", data)
        alert('Rejected Successfully!', 'User will fillout again.', [{ text: 'Ok', style: 'destructive' }])
    }).catch((e) => {
        alert('Something went wrong!', 'Check your network.', [{ text: 'Ok', style: 'destructive' }])
    })
}


  return <Admin>
    <div className="row">
      <div style={{ marginBottom: "0px", paddingBottom: "0px" }} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
        <h2>Verfy the Pending Slips</h2>
        <p style={{ marginTop: "-10px", paddingBottom: "5px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae odit sapiente magni eaque vero.
          </p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0px" }}>
      {
        slips.map((item, index) => <SlipCards key={item.id} title={index+1} item={item} reject={rejectSlip.bind(null, item.pendingInvoiceId, item.id)} verify={verifySlip.bind(null, item.pendingInvoiceId, item.id, item.invoiceData)}  />)
      }
    </div>
  </Admin>
}

export default VerifySlips;