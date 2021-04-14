import React from 'react'
import GalleryCard from './GalleryCard'

export default function Gallery() {
    return (
        <div id="fh5co-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Our Memories</span>
                        <h2>Events Gallery</h2>
                        <p>We presents some astonishing clicks from our recent events to give you an insight of our services & our website.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <GalleryCard/>
                </div>
            </div>
        </div>
    )
}
