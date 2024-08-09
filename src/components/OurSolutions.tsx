import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ExampleButton } from "../components";
import { interactive_solutions_tags } from "../constants/";
import styles from "../style";
import FadeIn from '../components/FadeIn';

// Define a type for a solution item
type SolutionItem = {
  title: string;
  img: string;
  blurb: string;
};

const OurSolutions: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/solutions");
    window.scrollTo(0, 0);
  };

{/* Non-Mobile, non-small screen */}
  return (
    <FadeIn duration={500} delay={200}>
      <div className={'h-fit flex flex-row text-white justify-center items-center my-18 ml-6 px-0 w-[91%] xl:w-[100%] xl:mx-0 3xl:ml-[12%] 3xl:w-[74%] 3xl:mt-20'}>
        <ul className='hidden md:block lg:mx-[40px] md:mx-[30px] sm:mx-[20px] w-fit'>
          {interactive_solutions_tags.map((item: SolutionItem, index: number) => (
            <li
              key={item.title}
              className='flex flex-row justify-start items-center w-full transition-colors duration-400 hover:bg-amber-500 pb-3 pt-3 pr-24 lg:pr-22 groupQ cursor-should-hover'
              onMouseEnter={() => setHoveredSolution(index)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <img src={item.img} alt={item.title} className='scale-100 mr-10 flex-shrink-0' />
              <p className={`${styles.paragraph5} groupQ-hover:font-black`}>
                <span className='line-clamp-2 2xl:line-clamp-1 relative transition-all duration-300 transform -translate-x-5 groupQ-hover:translate-x-0 whitespace-pre 2xl:whitespace-nowrap'>
                  {item.title}
                </span>
                <span className='hidden lg:block absolute underline groupQ-hover:decoration-white/100 underline-offset-0 decoration-dotted groupQ-hover:decoration-solid decoration-1 
                decoration-white/25 text-transparent text-center transform -translate-x-5 mt-[-18px] xl:mt-[-20px] 2xl:mt-[-23px] 3xl:mt-[-25px] groupQ-hover:translate-x-0 transition-all duration-600 ease-in-out'>
                  -/
                </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="none"
                className={`hidden w-0`}
                /*className={`hidden lg:block w-8 h-8 pl-2 ml-2 relative flex-shrink-0`}*/
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
        <div className={`${styles.callout2} mission-card ml-0 w-[50%] 3xl:ml-26 3xl:w-[42%] transition-opacity duration-200 ease-in-out`}>
          <p className={`${styles.heading4} pb-3`}>SOLUTIONS</p>
          {hoveredSolution === null ? (
            <p className={`${styles.heading3} pb-3`}>Our Services</p>
          ) : null}
          <p className={`  ${hoveredSolution !== null ? styles.paragraph4 : `${styles.paragraph} pb-1`}`}>
            {hoveredSolution !== null && hoveredSolution < interactive_solutions_tags.length
              ? interactive_solutions_tags[hoveredSolution].blurb
              : "We combine traditional outreach strategy with innovative technology."}
          </p>
          {hoveredSolution === null ? (
          <ExampleButton onClick={handleExplore}>
            Explore Our Services
          </ExampleButton> ) : null}
        </div>
      </div>
    </FadeIn>
  );
};

export default OurSolutions;