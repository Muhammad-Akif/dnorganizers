import React from 'react'
import birthdayImg from '../images/wg20.jpg'

export default function Welcome() {
    return (
        <div id="fh5co-couple">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <h2>Welcome!</h2>
                        <h3>An All new Platform To make your Dreams True</h3>
                        <p>We Present you an Astonishing Platform for Planning your special events</p>
                    </div>
                </div>
                <div className="couple-wrap animate-box">
                    <div className="couple-half">
                        <div className="groom">
                            <img src={birthdayImg} alt="groom" className="img-responsive" />
                        </div>
                        <div className="desc-groom">
                            <h3>Birthday Events</h3>
                            <p> Make your new days as you desire. We provide best services and all new & Astonishing
								themes to make your special days more special & memorable</p>
                        </div>
                    </div>
                    <p className="heart text-center"><i class="icon-heart2"></i></p>
                    <div className="couple-half">
                        <div className="bride">
                            <img src="wg21.jpg" alt="groom" className="img-responsive" />
                        </div>
                        <div className="desc-bride">
                            <h3>Wedding Events</h3>
                            <p> We provide Destination Weddings and make your precious days one to never forget. Best
								services, cattering, Photoshoot and many more. </p>
                        </div>
                    </div>
                    <div className="couple-half corporate-welcome">
                        <div className="groom ">
                            <img src="wg21.jpg" alt="groom" className="img-responsive" />
                        </div>
                        <div className="desc-groom">
                            <h3>Wedding Events</h3>
                            <p> We provide Destination Weddings and make your precious days one to never forget. Best
								services, cattering, Photoshoot and many more. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
