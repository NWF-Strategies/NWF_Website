import {
  linkedin,
  linkedin_blue,
  mail2,
  mail2_blue,
  person,
  research,
  sms_Fill,
  vibration,
  research_dev,
  operation,
  software_data,
  strategy,
  sms_colored,
  research_colored,
  person_colored,
  vibration_colored,
  careers_category01,
  careers_category02,
  careers_category03,
} from "../assets";

import { dataContent, landing_sol1, landing_sol2, landing_sol3, landing_sol4, peltola_text, researchContent, softwareContent, strategyContent, ventura_text, mcduffie_text } from "./div_constants";


import ventura_logo from "../assets/logo_ventura.png";
import mcduffie_logo from "../assets/logo_mcduffie.png";
import summer_logo from "../assets/logo_summer.png";
import peltola_logo from "../assets/logo_peltola.png";
import kumar_logo from "../assets/logo_kumar.png";
import bush_logo from "../assets/logo_bush.png";
import kansas_logo from "../assets/logo_kansas.png";
import zohran_logo from "../assets/zohran_logo.png";

import peltola from "../assets/home_peltola.png";
import ventura from "../assets/home_ventura.png";
import kumar from "../assets/home_kumar.png";
import mcduffie from "../assets/home_mcduffie.png";

// need to add these to assets folder; prev imgs still not high res yet
import careers_role01 from "../assets/careers_role01.png";
import careers_role02 from "../assets/careers_role02.png";
import careers_role03 from "../assets/careers_role03.png";
import careers_role04 from "../assets/careers_role04.png";

import thumbnailImg1 from "../assets/home_carousel01.png";
import thumbnailImg2 from "../assets/home_carousel02_high_contrast.png";
import thumbnailImg3 from "../assets/careers_background_sharpened_dark.png";

import LandingThumbnail from "../components/LandingThumbnail";
import CandidateSlide from "../components/CandidateSlide";
import Counter from "../components/Counter";

export const navLinks = [
  {
    id: "solutions",
    title: "Solutions",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "careers",
    title: "Careers",
  },
  {
    id: "contactus",
    title: "Contact Us",
  },
  {
    id: "bookcall",
    title: "Book an Intro Call",
    url: "calendar.app.google/JLvGBnHtjfQcufP49",
    external: true,
    button: true,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Create",
        link: "https://www.google.com/",
      },
      {
        name: "Explore",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Suggestions",
        link: "https://www.google.com/",
      },
      {
        name: "Blog",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.google.com/",
      },
      {
        name: "Become a Partner",
        link: "https://www.google.com/",
      },
    ],
  },
];

export const socialMedia = [
  /*{
    id: "social-media-1",
    icon: indeed,
    link: "https://www.indeed.com/cmp/Nwf-Strategies/jobs",
  },*/
  {
    id: "social-media-1",
    icon: mail2,
    link: "mailto:info@nwfstrategies.com",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/nwf-strategies/mycompany/",
  },
];

export const socialMedia_blue = [
  /*{
    id: "social-media-1",
    icon: indeed,
    link: "https://www.indeed.com/cmp/Nwf-Strategies/jobs",
  },*/
  {
    id: "social-media-1",
    icon: mail2_blue,
    link: "mailto:info@nwfstrategies.com",
  },
  {
    id: "social-media-4",
    icon: linkedin_blue,
    link: "https://www.linkedin.com/company/nwf-strategies/mycompany/",
  },
];
export const solutions_tags = [ //xasr
  {
    img: sms_Fill,
    title: "Strategy &\nConsulting",
  },
  {
    img: person,
    title: "Research &\nDevelopment",
  },
  {
    img: vibration,
    title: "Software &\nData",
  },
  {
    img: research,
    title: "Operations &\nDeployment",
  },
];

export const interactive_solutions_tags = [ //xasr
  {
    img: sms_Fill,
    title: "Fundraising",
    blurb: "Turn sub-$100k quarters into $1 million wins with a high-speed fundraising system. We build and execute aggressive finance plans, revamp digital strategy, and tap proprietary donor networks to fuel your campaign fast.",
    shortBlurb: "Formulate efficient, effective strategies for your campaign, from launch to election."
  },
  {
    img: person,
    title: "Research",
    blurb: "Win the campaign before it begins with a data-driven strategy. We craft your core messaging, track your opponent’s moves, and maintain live research databases so you’re always equipped to respond with precision and confidence.",
    shortBlurb: "Leverage and compile in-depth research and comprehensive documentation, from donor and opposition research to carefully curated voter universes."
  },
  {
    img: vibration,
    title: "Data",
    blurb: "Our dashboards visualize key metrics—from field results to supporter IDs—filterable by district, county, or precinct. Powered by proprietary ML models, we decode voter sentiment and behavior to boost conversion rates where it matters.",
    shortBlurb: "Deploy cutting-edge machine learning models to predict voter behavior and leverage comprehensive dashboards to manage day-to-day campaign operations."
  },
  {
    img: research,
    title: "Voter Contact",
    blurb: "We deploy a professional field program capable of 300,000 calls per day. You get a live dashboard to track KPIs and progress in real time, with full transparency as we deliver your message and identify supporters.",
    shortBlurb: "Mobilize hundreds of volunteers to canvass and contact millions of voters. Execute and deploy voter contact strategies effortlessly."
  },
];

export const clients = [{}];

