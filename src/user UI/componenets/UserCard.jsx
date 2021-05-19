import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePendingInvoices } from '../../redux/actions'
import firebase from '../../config/firebase';
const handleBookPress = (id, name, theme, menu, venu, price, type, dispatch) => {
  const invoice = {
      theme,
      menu,
      venu,
      price,
      eventName: type,
      isPackage: true,
      serPackName: name,
      serPackId: id,
      userEmail: 'akifmuhammad321@gmail.com',
      bookDate: new Date().toString(),
      occuredDate: false,
      designerName: 'Mast Qalandar',
      status: 'inprogress'
  }
  firebase.database().ref('pendingInvoices/').push(invoice).then((data) => {
      //success callback
      dispatch(updatePendingInvoices(invoice))
      alert('Successfully added to Invoices', 'Please go to invoice section to clear first and continue.', [{ text: 'Ok' }])
  }).catch((error) => {
      //error callback
      alert("Can't book package.", 'Please check your internet connection!', [{ text: 'OK', style: 'destructive' }])
  })

}
export default function UserCard(props) {
  const dispatch = useDispatch();
  const {id, name,theme,venu,menu,price, type} = props;
  return (
    <div className="card control-width">
      <div style={{padding:"5px 0px",borderBottom:"1px solid black"}} className="text-center">
        <strong style={{ fontSize: '3rem',fontFamily: "'Sacramento', Arial, serif"}}> {name} </strong>
      </div>
      <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
        <li className="fld list-group-item">{theme}</li>
        <li className="fld list-group-item">{venu}</li>
        <li className="fld list-group-item">{menu.join(", ")}</li>
        <li className="fld list-group-item" style={{ fontSize: '2.2rem',fontFamily: "serif"}}><strong>Rs{price}</strong></li>
      </ul>
      <button type="button" onClick={()=>handleBookPress(id, name,theme,menu,venu,price, type, dispatch)} class="btn Cbtn">BOOK NOW</button>
    </div>
  )
}

