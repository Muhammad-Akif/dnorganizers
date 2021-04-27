import React from 'react'
import logo from '../images/abc.png'
import {Link} from "react-router-dom"

export default function NavigationHeader() {
    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <div id="fh5co-logo"><img src={logo} width='110px' alt="logo" /></div>
                    </div>
                    <div className="col-xs-10 text-right menu-1 links">
                        <ul>
                            <li className="has-dropdown">
                                <a href="# ">Services</a>
                                <ul className="dropdown">
                                    <li><a href="#wedding">Wedding</a></li>
                                    <li><a href="#birthday">Birtdays</a></li>
                                    <li><a href="#corporate">Corporate Events</a></li>
                                </ul>
                            </li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#testimolials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>

                    </div>
                </div>

            </div>
        </nav>
    )
}
