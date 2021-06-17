import React from 'react'
import Button from '@material-ui/core/Button';
import {Review} from "../../View Details/FeedbackRating"
export default function ReviewCards(props) {
  const { item } = props
  console.log("props ===> ", item)
  return (
    <div className="container-fluid" className="Review">
      <div className="row">
        <div className="col-md-12" style={{ marginTop: "2%", fontSize: "16px", color: "black" }}>{item.userEmail}</div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{marginTop:"10px" }}>
          <Review rate={item.ratings.ratingNumber}/>
        </div>
      </div>
      <div className="row text-center" >
        <div className="col-md-12" style={{ fontSize: "15px",marginTop:"-10px" }}>
          {item.ratings.ratingDesc}
        </div>
      </div>
      <div className="row" >
        <div className="col-6 col-sm-6 col-md-6 rbtn">
          <Button variant="outlined" color="secondary" style={{ padding: "5px", margin: "5px", border: "none", fontSize: "13px" }} onClick={(e) => {
            props.acceptReview()
          }}>
            Accept
          </Button>
        </div>
        <div className="col-6 col-sm-6 col-md-6 rbtn">
          <Button variant="outlined" color="secondary" style={{ padding: "5px", margin: "5px", border: "none", fontSize: "13px" }} onClick={(e) => {
            props.rejectReview()
          }}>
            Discord
          </Button>
        </div>
      </div>
    </div>
  )
}

