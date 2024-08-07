import {
  linkedin,
  indeed,
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

import { dataContent, kumar_text, landing_sol1, landing_sol2, landing_sol3, landing_sol4, peltola_text, researchContent, softwareContent, strategyContent, ventura_text } from "./div_constants";


import ventura_logo from "../assets/logo_ventura.png";
import mcduffie_logo from "../assets/logo_mcduffie.png";
import summer_logo from "../assets/logo_summer.png";
import peltola_logo from "../assets/logo_peltola.png";
import kumar_logo from "../assets/logo_kumar.png";
import bush_logo from "../assets/logo_bush.png";
import kansas_logo from "../assets/logo_kansas.png";

import peltola from "../assets/home_peltola.png";
import ventura from "../assets/home_ventura.png";
import kumar from "../assets/home_kumar.png";

// need to add these to assets folder; prev imgs still not high res yet
import careers_role01 from "../assets/careers_role01.png";
import careers_role02 from "../assets/careers_role02.png";
import careers_role03 from "../assets/careers_role03.png";
import careers_role04 from "../assets/careers_role04.png";

import thumbnailImg1 from "../assets/home_carousel01.png";
import thumbnailImg2 from "../assets/home_carousel02.png";
//import thumbnailImg3 from "../assets/home_carousel03.png";
import thumbnailImg3 from "../assets/home_carousel03b.png";

import LandingThumbnail from "../components/LandingThumbnail";
import LandingThumbnail2 from "../components/LandingThumbnail2";
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
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/nwf-strategies/mycompany/",
  },
  {
    id: "social-media-1",
    icon: indeed,
    link: "https://www.indeed.com/cmp/Nwf-Strategies/jobs",
  },
];

export const solutions_tags = [
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

export const clients = [{}];

export const solutions_notes = [
  {
    img: strategy,
    icon: sms_colored,
    title: "Strategy & Consulting",
    description:
      "Great campaigns begin at the drawing board. We provide end-to-end support to formulate efficient, effective strategies and timelines to support campaigns from launch to election.",
  },
  {
    img: research_dev,
    icon: person_colored,
    title: "Research & Development",
    description:
      "Research hones effective campaign messaging and widespread voter outreach. From donor and opposition research to targeted voter universes, compile rigorous documentation to inform your campaigning decisions.",
  },
  {
    img: software_data,
    icon: vibration_colored,
    title: "Software & Data",
    description:
      "Deploy cutting-edge machine learning models to predict voter behavior and leverage comprehensive dashboards to manage day-to-day campaign operations.",
  },
  {
    img: operation,
    icon: research_colored,
    title: "Operations & Deployment",
    description:
      "Mobilize hundreds of volunteers to canvass and contact millions of voters. Execute and deploy voter contact strategies effortlessly.",
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
        <span className='text-secondary'>Innovating today</span> for the
        campaigns of tomorrow
      </p>
    }
    buttonLabel="The New Way Forward"
    navigateTo="/"
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
    buttonLabel="Our Impact"
    navigateTo="/solutions"
  />,
  <LandingThumbnail2
    imageSrc={thumbnailImg3}
    text={
      <p>
        <span className='text-[#e09c46]'>Power the new way forward</span> of
        campaigning with us
      </p>
    }
    buttonLabel="Join Us"
    navigateTo="/careers"
  />,
];


export const logos1 = [peltola_logo, ventura_logo, kumar_logo];
export const logos2 = [summer_logo, mcduffie_logo, bush_logo , ventura_logo, kansas_logo, peltola_logo]; 

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
  /*{
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
  },*/
  {
    counter: <Counter endValue={15} delta={1} suffix="+ states" decimalPlaces="0"/>,
    text: "impacted.",
  },
  {
    counter: <Counter endValue={75} delta={5} suffix="%" decimalPlaces="0"/>,
    text: "election success rate.",
  },
  {
    counter: <Counter endValue={20} delta={1} suffix="+   million" decimalPlaces="0"/>,
    text: "reached.",
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