import React from 'react'
import { Review } from "./FeedbackRating"

export default function FeedbackCards(props) {
    console.log("newData===========>", props)
    return (
        <div className="col-md-4 animate-box">
            <div className="item pt-0">
                <div className="active text-center">
                    <h4 style={{ marginBottom: "10px" }}>{props.userEmail}</h4>
                    <span>
                        <Review rate={props?.ratings.ratingNumber} />
                    </span>
                    {/* <span>Jenny Disoza <a href="# " className="twitter">Twitter</a></span> */}
                    <blockquote>
                        {/* <p>"Thanks a lot for making my precious day a never-forgettable and giving me all the special memories for this beautiful day of my life"</p> */}
                        <p>{props.ratings.ratingDesc}</p>
                    </blockquote>
                </div>
            </div>
        </div >
    )
}
