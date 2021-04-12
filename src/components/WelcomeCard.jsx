import React from 'react'

export default function WelcomeCard(props) {
    return (

        <div className="couple-wrap animate-box">
        <div className="couple-half">
            <div className="groom">
                <img src='../images/wg20.jpg' alt="groom" className="img-responsive" />
            </div>
            <div className="desc-groom">
                <h3>{props[0]?.title}</h3>
                <p>{props[0]?.paragraph}</p>
            </div>
        </div>
        <p className="heart text-center"><i className="icon-heart2"></i></p>
        <div className="couple-half">
            <div className="bride">
                <img src="../images/wg21.jpg" alt="groom" className="img-responsive" />
            </div>
            <div className="desc-bride">
                <h3>Wedding Events</h3>
                <p> We provide Destination Weddings and make your precious days one to never forget. Best
                    services, cattering, Photoshoot and many more. </p>
            </div>
        </div>
        <div className="couple-half corporate-welcome">
            <div className="groom">
                <img src="wg21.jpg" alt="groom" className="img-responsive" />
            </div>
            <div className="desc-groom">
                <h3>Corporate Events</h3>
                <p> We provide Destination Weddings and make your precious days one to never forget. Best
                    services, cattering, Photoshoot and many more. </p>
            </div>
        </div>
    </div>
    )
}
