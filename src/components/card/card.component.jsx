import React from 'react';

import CardHeader from './card-header/card-header.component';
import CardDetails from './card-details/card-details.component';
import CardFooter from './card-footer/card-footer.component';

import './card.styles.scss';

const Card = ({ tour }) => {
  console.log(tour);
  const {
    name,
    imageCover,
    summary,
    difficulty,
    duration,
    startLocation,
    startDates,
    locations,
    maxGroupSize,
    price,
    ratingsAverage,
    ratingsQuantity
  } = tour;
  return (
    <div className="card">
      <CardHeader name={name} imageCover={imageCover} />
      <CardDetails
        difficulty={difficulty}
        duration={duration}
        summary={summary}
        startLocation={startLocation}
        startDates={startDates}
        locations={locations}
        maxGroupSize={maxGroupSize}
      />
      <CardFooter price={price} ratingsAverage={ratingsAverage} ratingsQuantity={ratingsQuantity} />
    </div>
  );
};

export default Card;
