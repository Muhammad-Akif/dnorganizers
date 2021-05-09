import React from 'react';
import logo from '../../images/abc.png'
import { Link } from "react-router-dom"
// import { useLocation } from 'react-router-dom'
// import $ from 'jquery';

export default function UserNav(props) {
    // const location = useLocation();
    // useEffect(() => {
    //             runJquery();
    //     }, [location])
    return (
        <div id="page">
            <nav className="fh5co-nav user-nav" >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2">
                            <div id="fh5co-logo"><img src={logo} width='110px' alt="logo" /></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1 links">
                            <ul>
                                <li className="has-dropdown">
                                    <a href="# ">Packages</a>
                                    <ul className="dropdown">
                                        <li><a href="# "><Link to="/weddingPackages">Wedding</Link></a></li>
                                        <li><a href="# "><Link to="/birthdaypackages">Birtdays</Link></a></li>
                                        <li><a href="# "><Link to="/corporatePackages">Corporate</Link></a></li>
                                    </ul>
                                </li>
                                <li><Link to="/userCustom">Custom</Link></li>
                                <li><Link to="/userRatings">Ratings</Link></li>
                                <li><Link to="/userBooked">Booked</Link></li>
                                <li><Link to="/userInvoices">Invoices</Link></li>
                                <li className="logout"><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <header className="fh5co-cover user-cover"> */}
            <div className="container">
                <div className="row">
                    <div className="child-content col-md-12 col-md-offset-2">
                        {props.children}
                    </div>
                </div>
            </div>
            {/* </header> */}
        </div>
    )
}

// const runJquery = () => {
//     (function () {
//         'use strict';
//         var dropdown = function() {
//             $('.has-dropdown').mouseenter(function(){
//                 var $this = $(this);
//                 $this
//                     .find('.dropdown')
//                     .css('display', 'block')
//                     .addClass('animated-fast fadeInUpMenu');
    
//             }).mouseleave(function(){
//                 var $this = $(this);
    
//                 $this
//                     .find('.dropdown')
//                     .css('display', 'none')
//                     .removeClass('animated-fast fadeInUpMenu');
//             });
//         };
//         $(function(){
//             dropdown();
//         });
//     }());
// }