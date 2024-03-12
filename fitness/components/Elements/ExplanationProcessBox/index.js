import React from 'react';
import Image from 'next/image';

const ExplanationProcessBox = ({ ImageSrc, ImageAlt,  text, title, className }) => {
  return (
    <div className={className ? className: ''}>
      <div className="process_box">
        <div className="process_detail">
          <div className="header_detail">
            <Image src={ImageSrc} alt={ImageAlt} />
            <h3>{title}</h3>
          </div>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      </div>
    </div>
  );
};

export default ExplanationProcessBox;
