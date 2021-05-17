import React from 'react'

export default function UserCard(props) {
  return (
    <div className="card control-width">
      <div style={{padding:"5px 0px",borderBottom:"1px solid black"}} className="text-center">
        <strong style={{ fontSize: '3rem',fontFamily: "'Sacramento', Arial, serif"}}> {props.name} </strong>
      </div>
      <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
        <li className="fld list-group-item">{props.theme}</li>
        <li className="fld list-group-item">{props.venu}</li>
        <li className="fld list-group-item">{props.menu.join(", ")}</li>
        <li className="fld list-group-item" style={{ fontSize: '2.2rem',fontFamily: "serif"}}><strong>Rs{props.price}</strong></li>
      </ul>
      <button type="button" class="btn Cbtn">BOOK NOW</button>
    </div>
  )
}
