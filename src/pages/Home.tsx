import { Newsletter, ExampleButton, JoinUs } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import { useNavigate } from "react-router-dom";
import {
  homepage_stats,
  landing_thumbnails,
  /*logos2,*/
  landing_solutions,
} from "../constants/";
import { solutions_tags } from "../constants/";
import styles from "../style";
import whoweare from "../assets/whoweare.png";
import TwoPieceFormat from "../components/TwoPieceFormat";
import LandingThumbnail from "../components/LandingThumbnail";
import thumbnailImg1 from "../assets/home_carousel01.png";
/*import WeirdCarousel from "../components/FalseCarousel";
import { WeirdCarousel2 } from "../components/FalseCarousel2";*/
import { WeirdCarousel3 } from "../components/FalseCarousel3";
import SlideIn1 from '../components/HomePageIntroCardSlideIn';
import SlideIn from '../components/SlideInAnimation';
import FadeIn from '../components/FadeIn';

const Home = () => {
  const navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/`;
  //   navigate(path);
  // };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className='sm:hidden'>
        <LandingThumbnail
          imageSrc={thumbnailImg1}
          text={
            <p>
              <span className='text-secondary'>Innovating today</span> for the
              campaigns of tomorrow
            </p>
          }
          buttonLabel='The New Way Forward'
          navigateTo='/'
        />
      </div>
      <div className='hidden sm:block'>
        <GenericCarousel slides={landing_thumbnails} />
      </div>
      {/* <div className="text-white border border-white w-fit h-fit">
        <p>current screen size:</p>

        <p className="sm:hidden">XXS/XS (Mobile)</p>
        <p className="hidden sm:block md:hidden">SM (Small)</p>
        <p className="hidden md:block lg:hidden">MD (Medium)</p>
        <p className="hidden lg:block">LG (Large)</p>

      </div>

      { Text Section 1 */}
      <div className='h-fit sm:grid sm:grid-cols-2 gap-x-5 text-white items-center relative my-20 3xl:ml-[20%] 3xl:w-[60%]'>
        {/*<div className= "relative mx-5 z-10">
          <div className={`${styles.callout2} ${styles.paragraph3} hidden sm:block`}>
            At New Way Forward Strategies, we believe that Democracy starts with
            accessibility. From local elections to nationwide races, campaigns
            begin with the individual. We started the New Way Forward to deploy
            frontiering technologies and strategies, providing change-makers the
            tools to operate cutting-edge, winning campaigns.
          </div>
          <div className={`${styles.callout2} ${styles.paragraph3} hidden md:block`}>
            Coupled with our team’s combined 50 years in campaign management,
            NWF Strategies has won groundbreaking uphill battles, high-profile
            races, and facilitated landmark movements.
          </div>
        </div>*/}
        <SlideIn1 />
        <div className={`${styles.marginX} sm:mx-1`}>
          <div className='flex flex-col mx-[8vw] sm:mx-auto'>
            <SlideIn direction="right" className = {styles.heading4}>
              <p className={styles.heading4}>WHO WE ARE</p>
                <p className={`py-4 ${styles.heading3}`}>New Way Forward Strategies</p>
                <p className={styles.heading6}>
                Shifting politics <span className="text-greenBlue">one people-powered</span>  campaign at a time.
              </p>

              <img src={whoweare} className='max-w-[550px]' />
              <ExampleButton
                onClick={() => {
                  navigate("/about");
                  scrollToTop();
                }}
                children='About Us'
              />
            </SlideIn>
          </div>
        </div>
      </div>
              
      {/* Firm Statistics Section */}
      <div className='flex flex-col justify-center items-center my-8 bg-grey pb-12'>
        <div className='flex flex-col lg:flex-row items-center flex-nowrap overflow-hidden whitespace-nowrap'>
          {homepage_stats.map((content) => (
            <div className='items-center text-center py-10 mx-10'>
              <p>{content.counter}</p>
              <p className={`${styles.paragraph}`}>{content.text}</p>
            </div>
          ))}
        </div>
        {/*<div className='grid grid-cols-2 sm:grid-cols-4'>
          {logos2.map((logo, index) => (
            <div key={index} className='flex justify-center items-center my-2'>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className='h-[9vw] min-h-[75px] px-2'
              />
            </div>
          ))}
        </div>*/}
        <WeirdCarousel3 />
      </div>

      {/* Text Section 2 */}
      <FadeIn duration ={500} delay={500}>
        <div className={`${styles.marginX} h-fit flex flex-row text-white justify-center items-center my-20`} >
          {/* Non-Mobile, non-small screen */}
          <ul className='hidden md:block lg:mx-[80px] md:mx-[30px] sm:mx-[20px] w-fit'>
            {solutions_tags.map((item) => (
              <li key={item.title} className='flex flex-row justify-start items-center w-full transition-colors duration-400 hover:bg-amber-500 pb-3 pt-3 pr-24 lg:pr-22 xl:pr-20 groupQ cursor-should-hover'>
                <img src={item.img} className='scale-100 mr-10 flex-shrink-0' />
                <p className={`${styles.paragraph}  groupQ-hover:font-black `}>
                    <span className='line-clamp-2 2xl:line-clamp-1 relative transition-all duration-300 transform -translate-x-5 groupQ-hover:translate-x-0 whitespace-pre xl:whitespace-nowrap'>{item.title}</span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="white" 
                  viewBox="0 0 24 24" 
                  stroke="none" 
                  className={`hidden lg:block w-8 h-8 pl-2 ml-2 relative flex-shrink-0`}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m8.25 4.5 7.5 7.5-7.5 7.5" 
                  />
                </svg>
              </li>
            ))}
          </ul>
          <div className={`${styles.callout2} mission-card 3xl:ml-26 3xl:w-[42%]`}>
            <p className={styles.heading4}>SOLUTIONS</p>
            <p className={styles.heading3}>Our Services</p>
            <p className={styles.paragraph}>
              We combine traditional outreach strategy with innovative technology.
            </p>
            <ExampleButton
              onClick={() => {
                navigate("/solutions");
                scrollToTop();
              }}
              children='Explore Our Services'
            />
          </div>
        </div>
      </FadeIn>
      {/* Mobile */}
      <div className={`${styles.marginX} items-center sm:hidden`}>
        {landing_solutions.map((role, index) => (
          <TwoPieceFormat
            key={index}
            imageSrc={role.imageSrc}
            imageAlt={role.imageAlt}
            content={role.content}
          />
        ))}
      </div>

      {/* <GenericCarousel slides={candidate_case_studies} /> 
      
      */}
      <SlideIn direction = "right"> 
        <JoinUs /> 
      </SlideIn>
      <div className='mb-12'>
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
