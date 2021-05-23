import React from 'react'
import NavigationHeader from '../NavigationHeader'
import { Link } from "react-router-dom"

export default function Header(props) {

	return (
		// <div id="page">
		// 	<NavigationHeader />
		// 	<header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{ backgroundImage: "url(" + props.img + ")" }}>
		// 		<div className="overlay"></div>
		// 		<div className="fh5co-container">
		// 			<div className="row">
		// 				<div className="col-md-8 col-md-offset-2 text-center">
		// 					<div className="display-t">
		// 						<div className="display-tc animate-box" data-animate-effect="fadeIn">
		// 							<h1>{props.title}</h1>
		// 							<button type="button" class="btn btn-danger"><strong>Book Now</strong></button>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</header>
		// </div>
		<div id="page">
		<NavigationHeader name="event"/>
		<header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" style={{ backgroundImage: "url(" + props.img + ")" }}>
			<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center">
							<div className="display-t">
								<div className="display-tc animate-box" data-animate-effect="fadeIn">
									<h1 className="viewTitle">Welcome to <br />{props.title}</h1>
									<h2>{props.cote}</h2>
 									<button type="button" class="btn btn-danger"><Link to='/login'><strong>Book Now</strong></Link></button>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div >
	)
}
