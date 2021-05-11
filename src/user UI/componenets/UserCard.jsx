import React from 'react'

export default function UserCard(props) {
  return (
    <div className="card control-width">
      <div className="text-center">
        <strong style={{ fontSize: '1.5rem' }}> {props.name} </strong>
      </div>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">{props.theme}</li>
        <li className="list-group-item">{props.venu}</li>
        <li className="list-group-item">{props.menu}</li>
        <li className="list-group-item">Rs{props.price}</li>
      </ul>
      <button type="button" class="btn btn-success Cbtn">BOOK NOW</button>
    </div>
  )
}
