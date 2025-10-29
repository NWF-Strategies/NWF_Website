import styles from "../style";
import careers_img from "../assets/careers_background_sharpened_dark.png";
import TwoPieceVerticalFormat from "../components/TwoPieceVerticalFormat";
import new_logo from "../assets/orange_logo.svg"
import { roles } from "../constants/";
import OrangeButton from "../components/OrangeButton";
import SlideIn from "../components/SlideInAnimation";
import FadeIn from "../components/FadeIn";

const Career = () => {
  return (
    <div className="doublepillgradient w-full">
        <div className='relative min-h-screen h-auto w-full flex items-start justify-center flex-col z-10 mb-[300px]'>
          <img src={careers_img} alt = 'Background img' className = 'absolute h-full object-cover top-0 w-full brightness-150'/>  
          <FadeIn delay={0} duration={1200}>   
            <SlideIn direction="left" delay={100} duration={700}>
              <div className="relative ml-24 mt-56 py-12 px-12 z-10 w-[810px] bg-[rgba(24,24,24,0.75)] backdrop-blur-[2px] p-4 rounded-[15px] flex flex-col justify-center">
                <img src={new_logo} alt = "nwf" className = "w-[160px] md:w-[220px] lg:w-[260px] h-[40px] outline-none focus:ring-0 focus:outline-none"/>
                <h3 className="text-[4rem] font-lato tracking-normal font-normal text-white text-left">
                  Careers
                </h3>
                <div className="pb-3 pr-0 xl:pr-1">
                  <p className="text-[1.63rem] font-lato text-white leading-normal mb-0 text-left">
                    Power the New Way Forward of campaigning with us. From software engineers and researchers
                    to campaign managers and canvassers, we have a team for you.
                  </p>
                </div>
                <OrangeButton label = "See Jobs" textcolor = "white" to = "https://www.indeed.com/cmp/Nwf-Strategies/jobs" />
              </div>
            </SlideIn>
          </FadeIn>
        </div>
      <div className='flex justify-center w-full items-center relative mt-[-190px] '>
        <div className='flex flex-col items-center pb-10 justify-center max-w-7xl w-full'>
          <div className='h-fit pb-10 px-10 mb-10 w-full'>
            <div className="relative w-full bg-gray-700 bg-opacity-40 backdrop-blur-[2px] px-6 pt-4 pb-14 rounded-[15px]">
              <div className="font-poppins flex items-center justify-center">
                <h1 className="text-cyan-400 text-[3rem] font-semibold tracking-wide">Teams</h1>
              </div>
              <FadeIn delay={300}>
              <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-4'>
                {roles.map((role, index) => (
                  <TwoPieceVerticalFormat
                    key={index}
                    imageSrc={role.imageSrc}
                    imageAlt={role.imageAlt}
                    content={role.content}   
                  />
                ))}
              </div>
              </FadeIn>
              <br />
              <div className='flex justify-center items-center my-0'>
                <a href="mailto:info@nwfstrategies.com" target="_blank" rel="noopener noreferrer">
                <OrangeButton label = "Apply via email" color="#43BCCD" textcolor = "#43BCCD" to ="#" />
                </a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="pb-6 px-16 mr-0">
            <p className={styles.heading4}>INTERN</p>
            <p className={styles.heading3}>Internship Program</p>
            <div className={styles.paragraph}>
              <p className="xl:text-xl pt-2">
                Interns play a vital role in the success of our campaigns. This
                internship is a great opportunity for students to gain hands-on
                experience in local and national politics. Interns will develop
                skills in research, communication, and leadership.
              </p>

              <details className="mt-4">
                <summary className="cursor-pointer cursor-should-hover text-white font-semibold">
                  Read More
                </summary>
                <SlideIn direction="top">
                  <div className="mt-2">
                    <p className="underline">Qualifications:</p>
                    <ul className="list-disc mx-5 my-2">
                      <li>Currently enrolled in high school or above</li>
                      <li>Strong verbal communication skills in English</li>
                      <li>
                        Natural intellectual curiosity and genuine passion for
                        continuous learning
                      </li>
                      <li>
                        Excellent problem-solving, analytical, and critical thinking
                        skills
                      </li>
                      <li>
                        Passionate and willing to work with multiple deadlines and
                        teams
                      </li>
                      <li>Can commit to working 10-15 hours per week</li>
                    </ul>
                    <p className="mb-5">
                      Although this internship is unpaid, New Way Forward Strategies
                      has a strong performance-based bonus program. Eligibility for
                      the bonuses is based on high standards and requires outstanding
                      work.
                    </p>
                  </div>
                </SlideIn>
              </details>
            <div className='flex justify-end mr-[-40px]'>
              <OrangeButton to = "https://www.indeed.com/cmp/Nwf-Strategies" color = "#43BCCD" textcolor="#43BCCD" label='Interested? Visit us on Indeed'/>
            </div>
            </div>
            <br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
