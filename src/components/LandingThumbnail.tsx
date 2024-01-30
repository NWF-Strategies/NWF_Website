import React, { ReactElement } from 'react';
import Button from './Button';
import styles from '../style';

interface LandingThumbnailProps {
    imageSrc: string;
    text: ReactElement;
    button_label: string;
}

const LandingThumbnail: React.FC<LandingThumbnailProps> = ({ imageSrc, text, button_label }) => {
    return (
        <>
            <div className="items-start w-full h-screen">
                <div className="h-full">
                    <img src={imageSrc} alt="Carousel Image" className='h-full w-full object-cover' />
                </div>
            </div>
            <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center px-[25px] mt-20">
                <div className="flex flex-col rounded-none gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
                    <p className={`${styles.heading5}  text-white font-medium`}>
                        {text}
                    </p>
                    <Button label={button_label} />
                </div>
            </div>
        </>
    );
};

export default LandingThumbnail;
