import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './SmallNavbar.css';
import logo from '../images/abc.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className=''>
        <Link 
        // to=''
         className='nav-logo' onClick={closeMobileMenu}>
          <img src={logo} width='110' alt="logo"/>
        </Link>
        <div className='mn-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times tms' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-mn active' : 'nav-mn'}>
          <li className='nav-item'>
            {/* <Link
              to='gallery'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              SERVICES 
            </Link> */}
            <a href="#services" className='nav-lnks' onClick={closeMobileMenu}>SERVICES</a>
          </li>

          <li className='nav-item'>
            {/* <Link
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              GALLERY
            </Link> */}
            <a href="#gallery" className='nav-lnks' onClick={closeMobileMenu}>GALLERY</a>
          </li>
          <li className='nav-item'>
            {/* <Link
              
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              TESTIMONIALS
            </Link> */}
            <a href="#teams" className='nav-lnks' onClick={closeMobileMenu}>OUR-TEAM</a>
          </li>
          <li className='nav-item'>
            {/* <Link
              
              // to='contact'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link> */}
            <a href="#contact" className='nav-lnks' onClick={closeMobileMenu}>CONTACT</a>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-lnks bdr'
              onClick={closeMobileMenu}
            >
              LOGIN
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='signup'
              className='nav-lnks bdr'
              onClick={closeMobileMenu}
            >
              SIGNUP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
