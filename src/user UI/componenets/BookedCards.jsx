import React, { useState } from 'react'
import { HoverRating } from "../../components/View Details/FeedbackRating"

export default function UserCard(props) {
    console.log("Booked Data : ", props)
    const { item } = props;
    const [bookedComment, setBookedComment] = useState("")
    const [rating, setRating] = useState(0)
    const menuu = item.menu.map((v) => v.name)
    const getRatings = (data) => {
        setRating(+data);
    }
    const onSubmitReviews = () => {
        props.onSubmitReview(item.id, rating, bookedComment);
    }
    return (
        <div className="card control-Bwidth">
            <div style={{ backgroundColor: "#F14E95", height: "10vh", border: "none", color: "white", display: "flex", overflow: "hidden", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
                <div style={{ position: "relative", top: "0px", border: "none", left: "0px", right: "0px", overflow: "hidden", width: "30%", transform: "rotate(-55deg)", overflow: "hidden" }}>
                    <h5 style={{ position: "relative", border: "none", padding: "5px", textAlign: "center", overflow: "hidden", color: "white", fontSize: "16px", fontFamily: "book", fontWeight: "bold", backgroundColor: "blue", transform: [{ rotate: '-55deg' }] }}>
                        {item.isPackage ? 'Package' : 'Custom'}
                    </h5>
                </div>
                <h4 style={{ color: "white", marginRight: "60px", fontFamily: "book" }}>
                    Event Booked Successfully!
                </h4>
            </div>
            <ul className="list-group list-group-flush text-center" style={{ fontSize: '1.35rem' }}>
                <li className="fld list-group-item">
                    Booked On
                    <br />
                    <h4>{item.bookDate}</h4>
                </li>
                <li className="fld list-group-item">
                    venu
                    <br />
                    <h4>{item.venu}</h4>
                </li>
                <li className="fld list-group-item">
                    <span>Menu</span>
                    <br />
                    <h4>{menuu.join(", ")}</h4>
                </li>
                <li className="fld list-group-item">
                    NO of People
                    <br />
                    <span style={{ fontSize: '2.2rem', fontFamily: "serif" }}>
                        <h2 style={{ fontFamily: "book" }}>{item.noOfPeople}</h2>
                    </span>
                </li>
            </ul>
            <div style={{ margin: "0px 30px" }}>
                Designer <span style={{ float: "right" }}><h5>{item.designerName}</h5></span>
            </div>
            <div style={{ margin: "0px 30px" }}>
                Theme <span style={{ float: "right" }}><h5>{item.theme}</h5></span>
            </div>
            <div style={{ margin: "0px 30px" }}>
                Price <span style={{ float: "right" }}><h5 style={{ fontFamily: "book" }}>Rs {item.price}</h5></span>
            </div>
            <div style={{ margin: "0px 30px" }}>
                Package <span style={{ float: "right" }}><h5>{item.serPackName}</h5></span>
            </div>

            { //here checking if event has passed/done taking review then;
                (new Date(item.occuredDate).getTime() < new Date().getTime() && item.status == 'inprogress') ? (
                    <div style={{ display: "flex", flexDirection: "column", padding: "15px", margin: '10px', justifyContent: "center", alignItems: "center", backgroundColor: "grey", borderRadius: "10px" }}>
                        <h5 style={{ color: "white", fontWeight: "bold" }}>Your Event has been Passed!</h5>
                        <br />
                        <div style={{ fontSize: "18px" }}><HoverRating getRatings={getRatings} /></div>
                        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitReviews}>
                            <textarea style={{ fontSize: "12px", padding: "5px" }} cols="35" rows="3" value={bookedComment} onChange={(e) => setBookedComment(e.target.value)} placeholder="Write Review ..."></textarea>
                            {console.log(bookedComment)}
                            <input type="Submit" style={{ color: "white", backgroundColor: "inherit", border: "none" }} value="Submit" />
                        </form>
                    </div>
                ) : item.status == 'usergivedreview' ? (
                    <div style={{ backgroundColor: 'black', marginTop: 10, padding: 10, borderRadius: 10 }}>
                        <div style={{ textAlign: 'center', color: 'white' }}>Thanks for giving Rating! under review now...</div>
                    </div>
                ) : item.status == 'accepted' ? (
                    <div style={{ backgroundColor: '#1bad3a', marginTop: 10, padding: 10, borderRadius: 10 }}>
                        <div style={{ textAlign: 'center', color: 'white' }}>Your review has been accepted by Admin!</div>
                    </div>
                ) : item.status == 'rejected' ? (
                    <div style={{ backgroundColor: '#ea093d', marginTop: 10, padding: 10, borderRadius: 10 }}>
                        <div style={{ textAlign: 'center', color: 'white' }}>Your review is rejected by Admin!</div>
                    </div>
                ) : item.status == 'inprogress' && (
                    <div style={{ backgroundColor: '#17948e', marginTop: 10, padding: 10, borderRadius: 10 }}>
                        <div style={{ textAlign: 'center', color: 'white' }}>We wish you the best for Event!</div>
                    </div>
                )
            }
        </div>
    )
}
