import React from 'react'

export default function Header(props) {

    return (
        <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage: "url(" + props.img + ")"}}>
		<div className="overlay"></div>
		<div className="fh5co-container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					<div className="display-t">
						<div className="display-tc animate-box" data-animate-effect="fadeIn">
							<h1>{props.title}</h1>
							<button type="button" class="btn btn-danger"><strong>Book Now</strong></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}
