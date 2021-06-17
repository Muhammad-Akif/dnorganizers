import React, { useEffect, useState } from 'react'
import firebase from "../../../config/firebase"
export default function GetTouch() {
    const [data, setData] = useState([])
    useEffect(() => {
        firebase.database().ref('viewInfo/joinUs').on('value', function (snapshot) {
            let snap = snapshot.val()
            const arr = []
            console.log("Snapshot ===> ", snap)
            for (const item in snap) {
                arr.push(snap[item])
            }
            setData(arr)
        })
    }, [])
    return (
        <div style={{ height: "78vh" }}>
            <div className="row">
                <div className="col-md">
                    {/* <div className="row">
                        <div className="col-md-3"><h4>Email</h4></div>
                        <div className="col-md-9"><h4>Message</h4></div>
                    </div> */}
                    <ul className="list-group list-group-flush" style={{ fontSize: "12px", color: "black" }}>
                        {
                            data.map((val) => {
                                return (
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col-md-3">{val.email}</div>
                                            <div className="col-md-9">{val.message}</div>
                                        </div>
                                        {/* <span className="fw-bold col-md-3" style={{ float: "left" }}>{val.email}</span> {val.message} */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
