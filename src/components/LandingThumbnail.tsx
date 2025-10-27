import React, { ReactElement } from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleExternalOrScroll = (to?: string) => {
    if (!to) return;
    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else if (to !== '/') {
      navigate(to);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 700);
    }
  };

  return (
    <>
      <div className="items-start w-full h-screen">
        <div className="h-full">
          <img
            src={imageSrc}
            alt="Carousel Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center px-[25px] mt-20">
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
