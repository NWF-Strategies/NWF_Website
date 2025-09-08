import React from 'react';
import { useNavigate } from 'react-router-dom';
import summer_arjav_photo from '../assets/summer_arjav_photo.jpg';
import light_blue_fulltext_logo from '../assets/light_blue_fulltext_logo.png';

const NewAboutSection: React.FC = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white py-16 px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Centered Logo */}
        <div className="text-center mb-12">
          <img 
            src={light_blue_fulltext_logo} 
            alt="NWF Strategies" 
            className="h-10 lg:h-11 mx-auto"
          />
        </div>

        {/* Content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src={summer_arjav_photo} 
              alt="Summer and Arjav" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Main Tagline - Now above the content */}
            <h1 className="text-2xl lg:text-3xl font-poppins font-bold text-black leading-tight">
              <span style={{color: '#FCB001'}}>Changing politics</span>{' '}
              one{' '}
              <span style={{color: '#FCB001'}}>people-powered</span>{' '}
              campaign at a time.
            </h1>
            {/* Description */}
            <div className="space-y-4 text-black font-poppins text-base leading-relaxed">
              <p>
                At New Way Forward (NWF) Strategies, we believe that Democracy starts with{' '}
                <span className="font-semibold">accessibility</span>. From local elections to nationwide races,{' '}
                <span className="font-semibold">campaigns begin with the individual</span>. We started the New Way Forward to{' '}
                <span className="font-semibold">deploy frontiering technologies and strategies</span>, providing change-makers the tools to operate{' '}
                <span className="font-semibold">cutting-edge, winning campaigns</span>.
              </p>
              <p>
                Coupled with our team's combined <span className="font-semibold text-cyan-600">50 years</span> in campaign management, NWF Strategies has won groundbreaking uphill battles, high-profile races, and facilitated landmark movements.
              </p>
            </div>

            {/* About Us Button */}
            <div className="pt-4">
              <button 
                onClick={handleAboutClick}
                className="group relative font-poppins font-medium text-black hover:text-black transition-colors duration-300"
              >
                <div className="relative inline-flex items-center">
                  <div 
                    className="absolute left-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-out group-hover:w-44 overflow-hidden bg-transparent"
                    style={{borderColor: '#FCB001'}}
                  >
                    <span 
                      className="absolute inset-0 opacity-0 transition-all duration-300 ease-out rounded-full group-hover:opacity-100"
                      style={{backgroundColor: '#FCB001'}}
                    ></span>
                    <svg 
                      className="absolute left-3 z-10 w-4 h-4 transition-all duration-300 group-hover:text-black"
                      style={{color: '#FCB001'}}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="relative z-10 ml-14 text-base">About Us</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutSection;
