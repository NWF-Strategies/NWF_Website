import { Newsletter, JoinUs, NewAboutSection, TrustedLeadersSection } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import {
  landing_thumbnails,
  landing_solutions,
} from "../constants/";
import styles from "../style";
import TwoPieceFormat from "../components/TwoPieceFormat";
import LandingThumbnail from "../components/LandingThumbnail";
import thumbnailImg1 from "../assets/home_carousel01.png";
import OurSolutions from '../components/OurSolutions';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
{/*import { candidate_case_studies } from "../constants/";
import { CaseStudyCarousel } from "../components/CaseStudyCarousel";*/}

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
      <NewAboutSection />
      <TrustedLeadersSection showMetrics={true} />
      {/* Text Section 2 */}
      {/* Non-Mobile, non-small screen */}
      <div className="hidden sm:block">
        <OurSolutions />
      </div>
      
      {/* Mobile */}  
      <div className={`${styles.marginX} mb-8 items-center sm:hidden`}>
        {landing_solutions.map((role, index) => (
          <TwoPieceFormat
            key={index}
            imageSrc={role.imageSrc}
            imageAlt={role.imageAlt}
            content={role.content}
          />
        ))}
      </div>
      
      {/*<div className=' w-full hidden sm:flex sm:flex-row justify-center items-center mb-32 mt-24 bg-grey'>
        <div className='m-10 pr-20 sm:pr-12 xl:pr-4 3xl:ml-[2.5%] 3xl:w-[64%] 3xl:mt-20 '>
          <CaseStudyCarousel slides={candidate_case_studies} />
        </div>
      </div>*/}
      <div id='case-studies-section' className='w-full py-24 singlepillorangegradient'>
        <div className='max-w-7xl mx-auto px-6'>
          <FeaturedCaseStudies />
        </div>
      </div>
      <JoinUs /> 
      <br /><br /><br /><br /><br /><br />
      <Newsletter />
      <div className='mb-12' />
      <br />
    </>
  );
};

export default Home;
