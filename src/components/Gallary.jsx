import React from 'react'
import img1 from '../images/gallery/wg1.jpg'
import img2 from '../images/gallery/wg14.jpg'
import img3 from '../images/gallery/wg15.jpg'
import img4 from '../images/gallery/wg8.jpg'
import img5 from '../images/gallery/wg3.jpeg'
import img6 from '../images/gallery/wg17.jpg'
import img7 from '../images/gallery/wg7.jpeg'
import img8 from '../images/gallery/wg5.jpg'
import img9 from '../images/gallery/wg20.jpg'

export default function Gallary() {
    return (
        <div id="fh5co-gallery" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<span>Our Memories</span>


						<h2>Some Blinks</h2>
						<p>Here are some of the amazing blinks from our events gallery to give you a quick sight of what
							we offer.</p>
					</div>
				</div>
				<div className="row row-bottom-padded-md">
					<div className="col-md-12">
						<ul id="fh5co-gallery-list">

							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img1 + ")"}}>
								<a href={img1}>
									<div className="case-studies-summary">

										<h2>Dream Wedding</h2>
									</div>
								</a>
							</li>
							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img2 + ")"}}>
								<a href={img2} className="color-2">
									<div className="case-studies-summary">

										<h2>Successful Buiseness</h2>
									</div>
								</a>
							</li>


							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img3 + ")"}}>
								<a href={img3} className="color-3">
									<div className="case-studies-summary">

										<h2>Black Beauty</h2>
									</div>
								</a>
							</li>
							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img4 + ")"}}>
								<a href={img4} class="color-4">
									<div className="case-studies-summary">

										<h2>Happy Together</h2>
									</div>
								</a>
							</li>

							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img5 + ")"}}>
								<a href={img5} className="color-3">
									<div className="case-studies-summary">

										<h2>Hold my Hand</h2>
									</div>
								</a>
							</li>
							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img6 + ")"}}>
                                <a href={img6} className="color-4">
									<div className="case-studies-summary">

										<h2>Water Heaven</h2>
									</div>
								</a>
							</li>

							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img7 + ")"}}>
								<a href={img7} className="color-4">
									<div className="case-studies-summary">

										<h2>Destination Wedding</h2>
									</div>
								</a>
							</li>

							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img8 + ")"}}>
								<a href={img8} className="color-5">
									<div className="case-studies-summary">

										<h2>Million Dollar Smile</h2>
									</div>
								</a>
							</li>
							<li className="one-third animate-box" data-animate-effect="fadeIn"
								style={{backgroundImage: "url(" + img9 + ")"}}>
								<a href={img9} class="color-6">
									<div className="case-studies-summary">

										<h2>A new Day</h2>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}
