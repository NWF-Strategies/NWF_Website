import { Newsletter } from "../../components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import peltola_logo from "../../assets/logo_peltola.png";
import ventura_logo from "../../assets/logo_ventura.png";
import mcduffie_logo from "../../assets/logo_mcduffie.png";
import home_ventura from "../../assets/home_ventura.png";
import home_mcduffie from "../../assets/home_mcduffie.png";
import summer_logo from "../../assets/logo_summer.png";
import zohran_logo from "../../assets/zohran_logo.png";
import mary_peltola_casestudy from "../../assets/mary_peltola_casestudy.jpg";
import summer_lee_photo from "../../assets/summer_lee.png";
import zohran_speaking_photo from "../../assets/zohran_speaking.png";
import strategy from "../../assets/strategy.png";
import research_dev from "../../assets/research_dev.png";
import software_data from "../../assets/software_data.png";
import operation from "../../assets/operation.png";
import ellipse_pattern from "../../assets/ellipse_pattern.png";
import { polygon } from "../../assets";

const Solutions = () => {
  return (
    <div>
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
              onClick={() => document.getElementById('case-studies-section')?.scrollIntoView({ behavior: 'smooth' })}
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

      {/* Dark Background Section */}
      <div className='bg-black pb-8'>
        <CaseStudiesSection />
        <Newsletter />
      </div>
    </div>
  );
};

export default Solutions;

