import React from 'react'
import DesignerGalleryCard from './DesignerGalleryCard'

export default function Gallery(props) {
    return (
        <div id="fh5co-gallery" style={{marginTop:"-10%"}}>
            <div id="gallary" className="container">
                <div className="row">
                    <div className=" text-center fh5co-heading animate-box">
                        <span>Our Memories</span>
                        <h2>Events Gallery</h2>
                        <p>We presents some astonishing clicks from our recent events to give you an insight of our services & our website.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="fh5co-gallery-list">
                            {
                                props.Gallery.map((v) => <DesignerGalleryCard {...v} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
