import React from 'react';
import { Link } from 'react-router-dom';

const NavFooter = () => (
  <ul className="footer__nav">
    <li>
      <Link to="/">About us</Link>
    </li>
    <li>
      <Link to="/">Download apps</Link>
    </li>
    <li>
      <Link to="/">Become a guide</Link>
    </li>
    <li>
      <Link to="/">Careers</Link>
    </li>
    <li>
      <Link to="/">Contact</Link>
    </li>
  </ul>
);

export default NavFooter;
