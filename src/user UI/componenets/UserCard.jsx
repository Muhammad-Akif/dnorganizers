import React from 'react'

export default function UserCard() {
  return (
    <div className="card control-width">
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
