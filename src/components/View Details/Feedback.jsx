import React from 'react'
import FeedbackRating from './FeedbackRating'
export default function Feedback() {
    return (
        <div id="fh5co-testimonial">
            <div id="feedback" className="container-fluid">
                <div className="row">
                    <div className="animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Best Wishes</span>
                            <h2>Some feedbacks</h2>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-12 animate-box">
                            <div className="wrap-testimony">
                                <div className="owl-carousel-fullwidth">
                                    <div className="item pt-0">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src="../images/gallery/wg2.jpg" alt="user" />
                                            </figure>
                                            <span>Jenny Disoza <a href="# " className="twitter">Twitter</a></span>
                                            {/* <h1><FeedbackRating/></h1> */}
                                            <blockquote>
                                                <p>"Thanks a lot for making my precious day a never-forgettable and giving me all the special memories for this beautiful day of my life"</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src="../images/gallery/wg10.jpg" alt="user" />
                                            </figure>
                                            <span>Jenessa Shaw <a href="# " className="twitter">Twitter</a></span>
                                            {/* <h1><FeedbackRating/></h1> */}
                                            <blockquote>
                                                <p>"I desired of exactly having a pleasant day like this. Thanks a lot for all the precious meories f this day. Hearty wishes from core of my heart to make you guys more successful."</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src="../images/gallery/wg5.jpg" alt="user" />
                                            </figure>
                                            <span>Aleena Malik <a href="# " className="twitter">Twitter</a></span>
                                            {/* <h1><FeedbackRating/></h1> */}
                                            <blockquote>
                                                <p>"Thanks a lot for making my precious day a never-forgettable and giving me all the special memories for this beautiful day of my life. May God give You much more Success"</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
