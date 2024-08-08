import styles from "../style";
import { logo, polygon } from "../assets";
import { socialMedia } from "../constants";
import SlideIn from "./SlideInAnimation";
import FadeIn from "./FadeIn";

const Footer = () => (
  <section
    className={`flex-col px-10 border-t-2 border-white !bg-grey py-4 mt-20 3xl:mt-24`}
  >
    
    <SlideIn direction="bottom">
      <div className={`${styles.flexCenter} sm:flex-row flex-col mb-8 w-full`}>
        <div className='flex-[1] flex  justify-start mr-10'>
          <img
            src={polygon}
            alt='NWF'
            className='mr-3 w-[60px] h-[72.14px] object-contain'
          />
          <img
            src={logo}
            alt='NWF'
            className='w-[266px] h-[72.14px] object-contain'
          />
        </div>

        <div className=''>
          <div className='flex md:mt-0 mt-6'>
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[40px] h-[40px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </SlideIn>
    <FadeIn delay={100}>
    <div className='w-full  justify-between  flex-col hidden sm:flex'>
      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white text-bold'>
        STAY INFORMED
      </p>
      {/* <form className='w-85 max-w-md  pb-6'>
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

      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white'>
        Ⓒ 2024 New Way Forward. All Rights Reserved.
      </p>
    </div>
    </FadeIn>
  </section>
);

export default Footer;
