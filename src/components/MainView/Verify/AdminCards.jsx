import React from 'react'
export default function SlipCards(props) {
  return (
    <div style={{backgroundColor:"white",padding:"20px"}} className="card control-width">
      <div style={{padding:"5px 0px",borderBottom:"1px solid black"}} className="text-center">
        <strong style={{ fontSize: '3rem',fontFamily: "'Sacramento', Arial, serif"}}> Muhammad Akif </strong>
      </div>
      <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
        <li className="fld list-group-item">Branch Code: 94562</li>
        <li className="fld list-group-item">Mail: Muhammad-AKif@outlook.com</li>
        <li className="fld list-group-item">House#129, Samnabad gudar road Faislabad, Pakistan</li>
        <li className="fld list-group-item">Date: 25/5/2021</li>
      <div className="row">
        <div className="col-md-6 col-6 rbtn">
          <button type="button" style={{width:"80%"}} class="btn Cbtn Vbtn">Verify</button>
        </div>
        <div className="col-md-6 col-6 rbtn">
          <button type="button" style={{width:"80%"}} class="btn Cbtn Vbtn">Reject</button>
        </div>
      </div>
      </ul>
    </div>
  )
}

