import { useNavigate } from "react-router-dom";

import { Newsletter, ExampleButton } from "../components";
import styles from "../style";
import careers_img from "../assets/careers_img.png";
import TwoPieceFormat from "../components/TwoPieceFormat";

import { roles, career_categories } from "../constants/";

const Career = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='relative h-[500px] blue__black__gradient flex flex-col justify-center z-10'>
        <img
          src={careers_img}
          alt='people together'
          className='absolute bottom-0 overflow-hidden z-10 lg:w-fit w-[30rem]'
        />
        <div className='w-[100%] flex flex-col justify-center items-left  md:ml-[30%] sm:ml-[30%] ml-[30%] z-10 lg:top-[150px] md:top-[150px] sm:top-[150px]'>
          <div>
            <h1
              className={`text-[#43BCCD] font-poppins lg:text-[100px] md:text-[50px] text-[40px] font-bold leading-normal text-left `}
            >
              Careers
            </h1>
          </div>
        </div>
      </div>

      <div className='2xl:ml-[25%] 2xl:w-[50%]'>
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <p className={styles.heading4}>CORE STAFF</p>
          <p className={styles.heading3}>Officer Departments</p>
          <p className={styles.paragraph}>
            Lead the New Way Forward of campaigning with us. From software
            engineers and researchers to campaign managers and canvassers, we
            have a team for you.
            <br></br>
            <br></br>
            Please attach your resume and any relevant links in your email to
            info@nwfstrategies.com.
          </p>
          <ExampleButton
            onClick={() => navigate("/contactus")}
            children='Apply Via Email'
          />
        </div>

        <div className='pb-10 justify-center'>
          <div className='h-fit py-10 px-10 mb-10'>
            <div className='items-center'>
              {roles.map((role, index) => (
                <TwoPieceFormat
                  key={index}
                  imageSrc={role.imageSrc}
                  imageAlt={role.imageAlt}
                  content={role.content}
                />
              ))}
              <div className='flex justify-center'>
                <ExampleButton
                  onClick={() =>
                    window.open(
                      "https://www.indeed.com/cmp/Nwf-Strategies/jobs"
                    )
                  }
                  children='See More Job Listings'
                />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <p className={styles.heading4}>INTERN</p>
            <p className={styles.heading3}>Internship Program</p>
            <div className={styles.paragraph}>
              <p>
                Interns play a vital role in the success of our campaigns. This
                internship is a great opportunity for students to gain hands-on
                experience in local and national politics. Interns will develop
                skills in research, communication, and leadership.
              </p>
              <br></br>
              Qualifications:
              <ul className='list-disc mx-5'>
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
              <p className='mb-5'>
                <br></br>
                Although this internship is unpaid, New Way Forward Strategies
                has a strong performance-based bonus program. Eligibility for
                the bonuses is based on high standards and requires outstanding
                work.
              </p>
            </div>
            <div className='flex justify-center'>
              <ExampleButton
                onClick={() =>
                  window.open("https://www.indeed.com/cmp/Nwf-Strategies")
                }
                children='Interested? Visit us on Indeed'
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center mb-10  xl:ml-20 2xl:ml-12'>
            {career_categories.map((content) => (
              <div className='items-center text-center py-10 mx-10'>
                <img src={content.imgSrc} />
                <p className={`${styles.heading3}`}>{content.title}</p>
                <div className='flex justify-center'>
                  <ExampleButton
                    onClick={() =>
                      window.open(
                        "https://www.indeed.com/cmp/Nwf-Strategies/jobs"
                      )
                    }
                    children='Apply Now'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="2xl:ml-[15%] 2xl:w-[70%] xl:w-[95%] xl:ml-10">
        <Newsletter />
      </div>
    </div>
  );
};

export default Career;
