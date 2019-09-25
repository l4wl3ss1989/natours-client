import React from 'react';
import { Link } from 'react-router-dom';

import './card-footer.styles.scss';

const CardFooter = ({ price, ratingsAverage, ratingsQuantity }) => (
  <div className="card__footer">
    <p>
      <span className="card__footer-value">${price}</span>
      <span className="card__footer-text">per person</span>
    </p>
    <p className="card__ratings">
      <span className="card__footer-value">{ratingsAverage}</span>
      <span className="card__footer-text">rating ({ratingsQuantity})</span>
    </p>
    <Link to="/" className="btn btn--green btn--small">
      Details
    </Link>
  </div>
);

export default CardFooter;
