import React from 'react'
import DesignerCardComp from './DesignerCardComp'

export default function DesignerCards(props) {
    return (
        <div id="fh5co-gallery" style={{marginTop:"-10%"}}>
            <div id="gallary" className="container">
                <div className="row">
                    <div className=" text-center fh5co-heading animate-box">
                        <h2>Designer Cards</h2>
                        <p>We presents some astonishing Cards to give you an insight of our services.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="fh5co-gallery-list">
                            {
                                props.Gallery.map((v) => <DesignerCardComp {...v} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
