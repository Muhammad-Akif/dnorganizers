// import React from 'react'

// export default function FeedbackCard(props) {
//     return (
//         <div className="col-md-12 animate-box">
//             <div className="wrap-testimony">
//                 <div className="owl-carousel-fullwidth">
//                     <div className="item">
//                         <div className="testimony-slide active text-center">
//                             {console.log("Data ==>", props.value)}
//                             <figure>
//                                 <img src={props.value.img} alt="user" />
//                             </figure>
//                             <span>{props.value.title} <a href="# " className="twitter">Twitter</a></span>
//                             <blockquote>
//                                 <p>{props.value.disc}</p>
//                             </blockquote>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// {props.testimonials ? props.testimonials?.map((v, i) => {
//     return (
//         <FeedbackCard value={v} />
//     )
// }) : "loading"
// }