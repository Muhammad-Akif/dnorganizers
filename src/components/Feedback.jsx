import React from 'react'
import img1 from '../images/gallery/wg12.jpg'
import img2 from '../images/gallery/wg2.jpg'
import img3 from '../images/gallery/wg10.jpg'
import img4 from '../images/gallery/wg5.jpg'

export default function Feedback() {
    return (
        <div>
            <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{backgroundImage:"url(" + img1 + ")"}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="display-t">
                            <div className="display-tc">
                                <div className="col-md-3 col-sm-6 animate-box">
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className="icon-users"></i>
                                        </span>

                                        <span className="counter js-counter" data-from="0" data-to="500" data-speed="5000"
                                            data-refresh-interval="50">1</span>
                                        <span className="counter-label"><strong>Estimated Guest</strong></span>

                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box">
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className="icon-user"></i>
                                        </span>

                                        <span className="counter js-counter" data-from="0" data-to="1000" data-speed="5000"
                                            data-refresh-interval="50">1</span>
                                        <span className="counter-label"><strong> We Catter</strong></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box">
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className="icon-calendar"></i>
                                        </span>
                                        <span className="counter js-counter" data-from="0" data-to="402" data-speed="5000"
                                            data-refresh-interval="50">1</span>
                                        <span className="counter-label"><strong>Events Done</strong></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box">
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className="icon-clock"></i>
                                        </span>

                                        <span className="counter js-counter" data-from="0" data-to="2345" data-speed="5000"
                                            data-refresh-interval="50">1</span>
                                        <span className="counter-label"><strong> Hours Spent</strong></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src={img2} alt="user" />
                                                </figure>
                                                <span>Jenny Disoza <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>"Thanks a lot for making my precious day a never-forgettable and
                                                    giving me all the special memories for this beautiful day of my
													life"</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src={img3} alt="user" />
                                                </figure>
                                                <span>Jenessa Shaw <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>"I desired of exactly having a pleasant day like this. Thanks a lot
                                                    for all the precious meories f this day. Hearty wishes from core of
													my heart to make you guys more successful."</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src={img4} alt="user" />
                                                </figure>
                                                <span>Aleena Malik <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>"Thanks a lot for making my precious day a never-forgettable and
                                                    giving me all the special memories for this beautiful day of my
													life. May God give You much more Success "</p>
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
        </div>
    )
}
