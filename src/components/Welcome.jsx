import React from 'react'
import WelcomeCard from './WelcomeCard'

export default function Welcome(props) {
    console.log('this ===> ',props)
    return (
        <div id="fh5co-couple">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <h2>{props.welcome?.title}</h2>
                        <h3>{props.welcome?.disc}</h3>
                        <p>{props.welcome?.paragraph}</p>
                    </div>
                </div>
                <WelcomeCard data={props.cardsData}/>
            </div>
        </div>
    )
}
