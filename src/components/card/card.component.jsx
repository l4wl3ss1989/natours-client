import React from 'react';

import CardHeader from './card-header/card-header.component';
import CardDetails from './card-details/card-details.component';
import CardFooter from './card-footer/card-footer.component';

const Card = ({ tour }) => {
  const {
    id,
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
    ratingsQuantity,
    slug
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
      <CardFooter id={id} price={price} ratingsAverage={ratingsAverage} ratingsQuantity={ratingsQuantity} slug={slug} />
    </div>
  );
};

export default Card;
