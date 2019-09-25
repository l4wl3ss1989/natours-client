import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../icons/icon.component';
import '../navs.styles.scss';
import './nav-tours.styles.scss';

const NavTours = () => (
  <nav className="nav nav--tours">
    <Link to="/" className="nav__el">
      All tours
    </Link>
    <form className="nav__search">
      <button className="nav__search-btn">
        <Icon name="icon-search" />
      </button>
      <input type="text" placeholder="Search tours" className="nav__search-input" />
    </form>
  </nav>
);

export default NavTours;
