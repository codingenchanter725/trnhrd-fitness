import React from 'react';

const PersonalTrainingSliderItem = ({ sliderImageSrc, subText, title }) => {
  return (
    <div className="courses_popular">
      <div className="top_cours">
        <figure>
          <img src={sliderImageSrc} alt="" />
        </figure>
        <div className="apply_box d-flex align-items-center">
          <div className="full_width">
            <a href="#" className="btn-text">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="courses_detail">
        <h3>
          <a href="#">{title}</a>
        </h3>
        <p>
          {subText}
        </p>
        <a href="#" className="read-more">
          Read More
        </a>
      </div>
    </div>
  );
};

export default PersonalTrainingSliderItem;
