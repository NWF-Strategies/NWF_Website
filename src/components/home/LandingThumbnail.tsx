import React from 'react';
import Button from '../Button';

interface LandingThumbnailProps {
    imageSrc: string;
    spanText: string;
    mainText: string;
}

const LandingThumbnail: React.FC<LandingThumbnailProps> = ({ imageSrc, spanText, mainText }) => {
    return (
        <>
            <div className="items-start w-full h-screen">
                <div className="min-h-[500px] object-cover">
                    <div className="max-h-[40rem] xl:max-h-[55rem]">
                        <img src={imageSrc} alt="Carousel Image" className='min-h-[500px]' />
                    </div>
                </div>
            </div>
            <div className="absolute inset-y-[5rem] sm:inset-y-1/3 z-20 flex justify-center text-center h-[80vh] min-h-[500px] max-h-[600px] px-[25px]">
                <div className="flex flex-col gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
                    <p className="text-[4rem] text-white md:mt-5 font-medium">
                        <span className='text-secondary'>{spanText}</span> {mainText}
                    </p>
                    <Button label="The New Way Forward" />
                </div>
            </div>
        </>
    );
};

export default LandingThumbnail;
