import React from 'react';

import NavTours from '../navs/nav-tours/nav-tours.component';
import NavUser from '../navs/nav-user/nav-user.component';

import logoWhite from '../../assets/images/logo-white.png';
import './header.styles.scss';

const Header = () => (
  <header className="header">
    <NavTours />
    <div className="header__logo">
      <img src={logoWhite} alt="Natours logo" />
    </div>
    <NavUser />
  </header>
);

export default Header;
