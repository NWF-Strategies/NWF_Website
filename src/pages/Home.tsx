import CandidateStudies from "../components/home/CandidateStudies";
import { Careers } from "../components";
import Form from "../components/Form";
import LandingCarousel from "../components/home/LandingCarousel";
import FirmStatistics from "../components/home/FirmStatistics";
// import { landing_carousel } from "../constants/home_constants";
// import {  } from '../components/Careers';

const Home = () => {
  return (
    <>
      {/* <div className="border border-blue-300"></div> */}
      <LandingCarousel />
      <FirmStatistics />
      <CandidateStudies />
      <Careers />
      <Form />
    </>
  );
};

export default Home;
