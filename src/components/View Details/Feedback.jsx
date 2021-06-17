import React, { useEffect, useState } from 'react'
import FeedbackCards from './FeedbackCards'
import firebase from "../../config/firebase"
export default function Feedback(props) {
    console.log("yoyo",props.name)
    const [data, setData] = useState([])
    useEffect(() => {
        // getData();
        const ref = firebase.database().ref('acceptedRatings')
        ref.on('value', function (snapshot) {
            let snap = snapshot.val()
            const arr = [] //[{eventName},[]]
            console.log("Snapshot ===> ", snap)
            for (const item in snap) {
                arr.push(snap[item])
            }
            // props.event
            const newArr = arr.filter((item) => item.eventName==props.name)
            setData([...newArr])
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
                        {
                            data.length > 0 ?
                            data.slice(0, 3).map((item) => <FeedbackCards {...item} />)
                            :
                            <div className="col-md-12 text-center" style={{color:"red",fontFamily:"book",fontSize:"26px"}}>
                                No Reviews...
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
