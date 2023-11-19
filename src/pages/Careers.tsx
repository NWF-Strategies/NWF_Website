import React from "react";
import { Navbar, Footer, Newsletter } from "../components";
import styles from "../style";
import careers_img from "../assets/careers_img.png";

import TwoPieceFormat from "../components/TwoPieceFormat";
import Button from "../components/Button";

import {roles} from "../constants/div_constants";

import careers_category01 from "../assets/careers_category01.png"
import careers_category02 from "../assets/careers_category02.png"
import careers_category03 from "../assets/careers_category03.png"

const Career = () => {
  const career_categories = [
    { 
      imgSrc: careers_category01,
      title: "Operations",
    },
    { 
      imgSrc: careers_category02,
      title: "Research",
    },
    { 
      imgSrc: careers_category03,
      title: "Data",
    },
  ];
  return (
    <div>
      <div className='relative lg:h-[100vh] h-[450px] py-[100px] blue__black__gradient flex flex-col items-center z-10'>
        <img
          src={careers_img}
          alt='people together'
          className='absolute left-0 overflow-hidden -z-10 lg:w-100 md:w-50 md:top-0 sm:top-0'
        />
        <div className='w-[100%] flex flex-col justify-center items-left lg:ml-[30%] md:ml-[30%] sm:ml-[30%] ml-[30%] z-10 lg:top-[150px] md:top-[150px] sm:top-[150px]'>
          <div>
            <h1
              className={`text-[#43BCCD] font-poppins lg:text-[100px] md:text-[50px] sm:text-[40px] font-bold leading-normal text-left `}
>
              Careers
            </h1>
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <p className={styles.heading4}>CORE STAFF</p>
        <p className={styles.heading3}>Officer Departments</p>
        <p className={styles.paragraph}>
          Power the New Way Forward of campaigning with us. From software engineers and researchers to campaign managers and canvassers, we have a team for you.
          <br></br><br></br>
          Please attach your resume and any relevant links in your email to info@nwfstrategies.com. 
        </p>
        <Button label="Apply via Email" />
      </div>
      <div className='teal__black__gradient pb-10 justify-center'>
        <div className='h-fit py-10 px-10 mb-10'>
          <div className="items-center">
            {roles.map((role, index) => (
              <TwoPieceFormat
                key={index}
                imageSrc={role.imageSrc}
                imageAlt={role.imageAlt}
                content={role.content}
              />
            ))}
            <div className="flex justify-center">
            <Button label="See More Job Listings" />
            </div>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <p className={styles.heading4}>INTERN</p>
          <p className={styles.heading3}>Internship Program</p>
          <div className={styles.paragraph}>
            <p>Interns play a vital role in the success of our campaigns. This internship is a great opportunity for students to gain hands-on experience in local and national politics. Interns will develop skills in research, communication, and leadership.</p>
            <br></br>
            Qualifications:
            <ul className="list-disc">
              <li>Currently enrolled in high school or above</li>
              <li>Strong verbal communication skills in English</li>
              <li>Natural intellectual curiosity and genuine passion for continuous learning</li>
              <li>Excellent problem-solving, analytical, and critical thinking skills</li>
              <li>Passionate and willing to work with multiple deadlines and teams</li>
              <li>Can commit to working 10-15 hours per week</li>
            </ul>
            <p className="mb-5"><br></br>
          Although this internship is unpaid, New Way Forward Strategies has a strong performance-based bonus program. Eligibility for the bonuses is based on high standards and requires outstanding work.</p>
          </div>
          <div className="flex justify-center">
            <Button label="Interested? Visit us on Indeed" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          {career_categories.map((content, index) => (
            <div className='items-center text-center py-10 mx-10'>
              <img src={content.imgSrc}/>
              <p className={`${styles.heading3}`}>{content.title}</p>
          <div className="flex justify-center">
              <Button label="Apply Now" />
              </div>
            </div>
          ))}
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Career;
