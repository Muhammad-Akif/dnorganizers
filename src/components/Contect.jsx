import React from 'react'

export default function Contect() {
    return (
        <div>
             <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                    <span style={{ fontSize: '16px', color: 'black' }}>
                        <i className='fa fa-map-marker'></i> Address
                </span>
                4321 California St, San Francisco, CA 12345
              </p>
            </div>
            <div className='contact-item'>
                <p>
                    <span style={{ fontSize: '16px', color: 'black' }}>
                        <i className='fa fa-phone'></i> Phone
                </span>{' '}
                +92 317 0526868
              </p>
            </div>
            <div className='contact-item'>
                <p>
                    <span style={{ fontSize: '16px', color: 'black' }}>
                        <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                info@company.com
              </p>
            </div>
        </div>
    )
}
