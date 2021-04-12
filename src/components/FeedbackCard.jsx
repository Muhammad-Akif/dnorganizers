import React from 'react'

export default function FeedbackCard(props) {
    return (
        <div className="item">
            <div className="testimony-slide active text-center">
                <figure>
                    <img src={props.img} alt="user" />
                </figure>
                <span>{props.title} <a href="# " className="twitter">Twitter</a></span>
                <blockquote>
                    <p>{props.disc}</p>
                </blockquote>
            </div>
        </div>
    )
}
