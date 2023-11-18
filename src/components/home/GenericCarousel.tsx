import React, { ReactNode } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Your existing imports
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';


interface GenericCarouselProps {
    slides: ReactNode[];
    width: number;
    height: number;
}

const GenericCarousel: React.FC<GenericCarouselProps> = ({ slides, width, height }) => {
    return (
        <CarouselProvider
            naturalSlideWidth={width}
            naturalSlideHeight={height}
            totalSlides={slides.length}
        >
            <div className="relative "> {/* Make container relative */}
                <Slider className="flex-1">
                    {slides.map((slideContent, index) => (
                        <Slide index={index} key={index}>
                            {slideContent}
                        </Slide>
                    ))}
                </Slider>

                <ButtonBack className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                    <img src={arrowLeft} alt='Left arrow' />
                </ButtonBack>

                <ButtonNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <img src={arrowRight} alt='Right arrow' />
                </ButtonNext>
            </div>
        </CarouselProvider>
    );
};

export default GenericCarousel;
