import React from 'react';

import { apiImgUrl } from '../../../utils';
import logoWhite from '../../../assets/images/logo-white.png';

const TourCTA = ({ duration, images }) => {
  const randomFeaturedImages = images => {
    const imagesAmount = 2;
    const hasEnogthImages = images.length > imagesAmount ? true : false;
    if (hasEnogthImages) {
      const result = [];
      const randNumberOne = Math.floor(Math.random() * images.length);
      result.push(images[randNumberOne]);
      const restIamges = [...images].filter((value, index) => index !== randNumberOne);
      const randNumberTwo = Math.floor(Math.random() * restIamges.length);
      result.push(restIamges[randNumberTwo]);
      return result;
    }
    return images;
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src={logoWhite} alt="Natours logo" className="" />
        </div>
        {randomFeaturedImages(images).map((img, index) => (
          <img key={index} src={apiImgUrl(img)} alt="" className={`cta__img cta__img--${index + 1}`} />
        ))}
        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">{duration} days. 1 adventure. Infinite memories. Make it yours today!</p>
          <button className="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>
  );
};

export default TourCTA;

/*
<section class="section-cta">
      <div class="cta">
        <div class="cta__img cta__img--logo">
          <img src="img/logo-white.png" alt="Natours logo" class="" />
        </div>
        <img src="img/tour-5-2.jpg" alt="" class="cta__img cta__img--1" />
        <img src="img/tour-5-1.jpg" alt="" class="cta__img cta__img--2" />

        <div class="cta__content">
          <h2 class="heading-secondary">What are you waiting for?</h2>
          <p class="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button class="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>
*/
