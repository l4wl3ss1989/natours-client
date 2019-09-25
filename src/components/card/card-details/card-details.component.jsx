import React from 'react';

import Icon from '../../icons/icon.component';

import './card-details.styles.scss';

const CardDetials = ({ difficulty, duration, summary, startLocation, startDates, locations, maxGroupSize }) => (
  <div className="card__details">
    <h4 className="card__sub-heading">
      {difficulty} {duration}-day tour
    </h4>
    <p className="card__text">{summary}</p>
    <div className="card__data">
      <Icon name="icon-map-pin" className="card__icon" />
      <span>{startLocation.description}</span>
    </div>
    <div className="card__data">
      <Icon name="icon-calendar" className="card__icon" />
      <span>{startDates[0]}</span>
    </div>
    <div className="card__data">
      <Icon name="icon-flag" className="card__icon" />
      <span>{locations.length} stops</span>
    </div>
    <div className="card__data">
      <Icon name="icon-user" className="card__icon" />
      <span>{maxGroupSize} people</span>
    </div>
  </div>
);

export default CardDetials;
