import React from "react";
import { logos2 } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WeirdCarousel3Props {
  
}

export const WeirdCarousel3: React.FC<WeirdCarousel3Props> = () => {
  const settings = {
    dots: false,
    rows: 1,
    initialSlide: 5,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    accessibility: false,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    variableWidth: true,
    swipe: false,
    touchMove: false,
    rtl: true,
    cssEase: 'ease-in-out',
  };

  return (
    <Slider
      className="banner-container slick-track justify-center"
      {...settings}
    >
      {logos2.map((logo, index) => (
        <div key={index} className="flex justify-center items-center my-2 banner-item">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-[9vw] min-h-[75px] mx-20 2xl:max-h-[205px] max-h-[175px] w-auto"
          />
        </div>
      ))}
    </Slider>
  );
};