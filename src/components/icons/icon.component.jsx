import React from 'react';
import icons from '../../assets/images/icons.svg';

const Icon = ({ name, className }) => (
  <svg className={className ? className : ''}>
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default Icon;
