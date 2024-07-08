import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { logos2 } from '../constants'; 


interface WeirdCarousel2Props {
  slides: React.ReactNode[];
}

export const WeirdCarousel2: React.FC<WeirdCarousel2Props> = ({}) => {
  return (
    <Carousel
      className="banner-container"
      swipeable={false} // Disable swipe gestures
      stopOnHover={false} // Do not stop autoplay on hover
      showArrows={false} // Hide navigation arrows
      autoPlay={true} // Enable autoplay
      interval={3000} // Time between slides
      transitionTime={3000} // Duration of each slide transition
      infiniteLoop={true} // Enable infinite looping
      showStatus={false} // Hide status indicators
      dynamicHeight={false} // Disable dynamic height adjustment
      showThumbs={false} // Hide thumbnails
      showIndicators={false} // Hide slide indicators
      emulateTouch={false} // Disable touch emulation
      onClickItem={() => null} // Disable click event handling
      renderArrowPrev={() => null} // Disable rendering of previous arrow
      renderArrowNext={() => null} // Disable rendering of next arrow
      renderIndicator={() => null} // Disable rendering of indicators
      onClickThumb={() => {}} // Disable click event handling
      onSwipeStart={() => {}} // Disable swipe event handling
      onSwipeEnd={() => {}} // Disable swipe event handling
      useKeyboardArrows ={false}
      width={'100%'} // Set carousel width
    >
      {logos2.map((logo, index) => (
        <div key={index} className="flex justify-center items-center my-2 banner-item">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-[9vw] min-h-[75px] px-2"
            style={{ maxHeight: "175px", width: "auto" }} // Adjust image styling
          />
        </div>
      ))}
    </Carousel>
  );
};
