import React from 'react';

import { apiImgUrl } from '../../../utils';

const CardHeader = ({ name, imageCover }) => (
  <div className="card__header">
    <div className="card__picture">
      <div className="card__picture-overlay">&nbsp;</div>
      <img src={apiImgUrl(imageCover)} alt={name} className="card__picture-img" />
    </div>
    <h3 className="heading-tertirary">
      <span>{name}</span>
    </h3>
  </div>
);

export default CardHeader;
