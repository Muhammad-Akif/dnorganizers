import React, { useState } from 'react'
import Navbar from "./Navbar"
import firebase from '../../config/firebase';
import CvForm from "../../Models/models/cvForm"

function CV() {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        phone: "",
        workas: "",
        event: "",
        cnic: "",
        date: "",
        email: "",
        msg: ""
    });
    const [check, setCheck] = useState(false)
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const cvData = new CvForm(
            data.fname, data.lname,
            data.phone, data.workas,
            data.event, data.cnic,
            data.email, data.msg, check
        )
        if (data.event.length > 0 && data.workas.length > 0) {
            firebase.database().ref("viewInfo/cv").push(cvData)
                .then(() => alert("Thanks! You will get back to you soon..."))
                .catch(() => "Something went Wrong! check your Internet")
        }
        else {
            alert("Something is Missing ...")
        }
        setData({
            fname: "",
            lname: "",
            phone: "",
            workas: "",
            event: "",
            cnic: "",
            date: "MM/DD/YYY",
            email: "",
            msg: ""
        })
        setCheck(false)
    };
    return (
        <div>
            <Navbar />
            <div>
                <div className="text-center cvtitle fh5co-heading animate-box">
                    <span>Be a member of our team</span>
                    <h2>Upload Your CV</h2>
                </div>
                <div className="container contact_div cv">
                    <div className="row">
                        <div className="col-md-12 col-12 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="row">
                                    <div className="form-group col-6 col-md-6">
                                        <label for="exampleInputPassword1">First Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="fname" value={data.fname} onChange={InputEvent} required placeholder="Enter First Name" />
                                    </div>
                                    <div className="form-group col-6 col-md-6">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="lname" value={data.lname} onChange={InputEvent} required placeholder="Enter Last Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-6 col-md-6">
                                        <label for="exampleInputPassword1">Phone</label>
                                        <input type="number" className="form-control" id="exampleInputPassword1" name="phone" value={data.phone} onChange={InputEvent} required placeholder="Enter Phone No." />
                                    </div>
                                    <div class="form-group col-6 col-md-6">
                                        <label className="control-label" for="date">Date</label>
                                        <input className="form-control" id="date" name="date" value={data.date} onChange={InputEvent} required placeholder="MM/DD/YYY" type="date" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-6 col-md-6">
                                        <label for="inputState">Event</label>
                                        <select id="inputState" name="event" value={data.event} onChange={InputEvent} required className="form-control">
                                            <option selected>Choose...</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="corporate">Corporate</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-6 col-md-6">
                                        <label for="inputState">Work as</label>
                                        <select id="inputState" name="workas" value={data.workas} onChange={InputEvent} required className="form-control">
                                            <option selected>Choose...</option>
                                            <option value="designer">Designer</option>
                                            <option value="management">Management</option>
                                            <option value="catering">Catering</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-6 col-md-6">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent} required placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group col-6 col-md-6">
                                        <label for="exampleInputEmail1">CNIC</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="cnic" value={data.cnic} onChange={InputEvent} required placeholder="Enter CNIC" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Experience</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} placeholder="Enter your past experience" onChange={InputEvent} required rows="2"></textarea>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" checked={check} value={check} onClick={(e) => setCheck(!check)} id="exampleCheck1" />
                                    <label className="form-check-label" style={{ paddingLeft: "10px" }} for="exampleCheck1">Are You From Pakistan</label>
                                </div>
                                <button type="submit" className="btn Cbtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CV;




