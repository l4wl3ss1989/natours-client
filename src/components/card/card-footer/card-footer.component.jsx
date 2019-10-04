import React from 'react';
import { Link } from 'react-router-dom';

const CardFooter = ({ price, ratingsAverage, ratingsQuantity, slug, id }) => (
  <div className="card__footer">
    <p>
      <span className="card__footer-value">${price}</span>
      &nbsp;
      <span className="card__footer-text">per person</span>
    </p>
    <p className="card__ratings">
      <span className="card__footer-value">{ratingsAverage}</span>
      &nbsp;
      <span className="card__footer-text">rating ({ratingsQuantity})</span>
    </p>
    <Link to={{ pathname: `/tours/${slug}`, state: { id: id, slug: slug } }} className="btn btn--green btn--small">
      Details
    </Link>
  </div>
);

export default CardFooter;
