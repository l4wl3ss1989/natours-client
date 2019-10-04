import React from 'react';

import Icon from '../../icons/icon.component';
import { apiImgUrl } from '../../../utils';

const TourHeader = ({ name, duration, startLocation, imageCover }) => (
  <section className="section-header">
    <div className="header__hero">
      <div className="header__hero-overlay"></div>
      <img src={apiImgUrl(imageCover)} alt={name} className="header__hero-img" />
    </div>
    <div className="heading-box">
      <h1 className="heading-primary">
        <span>{name} tour</span>
      </h1>
      <div className="heading-box__group">
        <div className="heading-box__detail">
          <Icon name="icon-clock" className="heading-box__icon" />
          <span className="heading-box__text">{duration} days</span>
        </div>
        <div className="heading-box__detail">
          <Icon name="icon-map-pin" className="heading-box__icon" />
          <span className="heading-box__text">{startLocation.description}</span>
        </div>
      </div>
    </div>
  </section>
);

export default TourHeader;
