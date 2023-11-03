import React from 'react'
import { solutions_tags } from '../constants';
import {Navbar, Footer} from '../components';
import styles from '../style';
import { gear } from '../assets';
const Solutions = () => {
  return (
    <div className='blue__black__gradient'>
        <Navbar/>
        <div className='relative h-[100hv] flex flex-col justify-center items-center z-10 mt-10'>
            <img src={gear} alt="gear" className='absolute left-0 overflow-hidden z-0'/>
            <div className='w-[100%] flex flex-col justify-center items-left md:ml-[700px] z-10'>
                <div>
                    <h1 className={`text-[#43BCCD] font-poppins text-[100px] font-bold leading-normal text-left `}>Solutions</h1>
                    <p className={`text-white font-poppins text-[33px] font-normal leading-normal `}>We combine traditional outreach strategy with innovative technology.</p>
                </div>
                <ul className='md:ml-[100px] mt-10'>
                    {solutions_tags.map((item) =>(
                        <li className='flex flex-row justify-start items-center w-full'>
                            <img src={item.img}/>
                            <p className={`text-white font-poppins text-[33px] font-normal leading-normal text-center ml-5`}>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Solutions