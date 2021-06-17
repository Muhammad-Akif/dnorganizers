import React, { useEffect, useState } from 'react'
import firebase from "../../../config/firebase"
export default function ViewCv() {
    const [data, setData] = useState([])
    useEffect(() => {
        firebase.database().ref('viewInfo/cv').on('value', function (snapshot) {
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
            <div className="container-fluid" className="Review">
                <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className="col-md-12" style={{ marginTop: "2%", fontSize: "16px", color: "black" }}>{item.CNIC}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
