import React from 'react'
import FeedbackCard from "./FeedbackCard"

export default function Feedback(props) {
    return (
        <div id="fh5co-testimonial">
            <div className="container">
                <div className="row">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Best Wishes</span>
                            <h2>Some feedbacks</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <div className="wrap-testimony">
                                <div className="owl-carousel-fullwidth">
                                    {props.testimonials ? props.testimonials.map((v, i) => {
                                        return (
                                            <FeedbackCard {...v} />
                                        )
                                    }) : "loading"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
