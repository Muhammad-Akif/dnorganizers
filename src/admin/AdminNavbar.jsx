import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/abc.png'
import './AdminNavbar.css';

function AdminNavbar() {
  const [click, setClick] = useState(false);
  // const [title, setTitle] = useState("WEDDING");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='admin-navbar'>
        <Link
          to='/wedding'
          className='admin-navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} width='80' alt="logo" />
        </Link>
        {!click && <Link
          to='/wedding'
          className='admin-navbar-text' onClick={closeMobileMenu}>
          <h4 style={{ color: "white" }}>DN-Organizers</h4>
        </Link>}
        <div className='admin-menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'admin-nav-menu active' : 'admin-nav-menu'}>
          <li className='admin-nav-item'>
            <Link
              to='/wedding'
              className='admin-nav-links'
              onClick={closeMobileMenu}
            >
              WEDDING
            </Link>
          </li>

          <li className='admin-nav-item'>
            <Link
              to='/birthday'
              className='admin-nav-links'
              onClick={closeMobileMenu}
            >
              BIRTHDAY
            </Link>
          </li>
          <li className='admin-nav-item'>
            <Link

              to='/corporate'
              className='admin-nav-links'
              onClick={closeMobileMenu}
            >
              CORPORATE
            </Link>
          </li>
          <li className='admin-nav-item'>
            <Link

              to='/verifySlips'
              className='admin-nav-links'
              onClick={closeMobileMenu}
            >
              VERIFY SLIPS
            </Link>
          </li>
          <li className='admin-nav-item'>
            <Link

              to='/reviews'
              className='admin-nav-links'
              onClick={closeMobileMenu}
            >
              REVIEWS
            </Link>
          </li>
          <li className='admin-nav-item'>
            <Link

              to='/'
              className='admin-nav-links bdr'
              onClick={closeMobileMenu}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminNavbar;
