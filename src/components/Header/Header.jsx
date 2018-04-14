import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/safecheck-logo-black.png';

const Header = () => (
  <nav
    className="navbar navbar-light bg-light mb-4"
    style={{
      boxShadow: '0 0 2rem rgba(0,0,0,.2)',
    }}
  >
    <div className="container">
      <a href="/" className="navbar-brand mb-0">
        <img src={Logo} height="30" alt="" />
      </a>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/forms">Forms</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Header;
