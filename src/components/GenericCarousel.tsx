import React, { ReactNode } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



interface GenericCarouselProps {
    slides: ReactNode[];
}

export const GenericCarousel: React.FC<GenericCarouselProps> = ({ slides }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}
                dynamicHeight={true}>
            {slides.map((slideContent, index) => (
                <div className='h-[120%]'>
                    {slideContent}
                </div>
            ))}
        </Carousel>
    );
};
