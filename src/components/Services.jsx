import React from 'react'
import ServicesCard from './ServicesCard'

export default function Services(props) {
    return (
        <div id="services">
            <div id="fh5co-event" className="fh5co-bg service-bg">
                <div className="overlay"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>Our Special Events</span>
                            <h2>Top Demanding Events</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="display-t">
                            <div className="display-tc">
                                <div className="col-md-12 col-md-offset">
                                    {props.services ? props.services.map((v, i) => {
                                        return (
                                            <ServicesCard {...v} />
                                        )
                                    }) : "loading"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
