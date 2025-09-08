import { Newsletter, JoinUs, NewAboutSection, TrustedLeadersSection } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import { CaseStudyCarousel } from "../components/CaseStudyCarousel";
import {
  landing_thumbnails,
  landing_solutions,
} from "../constants/";
import styles from "../style";
import TwoPieceFormat from "../components/TwoPieceFormat";
import LandingThumbnail from "../components/LandingThumbnail";
import thumbnailImg1 from "../assets/home_carousel01.png";
import SlideIn from '../components/SlideInAnimation';
import OurSolutions from '../components/OurSolutions';
import { candidate_case_studies } from "../constants/";

const Home = () => {

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
          secondaryButton='The New Way Forward'
          secondaryNavigate='/'
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

            {/* New About Section */}
      <NewAboutSection />

      {/* Combined Metrics and Trusted Leaders Section */}
      <TrustedLeadersSection showMetrics={true} />
      
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
