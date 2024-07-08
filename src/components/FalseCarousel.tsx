import React from 'react';
import { logos2 } from '../constants'; 

const FalseCarousel: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-wrapper grid grid-cols-2 sm:grid-cols-4">
        {logos2.map((logo, index) => (
          <div key={index} className="flex justify-center items-center my-2 banner-item">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-[9vw] min-h-[75px] px-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FalseCarousel;
