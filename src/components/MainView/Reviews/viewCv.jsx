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
        <div style={{ display: "flex", height: "78vh", overflowY:"scroll",justifyContent: "center", flexWrap: "wrap",padding:"10px" }}>
            {
                data.map((item, index) => {
                    return (
                        <div style={{ backgroundColor:  "rgb(254, 254, 254)", padding: "20px" }} className="card control-width">
                            <div style={{ padding: "5px 0px", borderBottom: "1px solid black" }} className="text-center">
                                <strong style={{ fontSize: '3rem', fontFamily: "'Sacramento', Arial, serif",color:"#F14E95" }}> CV: #{index+1} </strong>
                            </div>
                            <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>{item.firstName} {item.lastName}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>Mail: {item.email}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>Phone: {item.phone}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>CNIC: {item.CNIC}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>As: {item.workAs}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>{item.message}</li>
                                <li className="fld list-group-item" style={{backgroundColor: "rgb(254, 254, 254)", color:"black"}}>Pakistan: {item.pakistan ? "Yes" : "No"}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
