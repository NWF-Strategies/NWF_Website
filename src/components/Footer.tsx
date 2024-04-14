import styles from "../style";
import { logo, polygon } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`flex-col px-10 border-t-2 border-white bg-lightGrey py-4`}
  >
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

    <div className='w-full  justify-between  flex-col hidden sm:flex'>
      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white text-bold'>
        STAY INFORMED
      </p>

      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white'>
        Ⓒ 2024 New Way Forward. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
