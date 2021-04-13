import React from 'react'
import img from '../images/all/wg24.jpg'

export default function Contact() {
    return (

        <div id="fh5co-started" className="fh5co-bg" style={{ backgroundImage: "url(" + img + ")" }}>
            <div id="contact" className="overlay"></div>
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Get in Touch with Us</h2>
                        <p><strong> Fill these initials to get latest updates for an events. Thanks.</strong> </p>
                    </div>
                </div>
                <div className="row animate-box">
                    <div className="col-md-10 col-md-offset-1">
                        <form className="form-inline">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="name" className="form-control" id="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <button type="submit" className="btn btn-default btn-block">Join Us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
