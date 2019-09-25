import React from 'react';
import { Link } from 'react-router-dom';

import defaultUser from '../../../assets/images/users/default.jpg';
import '../navs.styles.scss';
import './nav-user.styles.scss';

const NavUser = () => (
  <nav className="nav nav--user">
    <Link to="/" className="nav__el">
      My bookings
    </Link>
    <Link to="/" className="nav__el">
      <img src={defaultUser} alt="User" className="nav__user-img" />
      <span>Jonas</span>
    </Link>
    <button className="nav__el">Log in</button>
    <button className="nav__el nav__el--cta">Sign up</button>
  </nav>
);

export default NavUser;
