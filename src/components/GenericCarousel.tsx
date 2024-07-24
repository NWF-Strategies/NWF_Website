import React, { ReactNode } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface GenericCarouselProps {
  slides: ReactNode[];
}

export const GenericCarousel: React.FC<GenericCarouselProps> = ({ slides }) => { //not so generic; heavily customized carousel now
  const renderArrow = (direction: 'prev' | 'next') => (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => {
    if ((direction === 'prev' && !hasPrev) || (direction === 'next' && !hasPrev)) {
      return null;
    }

    return (
      <button
        type="button"
        onClick={clickHandler}
        title={label}
        className={`absolute top-1/2 -translate-y-1/2 ${
          direction === 'prev' ? 'left-4' : 'right-4'
        } bg-none bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 z-10`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="white" 
          className={`w-10 h-13 ${direction === 'prev' ? 'rotate-180' : ''}`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m8.25 4.5 7.5 7.5-7.5 7.5" 
          />
        </svg>
      </button>
    );
  };

  const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    return (
      <li
        className={`inline-block mx-2 my-4 cursor-pointer`}
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      >
        <div
          className={`w-4 h-4 2xl:w-5 2xl:h-5 rounded-full transition-all duration-300 ${
            isSelected 
              ? 'bg-greenBlue scale-125' 
              : 'bg-white hover:bg-fadedGreenBlue'
          }`}
        />
      </li>
    );
  };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={false}
      swipeable={false}
      renderArrowPrev={renderArrow('prev')}
      renderArrowNext={renderArrow('next')}
      renderIndicator={renderIndicator}
      className="custom-carousel"
    >
      {slides.map((slideContent, index) => (
        <div key={index}>{slideContent}</div>
      ))}
    </Carousel>
  );
};

export default GenericCarousel;