// Local components
type ServiceItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ imageSrc, title, description }) => {
  const [open, setOpen] = useState<boolean>(false);
  
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
      <button className='border border-black text-black hover:bg-black hover:text-white px-3 py-2 rounded text-sm font-lato transition-colors self-start mt-3'>
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

const CaseStudiesSection: React.FC = () => {
  const studies = {
    mary: { 
      name: "Mary Peltola", 
      fullName: "Mary Peltola",
      logo: peltola_logo, 
      photo: mary_peltola_casestudy,
      typeOfStudy: "Voter Contact + Data",
      description: "How fish and freedom flipped a 50-year Republican stronghold against former governor Sarah Palin to seat the first Alaskan Native in Congress.",
      to: "/solutions/mary-peltola-2022" 
    },
    zohran: { 
      name: "Zohran Mamdani", 
      fullName: "Zohran Mamdani",
      logo: zohran_logo,
      photo: zohran_speaking_photo,
      typeOfStudy: "Fundraising",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      to: "/solutions/zohran" 
    },
    summer: { 
      name: "Summer Lee", 
      fullName: "Summer Lee",
      logo: summer_logo, 
      photo: summer_lee_photo,
      typeOfStudy: "Fundraising",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      to: "/solutions/summer-lee" 
    },
    ventura: { 
      name: "Rachel Ventura", 
      fullName: "State Sen. Rachel Ventura (IL-43)",
      logo: ventura_logo, 
      photo: home_ventura,
      typeOfStudy: "Voter Contact + Data",
      description: "How a former school board member beat out an incumbent while outraised 18-to-1 to win the Illinois State Senate seat.",
      to: "/solutions/rachel-ventura-2022" 
    },
    mcduffie: { 
      name: "Kenyan McDuffie", 
      fullName: "Councilman Kenyan R. McDuffie (At-large)",
      logo: mcduffie_logo, 
      photo: home_mcduffie,
      typeOfStudy: "Voter Contact",
      description: "How an independent Ward 5 councilmember won a citywide at-large seat by building a winning coalition in DC's majority-Black wards.",
      to: "/solutions/kenyan-mcduffie-2022" 
    },
  };

  return (
    <div id='case-studies-section' className='w-full py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center gap-4 mb-12'>
          <div className='flex'>
            <img src={polygon} alt='nwf logo' className='w-[32px] h-[20px]' />
          </div>
          <h2 className='text-4xl font-poppins font-bold text-cyan-400 italic'>Case Studies</h2>
        </div>

        {/* Featured Case Studies: Large Mary on left, Zohran and Summer stacked on right */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          {/* Left Column - Large Mary Peltola Card */}
          <div className='lg:row-span-2'>
            <CaseStudyCard
              study={studies.mary}
              size='large'
            />
          </div>
          
          {/* Right Column - Zohran and Summer stacked */}
          <div className='space-y-8'>
            <CaseStudyCard
              study={studies.zohran}
              size='normal'
            />
            <CaseStudyCard
              study={studies.summer}
              size='normal'
            />
          </div>
        </div>
        
        {/* Additional Case Studies - Compact List Format */}
        <div className='border-t border-gray-600 pt-12'>
          <h3 className='text-2xl font-poppins font-bold text-white mb-8'>Additional Case Studies</h3>
          <div className='space-y-6'>
            <AdditionalCaseStudyItem study={studies.ventura} />
            <AdditionalCaseStudyItem study={studies.mcduffie} />
          </div>
        </div>
      </div>
    </div>
  );
};

type CaseStudyCardProps = {
  study: {
    name: string;
    fullName: string;
    logo: string;
    photo: string;
    typeOfStudy: string;
    description: string;
    to: string | null;
  };
  size: 'large' | 'normal';
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, size }) => {
  const isLarge = size === 'large';
  
  return (
    <Link to={study.to || '#'} className={`block relative rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ${!study.to ? 'cursor-default' : ''}`}>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img 
          src={study.photo} 
          alt={study.fullName}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
      </div>
      
      {/* Content Overlay */}
      <div className={`relative z-10 p-6 flex flex-col justify-between text-white ${isLarge ? 'h-[600px]' : 'h-[280px]'}`}>
        {/* Top Section - Logo */}
        <div className='flex justify-between items-start'>
          <img src={study.logo} alt={`${study.name} logo`} className='h-16 w-auto' />
          <div className='text-right'>
            <p className='text-cyan-400 font-lato text-sm font-semibold'>{study.typeOfStudy}</p>
          </div>
        </div>
        
        {/* Bottom Section - Text and CTA */}
        <div>
          <h3 className='text-2xl font-poppins font-bold mb-3'>{study.fullName}</h3>
          <p className='text-sm font-lato mb-4 leading-relaxed'>{study.description}</p>
          
          <div className='inline-flex items-center text-cyan-400 font-lato text-sm'>
            <span className='w-4 h-4 bg-cyan-400 rounded-full mr-2'></span>
            Read more
          </div>
        </div>
      </div>
    </Link>
  );
};

type AdditionalCaseStudyItemProps = {
  study: {
    name: string;
    fullName: string;
    logo: string;
    photo: string;
    typeOfStudy: string;
    description: string;
    to?: string;
  };
};

const AdditionalCaseStudyItem: React.FC<AdditionalCaseStudyItemProps> = ({ study }) => {
  return (
    <Link 
      to={study.to || '#'} 
      className={`block bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 ${!study.to ? 'cursor-default' : ''}`}
    >
      <div className='flex items-start gap-6'>
        {/* Logo - Fixed width container for consistent alignment */}
        <div className='flex-shrink-0 w-16 flex justify-center items-center'>
          <img src={study.logo} alt={`${study.name} logo`} className='h-12 w-auto max-w-16 object-contain' />
        </div>
        
        {/* Content */}
        <div className='flex-grow'>
          <div className='flex justify-between items-start mb-2'>
            <h4 className='text-xl font-poppins font-bold text-white'>{study.fullName}</h4>
            <span className='text-cyan-400 font-lato text-sm font-semibold'>{study.typeOfStudy}</span>
          </div>
          <p className='text-gray-300 font-lato text-sm leading-relaxed mb-3'>{study.description}</p>
          
          <div className='inline-flex items-center text-cyan-400 font-lato text-sm'>
            <span className='w-3 h-3 bg-cyan-400 rounded-full mr-2'></span>
            Read case study
          </div>
        </div>
      </div>
    </Link>
  );
};