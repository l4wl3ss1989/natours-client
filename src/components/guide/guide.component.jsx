import React from 'react';

import { apiImgUrl } from '../../utils';

const Guide = ({ guide: { name, role, photo } }) => (
  <div className="overview-box__detail">
    <img src={apiImgUrl(photo, 'users')} alt={role} className="overview-box__img" />
    <span className="overview-box__label">{role === 'lead-guide' ? 'Lead guide' : 'Tour guide'}</span>
    <span className="overview-box__text">{name}</span>
  </div>
);

export default Guide;
