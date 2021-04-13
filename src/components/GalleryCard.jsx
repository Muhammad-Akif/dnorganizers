import React from 'react'

export default function GalleryCard(props) {
    return (
        <li className="one-third animate-box" data-animate-effect="fadeIn" style={{ backgroundImage: "url(" + props.img + ")" }} >
            <a href={props.img}>
                <div className="case-studies-summary">
                    <h2>{props.title}</h2>
                </div>
            </a>
        </li>
    )
}
