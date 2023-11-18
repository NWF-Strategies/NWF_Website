import LandingCarousel from "../components/home/LandingCarousel";
import { Careers } from "../components";
import Form from "../components/Form";
// import { landing_carousel } from "../constants/home_constants";
// import {  } from '../components/Careers';

const Home = () => {
  return (
    <>
      {/* <div className="border border-blue-300"></div> */}
      <LandingCarousel />
      <Careers />
      <Form />
    </>
  );
};

export default Home;
