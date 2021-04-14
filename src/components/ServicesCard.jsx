import React from 'react'
import {useHistory} from "react-router-dom"


export default function ServicesCard(props) {
    const history = useHistory()
    return (
        <div id={props.id} className="col-md-4 col-sm-6 col-12 text-center">
            <div className="event-wrap animate-box crd">
                <h3>{props.title}</h3>
                <div className="event-col">
                    <i className="icon-clock"></i>
                    <span>24 Hours</span>
                    <span>Late night Events</span>
                </div>
                <div className="event-col">
                    <i className="icon-calendar"></i>
                    <span>12 Months</span>
                    <span>Since Nov, 2017</span>
                </div>
                <p> {props.paragraph} </p>
                <button className='card-btn' onClick={()=>{
                    history.push(`/${props.id}`)
                }} >View Details</button>
            </div>
        </div>
    )
}
