import React from 'react';

import NavFooter from '../navs/nav-footer/nav-footer.component';

import logoGreen from '../../assets/images/logo-green.png';

const Footer = () => (
  <div className="footer">
    <div className="footer__logo">
      <img src={logoGreen} alt="Natours logo" />
    </div>
    <NavFooter />
    <p className="footer__copyright">&copy; by L4wL3sS. All rights reserved.</p>
  </div>
);

export default Footer;
