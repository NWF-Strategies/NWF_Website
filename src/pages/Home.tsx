import { Newsletter, ExampleButton, JoinUs } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import { CaseStudyCarousel } from "../components/CaseStudyCarousel";
import { useNavigate } from "react-router-dom";
import {
  homepage_stats,
  mobile_homepage_stats,
  landing_thumbnails,
  logos2,
  landing_solutions,
} from "../constants/";
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
/*import FadeIn from '../components/FadeIn';
import { solutions_tags } from "../constants/";*/
import OurSolutions from '../components/OurSolutions';
import { candidate_case_studies } from "../constants/";

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

              <img src={whoweare} className='max-w-[72vw] sm:max-w-[265px] md:max-w-[330px] lg:max-w-[480px] xl:max-w-[550px]' />
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
      <div className='w-full flex flex-col justify-center items-center my-8 bg-grey pb-12'>
        <div className='invisible sm:visible h-0 sm:h-auto flex flex-col lg:flex-row items-center flex-nowrap overflow-hidden whitespace-nowrap'> {/*computer*/}
          {homepage_stats.map((content) => (
            <div className='items-center text-center py-10 mx-10'>
              <p>{content.counter}</p>
              <p className={`${styles.paragraph}`}>{content.text}</p>
            </div>
          ))}
        </div>
        <div className='visible sm:invisible h-auto sm:h-0 flex flex-col lg:flex-row items-center flex-nowrap overflow-hidden whitespace-nowrap'> {/*mobile*/}
          {mobile_homepage_stats.map((content) => (
            <div className='items-center text-center py-10 mx-10 font-poppins font-[1000] bold text-[#43BCCD] sm:leading-[5rem] md:text-[60px] sm:text-[45px] text-[50px] font-color:white'>
              <p>{content.number}</p>
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

        {/* our clients */}
        <div className="block sm:hidden w-full p-0 grid grid-cols-2">{/* mobile */}
          {logos2.map((logo, index) => (
              <div key={index} className='flex justify-center items-center my-2'>
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className='h-[9vw] min-h-[75px] px-1'
                />
              </div>
            ))}
        </div>
        <WeirdCarousel3 />

      </div>
      
      {/* Text Section 2 */}
      {/* Non-Mobile, non-small screen */}
      <div className="hidden sm:block">
        <br />
        <OurSolutions />
      </div>
      
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
      
      <div className=' w-full hidden sm:flex sm:flex-row justify-center items-center mb-32 mt-24 bg-grey'>
        <div className='m-10 pr-20 sm:pr-12 xl:pr-4 3xl:ml-[2.5%] 3xl:w-[64%] 3xl:mt-20 '>
          <CaseStudyCarousel slides={candidate_case_studies} />
        </div>
      </div>

      <SlideIn direction = "right"> 
        <JoinUs /> 
      </SlideIn>
      <div className='mb-12'>
        <Newsletter />
      </div>
      <br />
    </>
  );
};

export default Home;
