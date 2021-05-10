import React from 'react'

export default function UserCard() {
  return (
    <div className="card col-md-6" style={{ width: '100vh', margin: "0px 10px 0px 10px" }}>
      <div className="text-center">
        <strong style={{ fontSize: '1.5rem' }}> Featured </strong>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
    </div>
  )
}
