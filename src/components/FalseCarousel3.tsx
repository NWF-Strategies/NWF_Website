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
    initialSlide: 4,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    accessibility: false,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    variableWidth: true,
    swipe: false,
    touchMove: false,
    rtl: true,
    cssEase: 'linear',
  };

  return (
    <Slider
      className="banner-container"
      {...settings}
    >
      {logos2.map((logo, index) => (
        <div key={index} className="flex justify-center items-center my-2 banner-item">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-[9vw] min-h-[75px] px-2 sm:mx-20 xl:mx-40 xl:mx-200 2xl:max-h-[205px] sm:max-h-[175px] max-h-[170px] w-auto"
          />
        </div>
      ))}
    </Slider>
  );
};