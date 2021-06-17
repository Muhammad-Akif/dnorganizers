import React from 'react'
export default function SlipCards(props) {

  const {item} = props;
  console.log("items ===> ",item)
  
  return (
    <div style={{backgroundColor:"white",padding:"20px"}} className="card control-width">
      <div style={{padding:"5px 0px",borderBottom:"1px solid black"}} className="text-center">
        <strong style={{ fontSize: '3rem',fontFamily: "'Sacramento', Arial, serif"}}> Slips: #{props.title} </strong>
      </div>
      <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
        <li className="fld list-group-item">Branch Code: {item.branchCode}</li>
        <li className="fld list-group-item">Mail: {item.userEmail}</li>
        <li className="fld list-group-item">{item.bankAddress}</li>
        <li className="fld list-group-item">Date: {item.date}</li>
      <div className="row">
        <div className="col-md-6 col-6 rbtn">
          <button type="button" style={{width:"80%"}} class="btn Cbtn Vbtn" onClick={props.verify}>Verify</button>
        </div>
        <div className="col-md-6 col-6 rbtn">
          <button type="button" style={{width:"80%"}} class="btn Cbtn Vbtn" onClick={props.reject}>Reject</button>
        </div>
      </div>
      </ul>
    </div>
  )
}