export const solutions_notes = [ 
  {
    img: strategy,
    icon: sms_colored,
    title: "Fundraising",
    //description:"Great campaigns begin at the drawing board. We provide end-to-end support to formulate efficient, effective strategies and timelines to support campaigns from launch to election.",
    description: "Turn sub-$100k quarters into $1 million wins with a high-speed fundraising system. We build and execute aggressive finance plans, revamp digital strategy, and tap proprietary donor networks to fuel your campaign fast."

    },
  {
    img: research_dev,
    icon: person_colored,
    title: "Research",
    //description:"Research hones effective campaign messaging and widespread voter outreach. From donor and opposition research to targeted voter universes, compile rigorous documentation to inform your campaigning decisions.",
    description: "Win the campaign before it begins with a data-driven strategy. We craft your core messaging, track your opponent’s moves, and maintain live research databases so you’re always equipped to respond with precision and confidence."
  },
  {
    img: software_data,
    icon: vibration_colored,
    title: "Data",
    //description:"Deploy cutting-edge machine learning models to predict voter behavior and leverage comprehensive dashboards to manage day-to-day campaign operations.",
    description: "Our dashboards visualize key metrics—from field results to supporter IDs—filterable by district, county, or precinct. Powered by proprietary ML models, we decode voter sentiment and behavior to boost conversion rates where it matters."
  },
  {
    img: operation,
    icon: research_colored,
    title: "Voter Contact",
    //description:"Mobilize hundreds of volunteers to canvass and contact millions of voters. Execute and deploy voter contact strategies effortlessly.",
    description: "We deploy a professional field program capable of 300,000 calls per day. You get a live dashboard to track KPIs and progress in real time, with full transparency as we deliver your message and identify supporters."
  },
];

export const mission_tags = [
  {
    date: "August 2020",
    description: "Inception and Incorporation",
  },
  {
    date: "April 2021",
    description: "Development and testing",
  },
  {
    date: "Jan. 2022",
    description: "Wide-scale deployment of solutions",
  },
  {
    date: "July 2022",
    description: "NWF clientele post a ~75% election rate",
  },
  {
    date: "August 2022",
    description: "Begin R&D for AI-powered campaigning tools",
  },
];

export const landing_thumbnails = [
  <LandingThumbnail
    imageSrc={thumbnailImg1}
    text={
      <p>
                     <span className="text-cyan-400">Innovating today</span> for the
        campaigns of tomorrow
      </p>
    }
    secondaryButton="the New Way Forward"
    secondaryNavigate="calendar.app.google/JLvGBnHtjfQcufP49"
  />,
  <LandingThumbnail
    imageSrc={thumbnailImg2}
    text={
      <p>
        Learn how we've{" "}
                       <span className="text-cyan-400">driven people-powered</span>{" "}
        campaigns with cutting edge software.
      </p>
    }
    secondaryButton="Getting Started"
    secondaryNavigate="/solutions" 
  />,
  <LandingThumbnail
    imageSrc={thumbnailImg3}
    text={
      <p>
        Lead the{" "}
                       <span className="text-cyan-400">new way forward</span>{" "}
        of campaigning with us
      </p>
    }
    secondaryButton="Join Us"
    secondaryNavigate="/careers"
  />,
];


export const logos1 = [peltola_logo, ventura_logo, kumar_logo];
import rishi_kumar from "../assets/rishi_kumar.png";
import tony_thurmond from "../assets/tony_thurmond.png";
import mississippi_dems from "../assets/mississippi_dems.png";
import delia_ramirez_logo from "../assets/delia_ramirez_logo.png";
import ak_dems from "../assets/ak_dems.png";

export const logos2 = [summer_logo, mcduffie_logo, bush_logo, ventura_logo, kansas_logo, peltola_logo, rishi_kumar, tony_thurmond, mississippi_dems, delia_ramirez_logo, zohran_logo, ak_dems]; 

export const candidate_photos = [peltola, ventura, mcduffie, kumar ];

export const candidate_texts = [peltola_text, ventura_text, mcduffie_text];

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

  /*<CandidateSlide
    imageSrc={candidate_photos[2]}
    imageAlt='Kumar image'
    content={candidate_texts[2]}
  />,*/
  
export const candidate_case_studies = [
  <CandidateSlide
    imageSrc={candidate_photos[0]}
    imageAlt='Peltola image'
    content={candidate_texts[0]}
  />,
  <CandidateSlide
    imageSrc={candidate_photos[1]}
    imageAlt='Ventura image'
    content={candidate_texts[1]}
  />,
  <CandidateSlide
    imageSrc={candidate_photos[2]}
    imageAlt='McDuffie image'
    content={candidate_texts[2]}
  />,
];
export const homepage_stats = [
  {
    counter: <Counter endValue={100} delta={2} suffix=" million+" decimalPlaces="0"/>,
    text: "reached.",
  },
  {
    counter: <Counter endValue={30} delta={1} prefix="$" suffix=" million+" decimalPlaces="0"/>,
    text: "raised.",
  },
  {
    counter: <Counter endValue={25} delta={1} suffix="+ states" decimalPlaces="0"/>,
    text: "impacted.",
  },
];

export const mobile_homepage_stats = [
  {
    number: "100 million+",
    text: "reached.",
  },
  {
    number: "$30 million+",
    text: "raised.",
  },
  {
    number: "25+ states",
    text: "impacted.",
  },
];

export const career_categories = [
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