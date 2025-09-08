import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import strategy from "../assets/strategy.png";
import research_dev from "../assets/research_dev.png";
import software_data from "../assets/software_data.png";
import operation from "../assets/operation.png";
import ellipse_pattern from "../assets/ellipse_pattern.png";
import FadeIn from '../components/FadeIn';

// Define a type for a solution item
type ServiceItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ imageSrc, title, description }) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col items-start text-left'>
      {/* Illustration - no background, just the image */}
      <div className='w-full mb-4 flex justify-start items-center h-40'>
        <img src={imageSrc} alt={title} className='max-w-full max-h-full object-contain' />
      </div>
      
      {/* Title */}
      <h3 className='text-lg font-poppins font-semibold text-black mb-2 text-left'>{title}</h3>
      
      {/* Read more link */}
      <button 
        className='text-black hover:text-gray-700 mb-3 flex items-center text-sm font-lato justify-start'
        onClick={() => setOpen(!open)}
      >
        Read more {open ? '▲' : '▼'}
      </button>
      
      {/* Collapsible description */}
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className='bg-white bg-opacity-80 p-3 rounded-lg backdrop-blur-sm'>
          <p className='text-sm font-lato text-black leading-relaxed mb-0 text-left'>{description}</p>
        </div>
      </div>
      
      {/* View a case study button */}
      <button 
        onClick={() => {
          navigate("/solutions");
          window.scrollTo(0, 0);
        }}
        className='border border-black text-black hover:bg-black hover:text-white px-3 py-2 rounded text-sm font-lato transition-colors self-start mt-3'
      >
        View a case study
      </button>
    </div>
  );
};

const SolutionsGrid: React.FC = () => {
  const solutionsData = [
    {
      imageSrc: strategy,
      title: "Fundraising",
      description: "Great campaigns begin at the drawing board. We provide end-to-end support to formulate efficient, effective strategies and timelines to support campaigns from launch to election."
    },
    {
      imageSrc: research_dev,
      title: "Strategy & Research", 
      description: "Research hones effective campaign messaging and widespread voter outreach. From donor and opposition research to targeted voter universes, compile rigorous documentation to inform your campaigning decisions."
    },
    {
      imageSrc: software_data,
      title: "Software & Data",
      description: "Deploy cutting-edge machine learning models to predict voter behavior and leverage comprehensive dashboards to manage day-to-day campaign operations."
    },
    {
      imageSrc: operation,
      title: "Operations & Mobilization",
      description: "Mobilize hundreds of volunteers to canvass and contact millions of voters. Execute and deploy voter contact strategies effortlessly."
    }
  ];
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
      {solutionsData.map((item) => (
        <ServiceItem
          key={item.title}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

const OurSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FadeIn duration={500} delay={200}>
      {/* Main Content Section with Light Background */}
      <div className='bg-white pt-20 pb-8 relative min-h-screen overflow-visible'>
        {/* Ellipse Pattern Image with Intense Gradient Background - Behind content */}
        <div className='absolute bottom-0 left-0 right-0 h-64 z-0'>
          <div className='absolute inset-0 bg-gradient-to-b from-white via-cyan-300 to-cyan-500'></div>
          <div className='relative flex justify-center items-end h-full pb-2'>
            <img src={ellipse_pattern} alt="Pattern" className='w-full max-w-6xl opacity-80' />
          </div>
        </div>

        <div className='max-w-6xl mx-auto px-6 relative z-10'>
          {/* Header */}
          <div className='mb-8 text-left'>
            <h1 className='text-3xl lg:text-4xl font-poppins font-bold text-black mb-3 text-left'>Our Services</h1>
            <p className='text-base font-lato text-gray-600 mb-4 text-left'>
              We combine traditional outreach strategy with innovative technology.
            </p>
            <button 
              onClick={() => {
                navigate("/solutions");
                window.scrollTo(0, 0);
              }}
              className='flex items-center gap-2 text-orange-500 justify-start hover:text-orange-600 transition-colors'
            >
              <span className='w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center'>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              <span className='text-orange-500 font-poppins font-medium text-base'>Explore our Case Studies</span>
            </button>
          </div>

          {/* Solutions Grid */}
          <SolutionsGrid />
        </div>
      </div>
    </FadeIn>
  );
};

export default OurSolutions;