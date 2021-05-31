import React from 'react'
import GalleryCard from './GalleryCard'

export default function Gallery(props) {
    console.log("event now ", props)
    return (
        <div id="fh5co-gallery">
            <div id="gallary" className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Our Memories</span>
                        <h2>Events Gallery</h2>
                        <p>We presents some astonishing clicks from our recent events to give you an insight of our services & our website.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="fh5co-gallery-list">
                            {props.gallery.map((v) => <GalleryCard {...v} />)}
						</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
