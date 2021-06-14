import React,{useState} from 'react'
import firebase from "../config/firebase"

export default function Contact() {
    const [email,setEmail]= useState('')
    const [message,setMessage] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.length > 5 && message.length > 5){
            firebase.database().ref("viewInfo/joinUs").push({email,message})
            .then(()=>alert("Thanks for Joining us"))
            .catch(()=>alert("Check your Internet connection!"))
            setEmail('')
            setMessage('')
        }
        else{
            alert("Write complete info ...")
        }
    }
    return (

        <div id="fh5co-started" className="fh5co-bg" style={{ backgroundImage: "url('../images/all/wg24.jpg')" }}>
            <div id="contact" className="overlay"></div>
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Get in Touch with Us</h2>
                        <p><strong> Fill these initials to get latest updates for an events. Thanks.</strong> </p>
                    </div>
                </div>
                <div className="row animate-box">
                    <div className="col-md-10 col-md-offset-1">
                        <form className="form-inline">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only" >Email</label>
                                    <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} className="form-control" id="email" required placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="name" className="sr-only">Message</label>
                                    <input type="name" onChange={(e)=> setMessage(e.target.value)} value={message} className="form-control" id="name" required placeholder="Message" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <button type="submit" onClick={handleSubmit} className="btn btn-default btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
