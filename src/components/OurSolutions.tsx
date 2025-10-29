import React from 'react';
import { useNavigate } from "react-router-dom";
import strategy from "../assets/strategy.png";
import research_dev from "../assets/research_dev.png";
import software_data from "../assets/software_data.png";
import operation from "../assets/operation.png";
import ellipse_gradient from "../assets/ellipse_gradient.svg";
import ellipse_dots from "../assets/ellipse_dots.svg";
import FadeIn from '../components/FadeIn';
import OrangeButton from './OrangeButton';

type ServiceItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};
const ServiceItem: React.FC<ServiceItemProps> = ({ imageSrc, title, description }) => {
  const navigate = useNavigate();

  return (
    <FadeIn delay={300}>
      <div className='flex flex-col items-start text-left mb-16 mx-1 xl:mx-2'>
        {/* Illustration */}
        <div className='w-full mb-8 flex justify-start items-center h-40'>
          <img src={imageSrc} alt={title} className='max-w-full max-h-full object-contain' />
        </div>
        <div className="h-[330px] md:h-[280px] lg:h-[385px] xl:h-[400px] bg-[#3f3d54] backdrop-blur-sm p-4 "> {/*bg-[rgba(24,24,24,0.80)]*/}
          {/* Title */}
          <h3 className='text-[1.3rem] font-poppins tracking-normal font-[1000] [-webkit-text-stroke:0.2px_#26C6DA] text-cyan-400 mb-1 text-left'>
            {title}
          </h3>
          <div className='py-3 pr-0 xl:pr-1'>
            <p className='text-[1.05rem] font-lato text-white leading-normal mb-0 text-left'>
              {description}
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/solutions");
              window.scrollTo(0, 0);
            }}
            className="absolute bottom-5 right-5 group w-10 h-10 rounded-full border-2 border-[#26C6DA] flex items-center justify-center transition-colors hover:bg-[#26C6DA]"
          >
            <svg
              className="w-4 h-4 text-[#26C6DA] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          </div>
      </div>
    </FadeIn>
  );
};

const SolutionsGrid: React.FC = () => {
  const solutionsData = [
    {
      imageSrc: strategy,
      title: "Fundraising",
      //description: "Great campaigns begin at the drawing board. We provide end-to-end support to formulate efficient, effective strategies and timelines to support campaigns from launch to election."
      description: "Turn sub-$100k quarters into $1 million wins with a high-speed fundraising system. We build and execute aggressive finance plans, revamp digital strategy, and tap proprietary donor networks to fuel your campaign fast."
    },
    {
      imageSrc: research_dev,
      title: "Research", 
      //description: "Research hones effective campaign messaging and widespread voter outreach. From donor and opposition research to targeted voter universes, compile rigorous documentation to inform your campaigning decisions."
      description: "Win the campaign before it begins with a data-driven strategy. We craft your core messaging, track your opponent’s moves, and maintain live research databases so you’re always equipped to respond with precision and confidence."
    },
    {
      imageSrc: software_data,
      title: "Data",
      //description: "Deploy cutting-edge machine learning models to predict voter behavior and leverage comprehensive dashboards to manage day-to-day campaign operations."
      description: "Our dashboards visualize key metrics—from field results to supporter IDs—filterable by district, county, or precinct. Powered by proprietary ML models, we decode voter sentiment and behavior to boost conversion rates where it matters."
    },
    {
      imageSrc: operation,
      title: "Voter Contact",
      //description: "Mobilize hundreds of volunteers to canvass and contact millions of voters. Execute and deploy voter contact strategies effortlessly."
      description: "We deploy a professional field program capable of 300,000 calls per day. You get a live dashboard to track KPIs and progress in real time, with full transparency as we deliver your message and identify supporters."
    }
  ];
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center mb-8 mt-12'>
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
  return (
    <FadeIn duration={500} delay={200}>
      <div className='bg-[#F7F7F7] pt-24 pb-[40px] lg:pb-56 relative min-h-[105vh] overflow-visible'>
        <div className='absolute bottom-0 left-0 right-0 h-60 z-0'>
          <div className='relative invisible lg:visible flex justify-center items-end h-full pb-6 mt-4 z-10'>
            <img src={ellipse_dots} alt="Dot Pattern" className='absolute w-full max-w-none opacity-80 px-2' />
          </div>
          <div className="absolute hidden lg:block bottom-0 left-0 right-0 h-full overflow-hidden z-0">
            <img
              src={ellipse_gradient}
              alt="ellipse pattern"
              className="w-full max-w-none object-cover
                        [mask-image:linear-gradient(to_top,black_90%,transparent_100%)]
                        [mask-repeat:no-repeat] [mask-size:100%_100%]"
            />

          </div>
        </div>
        <div className='max-w-6xl mx-auto px-6 relative z-10'>
          <div className='mb-8 text-left'>
            <h1 className='text-4xl lg:text-[3.5rem] tracking-tighter font-poppins font-normal text-black mb-3 text-left'>Our Services</h1>
            <p className='text-2xl font-lato [-webkit-text-stroke:0.1px_black]  text-black my-4 text-left'>
              We combine traditional outreach strategy with innovative technology.
            </p>
            <OrangeButton label="Explore our Case Studies" to="/solutions" />
            <br />
          </div>
          <SolutionsGrid />
        </div>
      </div>
    </FadeIn>
  );
};

export default OurSolutions;