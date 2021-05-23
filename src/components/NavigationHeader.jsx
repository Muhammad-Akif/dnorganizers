import React, { useEffect, useState } from 'react'
import logo from '../images/abc.png'
import { NavLink } from "react-router-dom"
import SmallNavbar from './SmallNavbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function NavigationHeader(props) {
    return (
        <>
            {props.name == "main" ?
                <nav className="fh5co-nav" role="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="smNav">
                                <SmallNavbar {...props.name} />
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
                :
                <nav className="fh5co-nav" role="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="smNav">
                                <SmallNavbar {...props.name} />
                            </div>
                            <div className="lgNav col-xs-2">
                                <NavLink to="/"><ArrowBackIcon style={{ color: "white", fontSize: "30px", fontWeight: "bold" }} /></NavLink>
                            </div>
                            <div className="col-xs-10 text-right menu-1 links">

                                <ul>
                                    <li className="has-dropdown">
                                        <a href="#svc">Services</a>
                                        <ul className="dropdown">
                                            <li><a href="#svc">Theme</a></li>
                                            <li><a href="#svc">Venu</a></li>
                                            <li><a href="#svc">Menu</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#designer">Designer</a></li>
                                    <li><a href="#gallary">Gallery</a></li>
                                    <li><a href="#feedback">Testimonials</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li></li>
                                    <li><NavLink to="/signup"><strong style={{fontFamily: "serif,'Sacramento', Arial",fontSize:"16px"}}>Signup</strong></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}









