import CandidateStudies from "../components/home/CandidateStudies";
import { Newsletter } from "../components";
import Form from "../components/Form";
import LandingCarousel from "../components/home/LandingCarousel";
import FirmStatistics from "../components/home/FirmStatistics";
import JoinUs from "../components/JoinUs";
import { solutions_tags, solutions_notes } from "../constants";

// import { landing_carousel } from "../constants/home_constants";
// import {  } from '../components/Careers';

const Home = () => {
  return (
    <>
      {/* <div className="border border-blue-300"></div> */}
      <LandingCarousel />
      <div className='h-fit border border-white text-white'>
        <ul className='lg:ml-[100px] md:ml-[50px] sm:ml-[40px] mt-10'>
          {solutions_tags.map((item) => (
            <li className='flex flex-row justify-start items-center w-full'>
              <img src={item.img} className='scale-60' />
              <p
                className={`text-white font-poppins sm:text-[22px] font-normal leading-normal text-center ml-5`}
              >
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <FirmStatistics />
      <div className='h-[150px] border border-white text-white'>
        TESTING
      </div>
      <CandidateStudies />
      <JoinUs />
      <Newsletter />
    </>
  );
};

export default Home;
