import React from 'react'
import Button from '@material-ui/core/Button';
export default function ReviewCards(props) {
  return (
    // <div style={{backgroundColor:"white",borderRadius:"none",margin:"10px",width:"31%"}} className="card ReviewsCard">
    //   <div style={{padding:"5px 0px",borderBottom:"1px solid black"}} className="text-center">
    //     {/* <strong style={{ fontSize: '3rem',fontFamily: "'Sacramento', Arial, serif"}}> Muhammad Akif </strong> */}
    //     <div className="row">
    //     <div className="col-md-6 col-12">
    //       <button type="button" style={{width:"80%",color:"#f14495"}} class="btn ">Verify</button>
    //     </div>
    //     <div className="col-md-6 col-12">
    //       <button type="button" style={{width:"80%",color:"#f14495"}} class="btn">Reject</button>
    //     </div>
    //   </div>
    //   </div>
    //   <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
    //     <li className="fld list-group-item">Mail: Muhammad-AKif@outlook.com</li>
    //     <li className="fld list-group-item">Description: House#129, Samnabad gudar road Faislabad, Pakistan</li>
    //     <li className="fld list-group-item">* * * * * (5.0)</li>
    //     <li className="fld list-group-item">Date: 25/5/2021</li>
    //   </ul>
    // </div>
    <div className="container-fluid" className="Review">
      <div className="row">
        <div className="col-md-12" style={{ marginTop: "2%", fontSize: "16px", color: "black" }}>akifmuhammad321@gmail.com</div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{}}>* * * * *</div>
      </div>
      <div className="row text-center">
        <div className="col-md-12" style={{fontSize:"15px"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
      </div>
      <div className="row" >
        <div className="col-6 col-sm-6 col-md-6 rbtn">
          {/* <button type="button" style={{ width: "45%", color: "#F14E95" }} class="btn">Accept</button> */}
          <Button variant="outlined" color="secondary" style={{ padding: "5px",margin: "5px",border: "none", fontSize: "13px" }}>
            Accept
          </Button>
        </div>
        <div className="col-6 col-sm-6 col-md-6 rbtn">
          {/* <button type="button" style={{ width: "45%", color: "red" }} class="btn">Discord</button> */}
          <Button variant="outlined" color="secondary" style={{ padding: "5px",margin: "5px",border: "none", fontSize: "13px" }}>
            Discord
          </Button>
        </div>
      </div>
    </div>
  )
}

