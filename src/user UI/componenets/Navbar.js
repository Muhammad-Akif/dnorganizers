import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from '../../images/abc.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link 
        // to='/'
         className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} width='110' alt="logo"/>
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              // to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PACKAGES <i className='fas fa-caret-down' />
            </Link>
             {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link 
            // to='/'
             className='nav-links' onClick={closeMobileMenu}>
              CUSTOM
            </Link>
          </li>
          <li className='nav-item'>
            <Link 
            // to='/'
             className='nav-links' onClick={closeMobileMenu}>
              RATINGS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              
              // to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BOOKED
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              
              // to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              INVOICES
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              
              // to='/login'
              className='nav-links bdr'
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

export default Navbar;
