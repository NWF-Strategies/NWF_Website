import React from 'react'
import { solutions_tags } from '../constants';
import {Navbar, Footer, Newsletter} from '../components';
import styles from '../style';
import { gear } from '../assets';
const Solutions = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='blue__black__gradient relative h-[100vh] flex flex-col items-center z-10'>
            <img src={gear} alt="gear" className='absolute left-0 overflow-hidden z-0 lg:w-100 md:w-50 md:top-20 sm:top-10'/>
            <div className='absolute w-[100%] flex flex-col justify-center items-left lg:ml-[700px] md:ml-[200px] sm:ml-[200px] z-10 lg:top-[150px] md:top-[150px] sm:top-[150px]'>
                <div>
                    <h1 className={`text-[#43BCCD] font-poppins lg:text-[100px] md:text-[50px] sm:text-[40px] font-bold leading-normal text-left `}>Solutions</h1>
                    <p className={`text-white font-poppins lg:text-[33px] md:text-[30px] sm:text-[22px] font-normal leading-normal `}>We combine traditional outreach strategy with innovative technology.</p>
                </div>
                <ul className='lg:ml-[100px] md:ml-[50px] sm:ml-[40px] mt-10'>
                    {solutions_tags.map((item) =>(
                        <li className='flex flex-row justify-start items-center w-full'>
                            <img src={item.img} className='lg:scale-1 md:scale-75'/>
                            <p className={`text-white font-poppins lg:text-[33px] md:text-[30px] sm:text-[22px] font-normal leading-normal text-center ml-5`}>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='teal__black__gradient'>
            <div className='h-[1000px]'>

            </div>
            <Newsletter />
            <Footer />  
        </div>
    </div>
  );
};

export default Solutions;
