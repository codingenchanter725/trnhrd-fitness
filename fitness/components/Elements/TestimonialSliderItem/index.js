import React from 'react';
import Image from 'next/image';

const TestimonialSliderItem = ({ sliderImage, name, bio, description }) => {
  return (
    <div className="item_testimonial">
      <div className="patient_head d-flex align-items-stretch">
        <div className="patient_img">
          <figure>
            <Image src={sliderImage} alt="" />
          </figure>
        </div>
        <div className="patient_detail d-flex align-items-center">
          <div>
            <h3>{name}</h3>
            <span>{bio}</span>
          </div>
        </div>
      </div>
      <div className="patient_text">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSliderItem;
