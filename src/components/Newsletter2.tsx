import { map } from "../assets";
import styles from "../style";
import Form2 from "./Form2";

const Newsletter2 = () => {
  return (
    <div className='flex flex-col mm:flex-row justify-between items-center w-full 2xl:w-[70%] 2xl:ml-[15%] px-20'>
      <div className='grow flex-grow 3xl:'>
        <h3 className='text-[#43BCCD] text-[60px] text-center font-poppins font-semibold tracking-tight leading-widest w-[90%] mb-20 mr-20'>
          Contact Us
        </h3>
        <Form2 />
      </div>
      <div className='flex flex-col justify-center items-start md:w-[45%] 3xl:ml-40'>
        <p className='text-white font-poppins lg:text-[30px] md:text-[25px] sm:text-[20px] font-semibold leading-widest tracking-normal w-full mt-20 3xl:mb-10 lg:mb-5'>
          Innovative campaign solution, at all levels. Leave us a message 
          and get in touch
        </p>
        <img src={map} className='w-[655px] h-[377px] object-contain' />
      </div>
    </div>
  );
};

export default Newsletter2;
