import React from 'react'

export default function ProgressCard(props) {
    return (
        <div className="col-md-3 col-sm-6 animate-box">
            <div className="feature-center">
                <span className="icon">
                    <i className={props.icon}></i>
                </span>

                <span className="counter js-counter" data-from="0" data-to={props.data} data-speed="5000"
                    data-refresh-interval="50">1</span>
                <span className="counter-label"><strong>{props.title}</strong></span>

            </div>
        </div>
    )
}
