import styles from "../style";
import { useNavigate } from "react-router-dom";

import home_carousel01 from "../assets/home_carousel01.png";
import home_carousel02 from "../assets/home_carousel02.png";
/*import home_carousel03 from "../assets/home_carousel03.png";*/
import home_carousel03c from "../assets/careers_background_sharpened_dark.png";

import OrangeButton from "../components/OrangeButton";

export const career_text = (
  <>
    <p className={styles.heading4}>CAREER</p>
    <p className={styles.heading3}>Join Us</p>
    <p className={styles.paragraph}>
      Lead the New Way Forward of campaigning with us. From software engineers
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
    <div className="3xl:w-[66%] 2xl:mx-[5%]">
      <p className={styles.heading4}>CAREER</p>
      <p className={`${styles.heading2} !text-black font-normal`}>Join Us</p>
      <p className={`${styles.paragraph} !text-black my-2`}>
        Lead the New Way Forward of campaigning with us. From software engineers
        and researchers to campaign managers and canvassers, we have a team for
        you.
      </p>
      {/*<ExampleButton
        onClick={() => handleClick()}
        children='Careers'
      />*/}
      <OrangeButton
              label="Explore our Careers"
              to="/Careers"
              color="#00BCD4" 
      />
    </div>
  );
};


export const landing_carousel = [
  home_carousel01,
  home_carousel02,
  home_carousel03c,
  //home_carousel03,
];

export const peltola_text = (
  <div>
    <p className={styles.heading4}>CASE STUDY</p><br />
    <p className={styles.heading3}>Mary Peltola</p><br />
    <p className={styles.paragraph}>
      How fish and freedom flipped a 50-year Republican stronghold against
      former governor Sarah Palin to seat the first Alaskan Native in Congress.
    </p>
    <br /><br />
    <a href="/solutions/mary-peltola-2022" className={`${styles.button} cursor-should-hover  cursor-pointer no-underline inline-block`}>
      View Case Study
    </a>
  </div>
);

export const ventura_text = (
  <div>
    <p className={styles.heading4}>CASE STUDY</p><br />
    <p className={styles.heading3}>Rachel Ventura</p><br />
    <p className={styles.paragraph}>
    How a former school board member beat out an incumbent while outraised
      18-to-1 to win the Illinois State Senate seat.
    </p>
    <br /><br />
    <a href="/solutions/rachel-ventura-2022" className={`${styles.button} cursor-should-hover cursor-pointer no-underline inline-block`}>
      View Case Study
    </a>*
  </div>
);

export const mcduffie_text = (
  <div>
    <p className={styles.heading4}>CASE STUDY</p><br />
    <p className={styles.heading3}>Kenyan R. McDuffie</p><br />
    <p className={styles.paragraph}>
    How an independent Ward 5 councilmember won a citywide at-large seat by building a winning coalition in DC's majority-Black wards.
    </p>
    <br /><br />
    <a href="/solutions/kenyan-mcduffie-2022" className={`${styles.button} cursor-should-hover cursor-pointer no-underline inline-block`}>
      View Case Study
    </a>*
  </div>
);
/*export const kumar_text = () => (
  <>
    <p className={styles.heading4}>CASE STUDY</p><br />
    <p className={styles.heading3}>Rishi Kumar</p><br />
    <p className={styles.paragraph}>
      Holding a 30-year incumbent below 50% during the California primaries in a
      field dense with competition.
    </p>
    <div className="w-50">
      <img src={kumar_logo} className='px-20' />
    </div>
  </>
);*/
 
export const strategyContent = (
  <>
    <p className={styles.heading4}>STRATEGY</p>
    <p className={styles.heading3}>Strategic Consultants</p>
    <ol className={`${styles.paragraph} xl:!text-xl`}>
      <li>- Interface 1-on-1 with clientele to support day-to-day operations</li>
      <li>- Lead clientele acquisition efforts</li>
    </ol>
  </>
);

export const researchContent = (
  <>
    <p className={styles.heading4}>RESEARCH</p>
    <p className={styles.heading3}>Research Consultants</p>
    <ol className={`${styles.paragraph} xl:!text-xl`}>
      <li>
        - Analyze and interpret key internal insights to deliver actionable
        strategies
      </li>
      <li>- Coordinate with Strategic Consultants to support clientele</li>
    </ol>
  </>
);

export const softwareContent = (
  <>
    <p className={styles.heading4}>SOFTWARE</p>
    <p className={styles.heading3}>Software Engineers</p>
    <ol className={`${styles.paragraph} xl:!text-xl`}>
      <li>
        - Design, develop, and deploy application software to support internal and
        external operations
      </li>
      <li>- Test and drive iterations by interfacing with stakeholders</li>
    </ol>
  </>
);

export const dataContent = (
  <>
    <p className={styles.heading4}>DATA</p>
    <p className={styles.heading3}>Data Scientists</p>
    <ol className={`${styles.paragraph} xl:!text-xl`}>
      <li>
        - Research and develop pioneering implementations of algorithms and tools
        in campaigns, from Logistic Regression all the way to Large Language
        Models.
      </li>
      <li>- Document and present findings</li>
    </ol>
  </>
);

export const landing_sol1 = ( 
  <>
    <p className={styles.heading4}>Solution 1</p>
    <p className={styles.heading3}>Fundraising</p>
    <p className={styles.paragraph}>
      Turn sub-$100k quarters into $1 million wins with a high-speed fundraising system. We build and execute aggressive finance plans, revamp digital strategy, and tap proprietary donor networks to fuel your campaign fast.
    </p>
  </>
);

export const landing_sol2 = (
  <>
    <p className={styles.heading4}>Solution 2</p>
    <p className={styles.heading3}>Research</p>
  <p className={styles.paragraph}>
        Win the campaign before it begins with a data-driven strategy. We craft your core messaging, track your opponent’s moves, and maintain live research databases so you’re always equipped to respond with precision and confidence.
    </p>
  </>
);

export const landing_sol3 = (
  <>
    <p className={styles.heading4}>Solution 3</p>
    <p className={styles.heading3}>Data</p>
    <p className={styles.paragraph}>
      Our dashboards visualize key metrics—from field results to supporter IDs—filterable by district, county, or precinct. Powered by proprietary ML models, we decode voter sentiment and behavior to boost conversion rates where it matters.
    </p>
  </>
);

export const landing_sol4 = (
  <>
    <p className={styles.heading4}>Solution 4</p>
    <p className={styles.heading3}>Voter Contact</p>
    <p className={styles.paragraph}>
      We deploy a professional field program capable of 300,000 calls per day. You get a live dashboard to track KPIs and progress in real time, with full transparency as we deliver your message and identify supporters.
    </p>
  </>
);

