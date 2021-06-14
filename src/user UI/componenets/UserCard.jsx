import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import handleBookPress from './sendToInvoices'
import MaxWidthDialog from './DesignerModel'
import  data from "../../data/services.json"
export default function UserCard(props) {
  const dispatch = useDispatch();
  const { id, name, theme, venu, menu, designerName,occuredDate,noOfPeople, price, type } = props;

  const pendingInvoices = useSelector(state => state.invoices.pendingInvoices)
  const email = localStorage.getItem('user')
  const designerDetails = data.DesignersProfile.filter((e) => {
    if (e.name == designerName) {
      return true
    }
    return false
  })[0]
  console.log("designerDetails ====>", designerDetails)
  const menuss = menu.map(item => {
    return item.name;
  })
  return (
    <div className="card control-width">
      <div style={{ padding: "5px 0px", borderBottom: "1px solid black" }} className="text-center">
        <strong style={{ fontSize: '3rem', fontFamily: "'Sacramento', Arial, serif" }}> {name} </strong>
      </div>
      <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
        <li className="fld list-group-item">{theme}</li>
        <li className="fld list-group-item">Designer: {designerName} (<MaxWidthDialog designerDetails={designerDetails} title="profile"/>)</li>
        <li className="fld list-group-item">{venu}</li>
        <li className="fld list-group-item">Cards: (<MaxWidthDialog designerDetails={designerDetails} title="card"/>)</li>
        <li className="fld list-group-item">{menuss.join(", ")}</li>
        <li className="fld list-group-item" style={{fontSize:"16px"}}>{occuredDate}</li>
        <li className="fld list-group-item" style={{fontSize:"14px"}}>Peoples: <span style={{fontFamily:"book"}}>{noOfPeople}</span></li>
        <li className="fld list-group-item" style={{ fontSize: '2.2rem', fontFamily: "serif" }}><strong>Rs{price}</strong></li>
      </ul>
      {

        <button type="button" onClick={() => handleBookPress(id, name, theme, menu, venu, price, type, email,noOfPeople, dispatch)} class="btn Cbtn">BOOK NOW</button>
      }
    </div>
  )
}

