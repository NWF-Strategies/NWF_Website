import { map } from "../assets";
import Form from "./Form";
import FadeIn from './FadeIn'

const Newsletter = () => {
  return (
    <FadeIn duration = {500} delay = {500}>
      <div className='flex flex-col sm:flex-row justify-between items-center px-16 w-full 3xl:ml-[18%] 3xl:w-[64%] 3xl:mt-20'>
        <div className='flex flex-col justify-center items-start md:w-[45%]'>
          <h3 className='text-[#43BCCD] text-[20px] font-poppins font-semibold tracking-tight leading-widest w-full'>
            Contact Us
          </h3>
          <p className='text-white font-poppins lg:text-[30px] md:text-[25px] sm:text-[20px] font-semibold leading-widest tracking-normal w-full'>
            Innovative campaign solutions, at all levels. Leave us a message and
            get in touch
          </p>
          <img src={map} className='w-[655px] h-[377px] object-contain' />
        </div>
        <Form />
      </div>
    </FadeIn>
  );
};

export default Newsletter;
