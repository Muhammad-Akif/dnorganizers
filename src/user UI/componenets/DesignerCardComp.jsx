import React from 'react'

export default function DesignerCardComp(props) {
    return (
        <li className="newone animate-box" data-animate-effect="fadeIn" style={{ backgroundImage: "url(" + props.img + ")" }}>
            {/* <a href="images/gallery-1.jpg">
                <div className="case-studies-summary">
                    <h2>{props.title}</h2>
                </div>
            </a> */}
        </li>
    )
}