import React from 'react';

import { apiImgUrl } from '../../../utils';

const TourPictures = ({ name, images }) => (
  <section className="section-pictures">
    {images.map((img, index) => (
      <div key={index} className="picture-box">
        <img
          className={`picture-box__img picture-box__img--${index + 1}`}
          src={apiImgUrl(img)}
          alt={`${name} Tour ${index + 1}`}
        />
      </div>
    ))}
  </section>
);

export default TourPictures;
