import React from 'react';

import Guide from '../../guide/guide.component';
import Icon from '../../icons/icon.component';
import { convertDate } from '../../../utils';

const TourDescription = ({ name, description, startDates, difficulty, maxGroupSize, ratingsAverage, guides }) => (
  <section className="section-description">
    <div className="overview-box">
      <div>
        <div className="overview-box__group">
          <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
          <div className="overview-box__detail">
            <Icon name="icon-calendar" className="overview-box__icon" />
            <span className="overview-box__label">Next date</span>
            <span className="overview-box__text">{convertDate(startDates[0])}</span>
          </div>
          <div className="overview-box__detail">
            <Icon name="icon-trending-up" className="overview-box__icon" />
            <span className="overview-box__label">Difficulty</span>
            <span className="overview-box__text">{difficulty}</span>
          </div>
          <div className="overview-box__detail">
            <Icon name="icon-user" className="overview-box__icon" />
            <span className="overview-box__label">Participants</span>
            <span className="overview-box__text">{maxGroupSize} people</span>
          </div>
          <div className="overview-box__detail">
            <Icon name="icon-star" className="overview-box__icon" />
            <span className="overview-box__label">Rating</span>
            <span className="overview-box__text">{ratingsAverage} / 5</span>
          </div>
        </div>

        <div className="overview-box__group">
          <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
          {guides.map(guide => (
            <Guide key={guide._id} guide={guide} />
          ))}
        </div>
      </div>
    </div>

    <div className="description-box">
      <h2 className="heading-secondary ma-bt-lg">About {name.toLowerCase()} tour</h2>
      {description.split('\\n').map((desc, index) => (
        <p key={index} className="description__text">
          {desc}
        </p>
      ))}
    </div>
  </section>
);

export default TourDescription;
