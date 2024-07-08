import styles from "../style";
import { useNavigate } from "react-router-dom";

import home_carousel01 from "../assets/home_carousel01.png";
import home_carousel02 from "../assets/home_carousel02.png";
/*import home_carousel03 from "../assets/home_carousel03.png";*/
import home_carousel03b from "../assets/home_carousel03b.png";

import { ExampleButton } from "../components";

export const career_text = (
  <>
    <p className={styles.heading4}>CAREER</p>
    <p className={styles.heading3}>Join Us</p>
    <p className={styles.paragraph}>
      Power the New Way Forward of campaigning with us. From software engineers
      and researchers to campaign managers and canvassers, we have a team for
      you.
    </p>
  </>
);

export const JoinUsContent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Navigate to "/solutions" path
    navigate("/careers");
  }

  return (
    <div className="2xl:w-[66%] 2xl:ml-[5%]">
      <p className={styles.heading4}>CAREER</p>
      <p className={styles.heading3}>Join Us</p>
      <p className={styles.paragraph}>
        Power the New Way Forward of campaigning with us. From software engineers
        and researchers to campaign managers and canvassers, we have a team for
        you.
      </p>
      <ExampleButton
        onClick={() => handleClick()}
        children='Careers'
      />
    </div>
  );
};


export const landing_carousel = [
  home_carousel01,
  home_carousel02,
  home_carousel03b,
  //home_carousel03,
];

export const peltola_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Mary Peltola</p>
    <p className={styles.paragraph}>
      How fish and freedom flipped a 50-year Republican stronghold against
      former governor Sarah Palin to seat the first Alaskan Native in Congress.
    </p>
    {/* <div className="w-50">
      <img src={peltola_logo} className='px-20 ' />
    </div> */}
  </>
);

export const ventura_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Rachel Ventura</p>
    <p className={styles.paragraph}>
      How a former school board member beat out an incumbent while outraised
      18-to-1 to win the Illinois State Senate seat.
    </p>
    {/* <div className="w-50">
      <img src={ventura_logo} className='px-20' />
    </div> */}
  </>
);
export const kumar_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Rishi Kumar</p>
    <p className={styles.paragraph}>
      Holding a 30-year incumbent below 50% during the California primaries in a
      field dense with competition.
    </p>
    {/* <div className="w-50">
      <img src={kumar_logo} className='px-20' />
    </div> */}
  </>
);

export const strategyContent = (
  <>
    <p className={styles.heading4}>STRATEGY</p>
    <p className={styles.heading3}>Strategic Consultants</p>
    <ol className={styles.paragraph}>
      <li>Interface 1-on-1 with clientele to support day-to-day operations</li>
      <li>Lead clientele acquisition efforts</li>
    </ol>
  </>
);

export const researchContent = (
  <>
    <p className={styles.heading4}>RESEARCH</p>
    <p className={styles.heading3}>Research Consultants</p>
    <ol className={styles.paragraph}>
      <li>
        Analyze and interpret key internal insights to deliver actionable
        strategies
      </li>
      <li>Coordinate with Strategic Consultants to support clientele</li>
    </ol>
  </>
);

export const softwareContent = (
  <>
    <p className={styles.heading4}>SOFTWARE</p>
    <p className={styles.heading3}>Software Engineers</p>
    <ol className={styles.paragraph}>
      <li>
        Design, develop, and deploy application software to support internal and
        external operations
      </li>
      <li>Test and drive iterations by interfacing with stakeholders</li>
    </ol>
  </>
);

export const dataContent = (
  <>
    <p className={styles.heading4}>DATA</p>
    <p className={styles.heading3}>Data Scientists</p>
    <ol className={styles.paragraph}>
      <li>
        Research and develop pioneering implementations of algorithms and tools
        in campaigns, from Logistic Regression all the way to Large Language
        Models.
      </li>
      <li>Document and present findings</li>
    </ol>
  </>
);

export const landing_sol1 = (
  <>
    <p className={styles.heading4}>Solution 1</p>
    <p className={styles.heading3}>Strategy & Consulting</p>
    <p className={styles.paragraph}>
      Great campaigns begin at the drawing board. We provide end-to-end support
      to formulate efficient, effective strategies and timelines to support
      campaigns from launch to election.
    </p>
  </>
);

export const landing_sol2 = (
  <>
    <p className={styles.heading4}>Solution 2</p>
    <p className={styles.heading3}>Research & Development</p>
    <p className={styles.paragraph}>
      Research hones effective campaign messaging and widespread voter outreach.
      From donor and opposition research to targeted voter universes, compile
      rigorous documentation to inform your campaigning decisions.
    </p>
  </>
);

export const landing_sol3 = (
  <>
    <p className={styles.heading4}>Solution 3</p>
    <p className={styles.heading3}>Software & Data</p>
    <p className={styles.paragraph}>
      Deploy cutting-edge machine learning models to predict voter behavior and
      leverage comprehensive dashboards to manage day-to-day campaign
      operations.
    </p>
  </>
);

export const landing_sol4 = (
  <>
    <p className={styles.heading4}>Solution 4</p>
    <p className={styles.heading3}>Operations & Deployment</p>
    <p className={styles.paragraph}>
      Mobilize hundreds of volunteers to canvass and contact millions of voters.
      Execute and deploy voter contact strategies effortlessly.
    </p>
  </>
);

