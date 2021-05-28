import React from 'react'

export default function Contect() {
    return (
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <h3 style={{fontWeight:"bold",fontFamily:"book, Arial, serif",color:"#F14E95"}}>DN ORGANIZERS</h3>
                        <div className="fh5co-contact-info">
                            <ul>
                                <div className="aligning">
                                <li className="phone"><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                <li className="email"><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                </div>
                                <li class="address">198 West 21th Street, Suite 721 New York NY 10016</li>
                            </ul>
                        </div>
                        <p style={{padding:"10px"}}>
                            <ul class="fh5co-social-icons">
                                <li><a href="# "><i className="icon-twitter"></i></a></li>
                                <li><a href="# "><i className="icon-facebook"></i></a></li>
                                <li><a href="# "><i className="icon-linkedin"></i></a></li>
                                <li><a href="# "><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                        <p>
                            <small className="block" style={{fontWeight:"bold",fontSize:"16px"}}>&copy; All Rights Reserved.</small>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
