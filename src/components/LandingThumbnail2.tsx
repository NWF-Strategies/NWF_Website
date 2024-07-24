import React, { ReactElement } from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';

interface LandingThumbnailProps {
    imageSrc: string;
    text: ReactElement;
    buttonLabel: string;
    navigateTo: string;
}

const LandingThumbnail2: React.FC<LandingThumbnailProps> = ({ imageSrc, text, buttonLabel, navigateTo }) => { // Same but color change for slide with hand shake
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (navigateTo!="/") {
            navigate(navigateTo);
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 700);
        }
    }
    
    return (
        <>
            <div className="items-start w-full h-screen">
                <div className="h-full">
                    <img src={imageSrc} alt="Carousel Image" className='h-full w-full object-cover' />
                </div>
            </div>
            <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center px-[25px] mt-20">
                <div className="flex flex-col rounded-none gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
                    <p className={`${styles.heading7}  text-white font-medium`}>
                        {text}
                    </p>
                    <button className={styles.landingbutton2} type='button' onClick={handleButtonClick}>
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandingThumbnail2;
