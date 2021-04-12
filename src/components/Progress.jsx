import React from 'react'
import ProgressCard from "./ProgressCard"

export default function Progress(props) {
    return (
        <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{ backgroundImage: "url(../images/gallery/wg12.jpg)" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="display-t">
                        <div className="display-tc">
                            {props.progress ? props.progress.map((v, i) => {
                                return (
                                    <ProgressCard {...v} />
                                )
                            }) : "loading"
                            }
                        </div>
                    </div>
                </div>
            </div>
            <span id="testimolials"></span>
        </div>
    )
}
