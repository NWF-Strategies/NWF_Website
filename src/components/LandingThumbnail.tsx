import React, { ReactElement } from 'react';
import styles from '../style';
import OrangeButton from './OrangeButton';

interface LandingThumbnailProps {
  imageSrc: string;
  text: ReactElement;
  secondaryButton: string;
  secondaryNavigate: string;
}

const LandingThumbnail: React.FC<LandingThumbnailProps> = ({
  imageSrc,
  text,
  secondaryButton,
  secondaryNavigate,
}) => {
  return (
    <>
      <div className="items-start w-full h-screen -mt-[52px] sm:-mt-[64px]">
        <div className="h-full">
          <img
            src={imageSrc}
            alt="Carousel Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center px-[25px]">
        <div className="flex flex-col rounded-none gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
          <p className={`${styles.heading7} text-white font-medium`}>{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <OrangeButton
              label={secondaryButton}
              to={secondaryNavigate}
              color="#00BCD4" 
              textcolor="white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingThumbnail;
