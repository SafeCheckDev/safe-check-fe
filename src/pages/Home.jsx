import React from 'react';
import Logo from '../images/safecheck-logo-white.png';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <div>
      <img src={Logo} alt="Logo" style={{ width: '50%', maxWidth: '350px' }} />
    </div>
    <div className="m-5">
      <li><NavLink to="/forms">Forms</NavLink></li>
    </div>
  </div>
);

export default Home;
