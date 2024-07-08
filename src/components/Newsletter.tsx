import { map } from "../assets";
import Form from "./Form";

const Newsletter = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center w-full px-20 3xl:ml-[20%] 3xl:w-[60%] xl:w-[100%]'>
      <div className='flex flex-col justify-center items-start md:w-[45%]'>
        <h3 className='text-[#43BCCD] text-[20px] font-poppins font-semibold tracking-tight leading-widest w-full'>
          Contact Us
        </h3>
        <p className='text-white font-poppins lg:text-[30px] md:text-[25px] sm:text-[20px] font-semibold leading-widest tracking-normal w-full'>
          Innovative campaign solution, at all levels. Leave us a message and
          get in touch
        </p>
        <img src={map} className='w-[655px] h-[377px] object-contain' />
      </div>
      <Form />
    </div>
  );
};

export default Newsletter;
