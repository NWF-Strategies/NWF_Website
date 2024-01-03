import styles from "../style";

import home_carousel01 from "../assets/home_carousel01.png";
import home_carousel02 from "../assets/home_carousel02.png";
import home_carousel03 from "../assets/home_carousel03.png";

import ventura_logo from "../assets/logo_ventura.png";
import mcduffie_logo from "../assets/logo_mcduffie.png";
import akdems_logo from "../assets/logo_akdems.png";
import peltola_logo from "../assets/logo_peltola.png";
import kumar_logo from "../assets/logo_kumar.png";

import peltola from "../assets/home_peltola.png";
import ventura from "../assets/home_ventura.png";
import kumar from "../assets/home_kumar.png";

import careers_role01 from "../assets/careers_role01.png";
import careers_role02 from "../assets/careers_role02.png";
import careers_role03 from "../assets/careers_role03.png";
import careers_role04 from "../assets/careers_role04.png";

import thumbnailImg1 from "../assets/home_carousel01.png";
import thumbnailImg2 from "../assets/home_carousel02.png";
import thumbnailImg3 from "../assets/home_carousel03.png";

import LandingThumbnail from "../components/LandingThumbnail";
import CandidateSlide from "../components/CandidateSlide";

export const landing_thumbnails = [
  <LandingThumbnail
    imageSrc={thumbnailImg1}
    text={
      <p>
        <span className='text-secondary'>Innovating today</span> for the
        campaigns of tomorrow
      </p>
    }
  />,
  <LandingThumbnail
    imageSrc={thumbnailImg2}
    text={
      <p>
        Learn how we've{" "}
        <span className='text-secondary'>driven people-powered</span>{" "}
        campaigns with cutting edge software.
      </p>
    }
  />,
  <LandingThumbnail
    imageSrc={thumbnailImg3}
    text={
      <p>
        <span className='text-secondary'>Power the new way forward</span> of
        campaigning with us
      </p>
    }
  />,
];

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

export const logos1 = [peltola_logo, ventura_logo, kumar_logo];
export const logos2 = [ventura_logo, akdems_logo, peltola_logo, mcduffie_logo];

export const joinus_content = (
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

export const landing_carousel = [
  home_carousel01,
  home_carousel02,
  home_carousel03,
];

const peltola_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Mary Peltola</p>
    <p className={styles.paragraph}>
      How fish and freedom flipped a 50-year Republican stronghold against
      former governor Sarah Palin to seat the first Alaskan Native in Congress.
    </p>
    <img src={peltola_logo} className='h-[16vw] px-20  ' />
  </>
);

const ventura_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Rachel Ventura</p>
    <p className={styles.paragraph}>
      How a former school board member beat out an incumbent while outraised
      18-to-1 to win the Illinois State Senate seat.
    </p>
    <img src={ventura_logo} className='h-[12vw] px-20 ' />
  </>
);
const kumar_text = (
  <>
    <p className={styles.heading4}>CASE STUDY</p>
    <p className={styles.heading3}>Rishi Kumar</p>
    <p className={styles.paragraph}>
      Holding a 30-year incumbent below 50% during the California primaries in a
      field dense with competition.
    </p>
    <img src={kumar_logo} className='mt-4 h-[12vw] lg:p-0 px-20 py-4' />
  </>
);

const strategyContent = (
  <>
    <p className={styles.heading4}>STRATEGY</p>
    <p className={styles.heading3}>Strategic Consultants</p>
    <ol className={styles.paragraph}>
      <li>Interface 1-on-1 with clientele to support day-to-day operations</li>
      <li>Lead clientele acquisition efforts</li>
    </ol>
  </>
);

const researchContent = (
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

const softwareContent = (
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

const dataContent = (
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

export const candidate_photos = [peltola, ventura, kumar];

export const candidate_texts = [peltola_text, ventura_text, kumar_text];

export const roles = [
  {
    content: strategyContent,
    imageSrc: careers_role01,
    imageAlt: "Strategy image",
  },
  {
    content: researchContent,
    imageSrc: careers_role02,
    imageAlt: "Marketing image",
  },
  {
    content: softwareContent,
    imageSrc: careers_role03,
    imageAlt: "Development image",
  },
  {
    content: dataContent,
    imageSrc: careers_role04,
    imageAlt: "Operations image",
  },
];

const landing_sol1 = (
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

const landing_sol2 = (
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

const landing_sol3 = (
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

const landing_sol4 = (
  <>
    <p className={styles.heading4}>Solution 4</p>
    <p className={styles.heading3}>Operations & Deployment</p>
    <p className={styles.paragraph}>
      Mobilize hundreds of volunteers to canvass and contact millions of voters.
      Execute and deploy voter contact strategies effortlessly.
    </p>
  </>
);

export const landing_solutions = [
  {
    content: landing_sol1,
    imageSrc: careers_role01,
    imageAlt: "Strategy image",
  },
  {
    content: landing_sol2,
    imageSrc: careers_role02,
    imageAlt: "Marketing image",
  },
  {
    content: landing_sol3,
    imageSrc: careers_role03,
    imageAlt: "Development image",
  },
  {
    content: landing_sol4,
    imageSrc: careers_role04,
    imageAlt: "Operations image",
  },
];

export const candidate_case_studies = [
  <CandidateSlide
    imageSrc={candidate_photos[0]}
    imageAlt='Peltola image'
    content={candidate_texts[0]}
  />,
  <CandidateSlide
    imageSrc={candidate_photos[1]}
    imageAlt='Peltola image'
    content={candidate_texts[1]}
  />,
  <CandidateSlide
    imageSrc={candidate_photos[2]}
    imageAlt='Peltola image'
    content={candidate_texts[2]}
  />,
];

export const homepage_stats = [
  {
    number: "10+ states",
    text: "impacted.",
  },
  {
    number: "75%",
    text: "election success rate.",
  },
  {
    number: "7.5 million+",
    text: "reached.",
  },
];
