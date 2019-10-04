import React from 'react';

import Icon from '../../icons/icon.component';
import { apiImgUrl } from '../../../utils';

const TourReiews = ({ reviews }) => {
  const displayReview = rw => {
    const {
      _id,
      review,
      rating,
      user: { photo, name }
    } = rw;
    const stars = getStars(rating);
    return (
      <div key={_id} className="reviews__card">
        <img src={apiImgUrl(photo, 'users')} alt={name} className="reviews__avatar-img" />
        <h6 className="reviews__user">{name}</h6>
        <p className="reviews__text">{review}</p>
        <div className="reviews__rating">
          {stars.map((star, index) => (
            <Icon key={index} name="icon-star" className={`reviews__star reviews__star--${star}`} />
          ))}
        </div>
      </div>
    );
  };

  const getStars = rating => {
    const maxStars = 5;
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      const isActiveClass = rating >= i + 1 ? 'active' : 'inactive';
      stars.push(isActiveClass);
    }
    return stars;
  };

  return (
    <section className="section-reviews">
      <div className="reviews">{reviews.map(rw => displayReview(rw))}</div>
    </section>
  );
};

export default TourReiews;
