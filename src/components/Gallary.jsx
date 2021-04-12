import React from 'react'
import GalleryCard from './GalleryCard'

export default function Gallary(props) {
    { console.log("Galleryprops ===> ", props.gallery) }

	return (
		<div id="fh5co-gallery" className="fh5co-section-gray">
			<div id="gallery" className="container">
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
							{props.gallery ? props.gallery.map((v, i) => {
								return (
									<GalleryCard {...v} />
								)
							}) : "loading"
							}

						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
