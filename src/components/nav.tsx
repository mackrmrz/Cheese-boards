import React from 'react';
import { withRouter } from 'react-router';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar__logo'>
        <NavLink to='/about-me'>
          LOGO
        </NavLink>
      </div>
      <div className="navbar__links">
        <div className="navlink-wrapper">
          <NavLink exact to='/'>
            Home
          </NavLink>
        </div>
        <div className="navlink-wrapper">
          <NavLink to='/about-me'>
            About
          </NavLink>
        </div>
        <div className="navlink-wrapper">
          <NavLink to='/contact-me'>
            Contact
          </NavLink>
        </div>
        <div className="navlink-wrapper">
          <NavLink to='/blog'>
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Nav);
