import React from "react";
import { Link } from "react-router-dom";
import peltola_logo from "../assets/logo_peltola.png";
import ventura_logo from "../assets/logo_ventura.png";
import mcduffie_logo from "../assets/logo_mcduffie.png";
import home_ventura from "../assets/home_ventura.png";
import home_mcduffie from "../assets/home_mcduffie.png";
import summer_logo from "../assets/logo_summer.png";
import zohran_logo from "../assets/zohran_logo.png";
import bush_logo from "../assets/logo_bush.png";
import kansas_logo from "../assets/logo_kansas.png";
import ak_dems_logo from "../assets/ak_dems.png";
import mary_peltola_casestudy from "../assets/mary_peltola_casestudy.jpg";
import summer_lee_photo from "../assets/summer_lee.png";
import zohran_speaking_photo from "../assets/zohran_speaking.png";
import { polygon } from "../assets";
import OrangeButton from "./OrangeButton";
import SlideIn from "./SlideInAnimation";
import FadeIn from "./FadeIn";

export type Study = {
  name: string;
  fullName: string;
  logo: string;
  photo: string;
  typeOfStudy: string;
  description: string;
  to?: string; 
};


export const studiesData: Record<string, Study> = {
  mary: {
    name: "Mary Peltola",
    fullName: "Mary Peltola",
    logo: peltola_logo,
    photo: mary_peltola_casestudy,
    typeOfStudy: "Voter Contact + Data",
    description:
      "How fish and freedom flipped a 50-year Republican stronghold against former governor Sarah Palin to seat the first Alaskan Native in Congress.",
    to: "/solutions/mary-peltola-2022",
  },
  zohran: {
    name: "Zohran Mamdani",
    fullName: "Zohran Mamdani",
    logo: zohran_logo,
    photo: zohran_speaking_photo,
    typeOfStudy: "Fundraising",
    description:
      "How a grassroots-first fundraising strategy raised $16.8M, powering a historic primary win against a former Governor.",
    to: "/solutions/zohran-mamdani-2025",
  },
  summer: {
    name: "Summer Lee",
    fullName: "Summer Lee",
    logo: summer_logo,
    photo: summer_lee_photo,
    typeOfStudy: "Fundraising",
    description:
      "How a full-scale finance operation built $1M quarters, turning a fundraising challenge into a clear financial advantage.",
    to: "/solutions/summer-lee-2024",
  },
  ventura: {
    name: "Rachel Ventura",
    fullName: "State Sen. Rachel Ventura (IL-43)",
    logo: ventura_logo,
    photo: home_ventura,
    typeOfStudy: "Voter Contact + Data",
    description:
      "How a former school board member beat out an incumbent while outraised 18-to-1 to win the Illinois State Senate seat.",
    to: "/solutions/rachel-ventura-2022",
  },
  mcduffie: {
    name: "Kenyan McDuffie",
    fullName: "Councilman Kenyan R. McDuffie (At-large)",
    logo: mcduffie_logo,
    photo: home_mcduffie,
    typeOfStudy: "Voter Contact",
    description:
      "How an independent Ward 5 councilmember won a citywide at-large seat by building a winning coalition in DC's majority-Black wards.",
    to: "/solutions/kenyan-mcduffie-2022",
  },
  kansas: {
    name: "Kansas Democratic Party",
    fullName: "Kansas Democratic Party (KDP)",
    logo: kansas_logo,
    photo: home_mcduffie, // placeholder - reuse existing photo
    typeOfStudy: "Operations + Technology",
    description:
      "How a comprehensive transformation of candidate support infrastructure revolutionized recruitment and training statewide.",
    to: "/solutions/kansas-democratic-party-2024",
  },
  alaska: {
    name: "Alaska Democratic Party",
    fullName: "Alaska Democratic Party (ADP)",
    logo: ak_dems_logo,
    photo: mary_peltola_casestudy, // placeholder - reuse existing photo
    typeOfStudy: "Voter Contact + Data",
    description:
      "How a comprehensive digital IE program flipped the State House to Democratic control, making it the only legislative chamber to flip in 2024.",
    to: "/solutions/alaska-democratic-party-2024",
  },
  bush: {
    name: "Rep. Cori Bush",
    fullName: "Rep. Cori Bush (MO-01)",
    logo: bush_logo,
    photo: home_ventura, // placeholder - reuse existing photo
    typeOfStudy: "Fundraising",
    description:
      "How a full-scale finance operation transformed a debt-ridden campaign into a $3M quarter powerhouse.",
    to: "/solutions/cori-bush-2024",
  },
};

type CaseStudyCardProps = {
  study: Study;
  size: "large" | "normal";
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, size }) => {
  const isLarge = size === "large";

  return (
    <FadeIn duration={400}>
      <Link
        to={study.to || "#"}
        className={`block relative rounded-2xl overflow-hidden hover:scale-103 transition-transform duration-300 ${
          !study.to ? "cursor-default" : ""
        }`}
      >
        <div className="absolute inset-0">
          <img src={study.photo} alt={study.fullName} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className={`relative z-10 p-6 flex flex-col justify-between text-white ${isLarge ? "h-[593px]" : "h-[280px]"}`}>
          <div className="flex justify-between items-start">
            <img src={study.logo} alt={`${study.name} logo`} className="h-16 w-auto" />
            <div className="text-right">
              <p className="text-cyan-400 font-lato text-sm font-semibold">{study.typeOfStudy}</p>
            </div>
          </div>
          <SlideIn direction="bottom" delay={1000}>
            <p className="text-[18px] font-poppins mb-4 leading-relaxed">{study.description}</p>
          </SlideIn>
          <div className="relative w-full flex justify-end text-cyan-400 pr-44">
            <div className="group relative inline-flex items-center text-cyan-400 mb-4">
              <div className="absolute left-14 sm:left-0 w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center overflow-hidden transition-all duration-300 ease-out group-hover:w-[184px]">
                <span className="absolute inset-0 opacity-0 rounded-full transition-all duration-300 ease-out group-hover:opacity-100 bg-cyan-400"></span>
                <svg
                  className="absolute left-3 z-10 w-4 h-4 text-cyan-400 transition-all duration-300 group-hover:opacity-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="absolute left-[85px] sm:left-8 ml-4 font-bold text-lg text-cyan-400 transition-colors duration-300 group-hover:text-white min-w-0 whitespace-nowrap">
                Read more
              </span>
            </div>
          </div>
          <h3 className="absolute text-lg font-poppins font-bold bottom-6 sm:left-6">{study.fullName}</h3>
        </div>
      </Link>
    </FadeIn>
  );
};

/**
 * FeaturedCaseStudies component
 * Solutions.tsx will import studiesData if it needs to render additional studies (ventura, mcduffie)
 */
const FeaturedCaseStudies: React.FC = () => {
  const { mary, zohran, summer } = studiesData;

  return (
    <div className="w-full py-0">
      <div className='flex items-center gap-4 mb-12'>
          <div className='flex'>
            <img src={polygon} alt='nwf logo' className='w-[80px] h-[40px]' />
          </div>
          <h2 className='text-[50px] pb-2 font-lato font-semibold text-white italic'>Case Studies</h2>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="lg:row-span-2">
          <CaseStudyCard study={mary} size="large" />
        </div>

        <div className="space-y-8">
          <CaseStudyCard study={zohran} size="normal" />
          <CaseStudyCard study={summer} size="normal"/>
        </div>
        <div className="mr-0 mx-auto">
          <OrangeButton label="Explore more Case Studies" to="/solutions" textcolor="white"  scrollToId="additional-case-studies" />
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedCaseStudies;
