import React, { useEffect, useState } from 'react'
import logo from '../images/abc.png'
import { NavLink } from "react-router-dom"
import SmallNavbar from './SmallNavbar'

export default function NavigationHeader() {
    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="smNav">
                    <SmallNavbar/>
                    </div>
                    <div className="lgNav col-xs-2">
                        <div id="fh5co-logo"><img src={logo} width='110px' alt="logo" /></div>
                    </div>
                    <div className="col-xs-10 text-right menu-1 links">

                        <ul>
                            <li className="has-dropdown">
                                <a href="#services">Services</a>
                                <ul className="dropdown">
                                    <li><a href="#services">Wedding</a></li>
                                    <li><a href="#services">Birtdays</a></li>
                                    <li><a href="#services">Corporate Events</a></li>
                                </ul>
                            </li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#teams">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Signup</NavLink></li>
                        </ul>

                    </div>
                </div>

            </div>
        </nav>
    )
}









