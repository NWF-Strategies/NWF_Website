import { Newsletter } from "../../components";
import React from "react";
import { Link } from "react-router-dom";
import OurSolutions from '../../components/OurSolutions';
import FeaturedCaseStudies, {studiesData} from "../../components/FeaturedCaseStudies"; 
import SlideIn from "../../components/SlideInAnimation";

const Solutions = () => {
  return (
    <div>
      <OurSolutions />
      <div className = 'pb-8'>
        <CaseStudiesSection />
      </div>    
      <br /><br />
      <Newsletter />
      <br /><br /><br /><br />
    </div>
  );
};

export default Solutions;

const CaseStudiesSection: React.FC = () => { 
  const { ventura, mcduffie, kansas, alaska, bush } = studiesData;
  return (
    <>
      {/* Featured Case Studies with gradient */}
      <div id='case-studies-section' className='w-full py-16 singlepillorangegradient'>
        <div className='max-w-7xl mx-auto px-6'>
          <FeaturedCaseStudies />
        </div>
      </div>
      
      {/* Additional Case Studies without gradient */}
      <div className='w-full py-16 bg-black'>
        <div className='max-w-7xl mx-auto px-6'>
          <div id = "additional-case-studies" className='border-t border-gray-600 pt-28'>
            <h3 className='text-2xl font-poppins font-bold text-white mb-8'>Additional Case Studies</h3>
            <div className='space-y-6'>
              <AdditionalCaseStudyItem study={kansas} />
              <AdditionalCaseStudyItem study={alaska} />
              <AdditionalCaseStudyItem study={bush} />
              <AdditionalCaseStudyItem study={ventura} />
              <AdditionalCaseStudyItem study={mcduffie} />
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </>
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
    <SlideIn direction="bottom" duration={200} delay={150}>
      <Link to={study.to || '#'} className={`block bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 ${!study.to ? 'cursor-default' : ''}`}>
        <div className='flex items-start gap-6'>
          <div className='flex-shrink-0 w-16 flex justify-center items-center'>
            <img src={study.logo} alt={`${study.name} logo`} className='h-12 w-auto max-w-16 object-contain' />
          </div>
          <div className='flex-grow'>
            <div className='flex justify-between items-start mb-2'>
              <h4 className='text-xl font-poppins font-bold text-white'>{study.fullName}</h4>
              <span className='text-cyan-400 font-lato text-sm font-semibold'>{study.typeOfStudy}</span>
            </div>
            <p className='text-gray-300 font-lato text-sm leading-relaxed mb-3'>{study.description}</p>
            <div className='inline-flex items-center text-cyan-400 font-lato text-sm'>
              <span className='font-bold pb-[0.9px] rounded-full mr-1'>&gt;</span>Read case study
            </div>
          </div>
        </div>
      </Link>
    </SlideIn>
  );
};