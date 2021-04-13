import React from 'react'

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
                                    <div className="item pt-0">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src={props.img1} alt="user" />
                                            </figure>
                                            <span>{props.title1} <a href="# " className="twitter">Twitter</a></span>
                                            <blockquote>
                                                <p>"Thanks a lot for making my precious day a never-forgettable and giving me all the special memories for this beautiful day of my life"</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src={props.img2} alt="user" />
                                            </figure>
                                            <span>{props.title2} <a href="# " className="twitter">Twitter</a></span>
                                            <blockquote>
                                                <p>{props.disc2}</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-slide active text-center">
                                            <figure>
                                                <img src={props.img3} alt="user" />
                                            </figure>
                                            <span>{props.title3} <a href="# " className="twitter">Twitter</a></span>
                                            <blockquote>
                                                <p>{props.disc3}</p>
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
