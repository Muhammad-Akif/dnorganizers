import React from 'react'
import {Review} from "./FeedbackRating"

export default function FeedbackCards(props) {
    console.log("newData===========>",props)
    return (
        <div className="testimony-slide active text-center">
            {/* <figure>
                <img src="../images/gallery/wg2.jpg" alt="user" />
            </figure> */}
            <h4>{props.userEmail}</h4>
            <Review rate={props.ratings.ratingNumber}/>
            {/* <span>Jenny Disoza <a href="# " className="twitter">Twitter</a></span> */}
            {/* <h1><FeedbackRating/></h1> */}
            <blockquote>
                {/* <p>"Thanks a lot for making my precious day a never-forgettable and giving me all the special memories for this beautiful day of my life"</p> */}
                <p>{props.ratings.ratingDesc}</p>
            </blockquote>
        </div>
    )
}
