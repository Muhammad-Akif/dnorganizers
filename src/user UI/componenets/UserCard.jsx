import React from 'react'
import { useDispatch } from 'react-redux'
import handleBookPress from './sendToInvoices'
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

