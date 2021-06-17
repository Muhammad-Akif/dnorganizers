import React, { useEffect, useState } from 'react'
import FeedbackCards from './FeedbackCards'
import firebase from "../../config/firebase"
export default function Feedback() {
    const [data, setData] = useState([])
    useEffect(() => {
        // getData();
        const ref = firebase.database().ref('acceptedRatings')
        ref.on('value', function (snapshot) {
            let snap = snapshot.val()
            const arr = []
            console.log("Snapshot ===> ", snap)
            for (const item in snap) {
                arr.push(snap[item])
            }
            setData(arr)
        }, function (err) {
            console.log('failed to fetch', err)
        });

        //remove listener
        return () => ref.off('value');
    }, [])
    return (
        <div id="fh5co-testimonial">
            <div id="feedback" className="container-fluid">
                <div className="row">
                    <div className="animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Best Wishes</span>
                            <h2>Some feedbacks</h2>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-12 animate-box">
                            <div className="wrap-testimony">
                                <div className="owl-carousel-fullwidth">
                                    <div className="item pt-0">
                                        {
                                            data.slice(0,3).map((item)=> <FeedbackCards {...item}/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
