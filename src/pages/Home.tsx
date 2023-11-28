import { Newsletter, Button, JoinUs } from "../components";
import { GenericCarousel } from "../components/GenericCarousel";
import { homepage_stats, candidate_case_studies, landing_thumbnails, logos2 } from "../constants/div_constants"
import { solutions_tags } from "../constants/"
import styles from "../style";
import whoweare from "../assets/whoweare.png";


const Home = () => {
  return (
    <>
      <GenericCarousel slides={landing_thumbnails} />
      
      {/* Text Section 1 */}
      <div className='h-fit grid grid-cols-2 gap-x-5 text-white items-center relative my-20'>
        <div className="mx-5 z-10">
          <div className={`${styles.callout} ${styles.paragraph}`}>
            At New Way Forward Strategies, we believe that Democracy starts with accessibility. From local elections to nationwide races, campaigns begin with the individual. We started the New Way Forward to deploy frontiering technologies and strategies, providing change-makers the tools to operate cutting-edge, winning campaigns.
          </div>
          <div className={`${styles.callout} ${styles.paragraph}`}>
            Coupled with our team’s combined 50 years in campaign management, NWF Strategies has won groundbreaking uphill battles, high-profile races, and facilitated landmark movements.
          </div>
        </div>
        <div>
          <p className={styles.heading4}>WHO WE ARE</p>
          <p className={styles.heading3}>New Way Forward Strategies</p>
          <p className={styles.paragraph}>
            Changing politics one people-powered campaign at a time.
          </p>
          <img src={whoweare} />
          <Button label="About Us" />
        </div>
      </div>

      {/* Firm Statistics Section */}
      <div className='flex flex-col justify-center items-center my-8'>
        <div className="flex flex-col sm:flex-row items-center">
          {homepage_stats.map((content, index) => (
            <div className='items-center text-center py-10 mx-10'>
              <p className={`${styles.heading5}`}>{content.number}</p>
              <p className={`${styles.paragraph}`}>{content.text}</p>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4'>
          {logos2.map((logo, index) => (
            <div key={index} className="flex justify-center items-center my-2">
              <img src={logo} alt={`Logo ${index + 1}`} className='h-[9vw] min-h-[75px] px-2' />
            </div>
          ))}
        </div>
      </div>

      {/* Text Section 2 */}
      <div className='h-fit flex flex-row text-white justify-center items-center mx-auto my-20'>
        <ul className='lg:mx-[80px] md:mx-[30px] sm:mx-[20px] w-fit'>
          {solutions_tags.map((item) => (
            <li className='flex flex-row justify-start items-center w-full'>
              <img src={item.img} className='scale-100 mr-8' />
              <p
                className={`${styles.paragraph}`}
              >
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        <div className={`${styles.callout}`}>
          <p className={styles.heading4}>SOLUTIONS</p>
          <p className={styles.heading3}>Our Services</p>
          <p className={styles.paragraph}>
            We combine traditional outreach strategy with innovative technology.
          </p>
          <Button label="Explore Our Services"/>
        </div>
      </div>
      <GenericCarousel slides={candidate_case_studies} />

      <JoinUs />
      <Newsletter />
    </>
  );
};

export default Home;
