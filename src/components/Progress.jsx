import React from 'react'
import img1 from '../images/gallery/wg12.jpg'

export default function Progress() {
    return (
        <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{ backgroundImage: "url(" + img1 + ")" }}>
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
            <span id="testimolials"></span>
        </div>
    )
}
