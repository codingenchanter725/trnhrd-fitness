import React from 'react';

const FitnessToLiveItem = ({ text, title, className }) => {
  return (
    <div className={className ? className: ''}>
      <div className="yellow_circle">
      </div>
      <div>
        <h3>
          {title}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
};

export default FitnessToLiveItem;
