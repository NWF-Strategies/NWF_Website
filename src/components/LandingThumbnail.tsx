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
            <div className="items-start w-full ">
                    <div className="max-h-[40rem] xl:max-h-[55rem]">
                        <img src={imageSrc} alt="Carousel Image" className='min-h-[500px]' />
                    </div>
            </div>
            <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center max-h-[600px] px-[25px]">
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
