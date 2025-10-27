import React from 'react';
import { logos2, homepage_stats, mobile_homepage_stats } from '../constants';
import reedAwards from '../assets/reed_awards.svg';
import reedAwardsGradient from '../assets/reed_award_gradient_bottom.svg';
import reedIcons from '../assets/reed_ellipses.svg';
import styles from '../style';

interface TrustedLeadersSectionProps {
  showMetrics?: boolean;
}
const imageStyle: React.CSSProperties & { [key: string]: string } = {
  '--fade-top-start': '0%',
  '--fade-top-end': '5%',
  '--fade-bottom-start': '1%',
  '--fade-bottom-end': '25%',
  '--fade-side-start': '1%',
  '--fade-side-end': '4%',
  WebkitMaskImage: `
    radial-gradient(circle at center, black 70%, transparent 99%),
    linear-gradient(to top, transparent var(--fade-top-start), black var(--fade-top-end)),
    linear-gradient(to bottom, transparent var(--fade-bottom-start), black var(--fade-bottom-end)),
    linear-gradient(to left, transparent var(--fade-side-start), black var(--fade-side-end)),
    linear-gradient(to right, transparent var(--fade-side-start), black var(--fade-side-end))
  `,
  WebkitMaskComposite: 'destination-in',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: '100% 100%',
}
const TrustedLeadersSection: React.FC<TrustedLeadersSectionProps> = ({ showMetrics = true }) => {
  return (
    <div className="w-full bg-black pt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Metrics Section */}
        {showMetrics && (
          <>
            <div className='w-full flex flex-col justify-center items-center mb-12'>
              <div className='invisible sm:visible h-0 sm:h-auto flex flex-col lg:flex-row items-center flex-nowrap overflow-hidden whitespace-nowrap'> {/*computer*/}
                {homepage_stats.map((content, index) => (
                  <div key={index} className='items-center text-center py-10 mx-10'>
                    <p>{content.counter}</p>
                    <p className={`${styles.paragraph}`}>{content.text}</p>
                  </div>
                ))}
              </div>
              <div className='visible sm:invisible h-auto sm:h-0 flex flex-col lg:flex-row items-center flex-nowrap overflow-hidden whitespace-nowrap'> {/*mobile*/}
                {mobile_homepage_stats.map((content, index) => (
                  <div key={index} className='items-center text-center py-10 mx-10 font-poppins font-[1000] bold text-[#43BCCD] sm:leading-[5rem] md:text-[60px] sm:text-[45px] text-[50px] font-color:white'>
                    <p>{content.number}</p>
                    <p className={`${styles.paragraph}`}>{content.text}</p>
                  </div>
                ))} 
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-white mt-4 mb-20"></div>
          </>
        )}
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-wide font-poppins font-normal text-white mb-4">
            Today's leaders trust in the <span className="text-cyan-400 font-[1000] [-webkit-text-stroke:.5px]">New Way Forward</span>.
          </h2>
        </div>
        
        {/* Logo Grid - 4x3 layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {logos2.map((logo, index) => {
            // Check if this is the AK Dems logo (assuming it's the last one in the array)
            const isAKDems = logo.includes('ak_dems');
            return (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={`w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                    isAKDems ? 'h-28 lg:h-36' : 'h-20 lg:h-24'
                  }`}
                />
              </div>
            );
          })}
        </div>
        {/* Reed Awards */}
        <div className="relative flex justify-center items-center">
          {/* Background gradient */}
          <img
            src={reedAwardsGradient}
            alt="Reed Awards Gradient"
            className="absolute left-1/2 bottom-0 right-0 w-[120%] max-w-none -translate-x-1/2 object-cover z-0"
          />

          {/* Mid‑layer icons */}
          <img
            src={reedIcons}
            className="absolute bottom-12 left-8 right-0 w-full object-cover z-0"
          />
          {/* Foreground award */}
          <img
            src={reedAwards}
            alt="Reed Awards Finalist"
            className="relative z-20 max-w-full"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedLeadersSection;
