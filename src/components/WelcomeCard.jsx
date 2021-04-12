import React from 'react'

export default function WelcomeCard(props) {
    { console.log("props ==> ", props.data) }
    return (
        <div className="couple-wrap animate-box">
            {props.data ? props.data.map((v, i) => {
                return (
                    <div>
                        <div key={i} className="couple-half">
                            <div className={v.class}>
                                <img src={v.img} alt="groom" className="img-responsive" />
                            </div>
                            <div className={v.classdisc}>
                                <h3>{v.title}</h3>
                                <p>{v.paragraph}</p>
                            </div>
                        </div>
                    {(v.title === "wedding Events") ? <p className="heart text-center"><i className="icon-heart2"></i></p> : ""}
                    </div>
                )
            }) : "loading"
            }
        </div>
    )
}
