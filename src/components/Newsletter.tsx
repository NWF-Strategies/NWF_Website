import { map } from "../assets";
import Form from "./Form";
import FadeIn from './FadeIn'

const Newsletter = () => {
  return (
    <FadeIn duration = {400} delay = {400}>
      <div className='flex flex-col sm:flex-row pl-4 justify-between items-center max-w-7xl mx-auto pr-8'>
        <div className='flex flex-col justify-center items-start md:w-[50%]'>
          <h3 className='font-poppins font-semibold	xs:text-20px text-[#43BCCD] tracking-[0.15px] mb-2'>
            CONTACT US
          </h3>
          <p className='text-white font-poppins md:text-[25px] sm:text-[20px] font-normal leading-widest tracking-normal mb-6'>
            Innovative campaign solutions, at all levels. Leave us a message and
            get in touch!
          </p>
          <img src={map} className='w-[655px] h-[377px] ml-[-6px] px-4 object-contain' />
        </div>
        <Form />
      </div>
    </FadeIn>
  );
};

export default Newsletter;
