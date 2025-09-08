import React from 'react';
import { logos2, homepage_stats, mobile_homepage_stats } from '../constants';
import reedAwards from '../assets/Reed Awards.png';
import styles from '../style';

interface TrustedLeadersSectionProps {
  showMetrics?: boolean;
}

const TrustedLeadersSection: React.FC<TrustedLeadersSectionProps> = ({ showMetrics = true }) => {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
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
            
            {/* Horizontal Line */}
            <div className="w-full h-px bg-gray-600 mb-12"></div>
          </>
        )}
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal text-white mb-4">
            Today's leaders trust in the <span className="text-cyan-400">New Way Forward</span>.
          </h2>
        </div>
        
        {/* Logo Grid - 4x3 layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 items-center justify-items-center mb-16 max-w-4xl mx-auto">
          {logos2.map((logo, index) => {
            // Check if this is the AK Dems logo (assuming it's the last one in the array)
            const isAKDems = logo.includes('ak_dems');
            return (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={`w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                    isAKDems ? 'h-20 lg:h-28' : 'h-12 lg:h-16'
                  }`}
                />
              </div>
            );
          })}
        </div>
        
        {/* Reed Awards */}
        <div className="flex justify-center">
          <img 
            src={reedAwards} 
            alt="Reed Awards Finalist" 
            className="max-w-full h-auto w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedLeadersSection;
