import { Newsletter, ExampleButton, JoinUs } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import { useNavigate } from "react-router-dom";
import {
  homepage_stats,
  landing_thumbnails,
  logos2,
  landing_solutions,
} from "../constants/";
import { solutions_tags } from "../constants/";
import styles from "../style";
import whoweare from "../assets/whoweare.png";
import TwoPieceFormat from "../components/TwoPieceFormat";
import LandingThumbnail from "../components/LandingThumbnail";
import thumbnailImg1 from "../assets/home_carousel01.png";

const Home = () => {
  const navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/`;
  //   navigate(path);
  // };
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
          button_label="The New Way Forward"
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

      {/* Text Section 1 */}
      <div className='h-fit sm:grid sm:grid-cols-2 gap-x-5 text-white items-center relative my-20'>
        <div className='mx-5 z-10 hidden sm:block'>
          <div className={`${styles.callout} ${styles.paragraph}`}>
            At New Way Forward Strategies, we believe that Democracy starts with
            accessibility. From local elections to nationwide races, campaigns
            begin with the individual. We started the New Way Forward to deploy
            frontiering technologies and strategies, providing change-makers the
            tools to operate cutting-edge, winning campaigns.
          </div>
          <div
            className={`${styles.callout} ${styles.paragraph} hidden md:block`}
          >
            Coupled with our team’s combined 50 years in campaign management,
            NWF Strategies has won groundbreaking uphill battles, high-profile
            races, and facilitated landmark movements.
          </div>
        </div>
        <div className={`${styles.marginX} sm:mx-1`}>
          <div className='flex flex-col mx-[8vw] sm:mx-auto'>
            <p className={styles.heading4}>WHO WE ARE</p>
            <p className={styles.heading3}>New Way Forward Strategies</p>
            <p className={styles.paragraph}>
              Changing politics one people-powered campaign at a time.
            </p>

            <img src={whoweare} className='max-w-[550px]' />
            <ExampleButton
              onClick={() => navigate("/about")}
              children='About Us'
            />
          </div>
        </div>
      </div>

      {/* Firm Statistics Section */}
      <div className='flex flex-col justify-center items-center my-8'>
        <div className='flex flex-col sm:flex-row items-center'>
          {homepage_stats.map((content) => (
            <div className='items-center text-center py-10 mx-10'>
              <p className={`${styles.heading5}`}>{content.number}</p>
              <p className={`${styles.paragraph}`}>{content.text}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4'>
          {logos2.map((logo, index) => (
            <div key={index} className='flex justify-center items-center my-2'>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className='h-[9vw] min-h-[75px] px-2'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Section 2 */}
      <div
        className={`${styles.marginX} h-fit flex flex-row text-white justify-center items-center my-20`}
      >
        {/* Non-Mobile */}
        <ul className='hidden sm:block lg:mx-[80px] md:mx-[30px] sm:mx-[20px] w-fit'>
          {solutions_tags.map((item) => (
            <li className='flex flex-row justify-start items-center w-full'>
              <img src={item.img} className='scale-100 mr-8' />
              <p className={`${styles.paragraph}`}>{item.title}</p>
            </li>
          ))}
        </ul>
        <div className={`${styles.callout} mission-card`}>
          <p className={styles.heading4}>SOLUTIONS</p>
          <p className={styles.heading3}>Our Services</p>
          <p className={styles.paragraph}>
            We combine traditional outreach strategy with innovative technology.
          </p>
          <ExampleButton
            onClick={() => navigate("/solutions")}
            children='Explore Our Services'
          />
        </div>
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
      
      {/* <GenericCarousel slides={candidate_case_studies} /> */}

      <JoinUs />
      <div className='mb-12'>
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
