import styles from "../style";
import { socialMedia } from "../constants";
import SlideIn from "./SlideInAnimation";
import FadeIn from "./FadeIn";
import light_blue_fulltext_logo from '../assets/light_blue_fulltext_logo.png';

const Footer = () => (
  <section
    className={`flex-col px-10 border-t-2 border-white !bg-grey py-6`}
  >
    
    <SlideIn direction="bottom">
      <div className={`${styles.flexCenter} sm:flex-row flex-col mb-8 w-full max-w-[85vw] mx-auto`}>
        {/*<div className='flex-[1] flex  justify-start mr-10'>
          <img
            src={polygon}
            alt='NWF'
            className='mr-9 w-[60px] h-[72.14px] object-contain'
          />
          <img
            src={logo}
            alt='NWF'
            className='w-[266px] h-[72.14px] object-contain'
          />
        </div>*/}
        <div className="flex-[1] flex  justify-start mr-10 mt-8">
          <img 
            src={light_blue_fulltext_logo} 
            alt="NWF Strategies" 
            className="object-contain h-10 lg:h-14"
          />
        </div>
        <>
          <div className='flex md:mt-0 mt-8 gap-6'>
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[66px] h-[66px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0 pb-2"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </>
      </div>
    </SlideIn>
    <FadeIn delay={100}>
    <div className='w-full  justify-between  flex-col hidden sm:flex max-w-[85vw] mx-auto'>
      {/*<p className='mt-2 mb-4 font-poppins font-semibold text-left text-[19px] leading-[27px] text-white text-bold'>
        STAY INFORMED
      </p>
      <form className='w-85 max-w-md  pb-6'>
        <div className='flex h-10 relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
            <img src={mail}></img>
          </div>
          <input
            className='bg-black-gradient appearance-none border border-secondary rounded-s w-full  text-white focus:outline-none focus:bg-white  pl-12'
            type='email'
            placeholder='Sign Up For Our Latest Opportunities '
          ></input>

          <button
            type='submit'
            className=' justify-center items-center  bg-[#43BCCD] rounded-e text-white font-bold px-3'
          >
            subscribe
          </button>
        </div>
      </form> */}
      <p className='mt-4 pb-28 font-poppins font-normal text-left text-[22px] leading-[27px] tracking-wide text-white'>
        <span className='text-[16px] relative bottom-[2px] mr-2'>Ⓒ</span>2025 New Way Forward. All Rights Reserved.
      </p>
    </div>
    </FadeIn>
  </section>
);

export default Footer;
