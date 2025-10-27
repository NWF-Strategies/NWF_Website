import React from 'react';
import summer_arjav_photo from '../assets/summer_arjav_photo.jpg';
import light_blue_fulltext_logo from '../assets/light_blue_fulltext_logo.png';
import OrangeButton from './OrangeButton';
import scribbleUnderline from "../assets/scribble_underline.svg";
import scribbleCircle from "../assets/scribble_circle.svg";
import backgroundPattern from '../assets/background_arrows_white.svg';
import SlideIn from '../components/SlideInAnimation';

const NewAboutSection: React.FC = () => {
  return (
    <div className="bg-gray-100 relative py-16 px-16 lg:px-32" style={{
    backgroundImage: `url(${backgroundPattern})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  }}>
      
      <div className="max-w-[75rem] mx-auto">
        <div className="text-center mb-12">
          <img 
            src={light_blue_fulltext_logo} 
            alt="NWF Strategies" 
            className="h-10 lg:h-14 mx-auto"
          />
        </div>



        <div className="mb-6">
          <p className="text-black font-poppins text-xl lg:text-2xl font-black [-webkit-text-stroke:0.8px_black] leading-snug">WE ARE...</p>
          <h1 className="mb-8 mt-2 text-xl lg:text-3xl font-poppins font-normal [-webkit-text-stroke:0.5px_black] text-black leading-tight relative">
            <span className="relative inline-block">
              Changing politics
              <img
                src={scribbleUnderline}
                alt=""
                className="absolute left-0 bottom-0 w-full h-auto pointer-events-none"
              />
            </span>{" "}
            one{" "}
            <span className="relative inline-block overflow-visible">
              people-powered
              <img
                src={scribbleCircle}
                alt=""
                className="absolute inset-0 w-full h-full scale-x-[1.6] scale-y-[1.5] left-[6%] top-[5%] pointer-events-none"
              />
            </span>{" "}
            campaign at a time.
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start px-2 mb-24">
          {/* Left side - Image */}
          <SlideIn direction = "left"duration={300} delay={100} > 
              <div className="relative lg:col-span-2 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={summer_arjav_photo} 
                  alt="Summer and Arjav" 
                  className="w-full md:max-w-lg lg:max-w-md mx-auto  h-[400px] object-cover object-center"
                />
            </div>  
          </SlideIn>
          {/* Right side - Content */}
          
          <SlideIn direction = "right"  duration={800}> 
            <div className="space-y-4 lg:col-span-3">
              <div className="space-y-4 text-black font-poppins text-[1.1rem] leading-normal">
                <p>
                  At New Way Forward (NWF) Strategies, we believe that Democracy starts with{' '}
                  <span className="font-semibold">accessibility</span>. From local elections to nationwide races,{' '}
                  <span className="font-semibold">campaigns begin with the individual</span>. We started the New Way Forward to{' '}
                  <span className="font-semibold">deploy frontiering technologies and strategies</span>, providing change-makers the tools to operate{' '}
                  <span className="font-semibold">cutting-edge, winning campaigns</span>.
                </p>
                <p>
                  Coupled with our team's combined <span className="font-semibold">50 years</span> in campaign management, NWF Strategies has won groundbreaking uphill battles, high-profile races, and facilitated landmark movements.
                </p>
              </div>
              <OrangeButton label="About Us" to="/about" textcolor='black'/>
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
};

export default NewAboutSection;
