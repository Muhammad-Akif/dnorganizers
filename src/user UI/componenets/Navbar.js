import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/abc.png'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

function Navbar() {
  const disptach = useDispatch();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    // localStorage.setItem('user', null);
    setClick(false);
    // console.log('=========================================')
  }

  return (
    <>
      <nav className='navbar'>
        <Link
          to='/packages'
          className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} width='110' alt="logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars '} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link
              to='/packages'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PACKAGES
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/booked'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BOOKED
            </Link>
          </li>
          <li className='nav-item'>
            <Link

              to='/invoices'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              INVOICES
            </Link>
          </li>
          <li className='nav-item'>
            <Link

              to='/cv'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CV
            </Link>
          </li>
          <li className='nav-item'>
            <Link

              to='/'
              className='nav-links bdr'
              onClick={() => {
                localStorage.removeItem("user");
                disptach(logout())
              }}
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
