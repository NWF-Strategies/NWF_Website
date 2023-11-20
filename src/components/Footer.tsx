import styles from "../style";
import { logo, polygon } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter}  flex-col px-10 border-t-2 border-white py-4`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-[1] flex flex-row justify-start mr-10'>
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
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>

    <div className='w-full flex justify-between  md:flex-col flex-col  ]'>
      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white text-bold'>
        STAY INFORMED
      </p>
      <form className='w-85 max-w-md  pb-6'>
        <div className='flex h-10'>
          <input
            className='bg-black-gradient appearance-none border border-secondary rounded-s w-full  text-white focus:outline-none focus:bg-white text-center'
            type='email'
            placeholder='Sign Up for our latest opportunities. '
          ></input>

          <button
            type='submit'
            className=' justify-center items-center  bg-[#43BCCD] rounded-e text-white font-bold px-3'
          >
            subscribe
          </button>
        </div>
      </form>
      <p className='font-poppins font-normal text-left text-[14px] leading-[27px] text-white'>
        Ⓒ 2023 New Way Forward. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
