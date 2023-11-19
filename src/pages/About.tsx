import React from 'react'
import { Newsletter } from '../components'
import styles from '../style'
import { mission } from '../assets'
import { mission_tags } from '../constants'
const About = () => {
  return (
    <div className=''>
      <div className='relative h-fit py-[100px] blue__black__gradient flex flex-col items-center z-10'>
        <img
          src={mission}
          alt='gear'
          className='absolute left-0 overflow-hidden -z-10 lg:w-100 md:w-50 md:top-5 sm:top-5'
        />
        <div className='w-[100%] flex flex-col justify-center items-left lg:pl-[20%] md:pl-[20%] sm:pl-[20%] pl-[20%] lg:pr-[200px] md:pr-[200px] sm:pr-[50px] z-10 mb-[200px]'>
            <h1
                className={`text-[#43BCCD] font-poppins lg:text-[100px] md:text-[50px] sm:text-[40px] font-bold leading-normal text-left `}
            >
                Our Mission
            </h1>
            <p
                className={`text-white font-poppins lg:text-[25px] md:text-[20px] sm:text-[15px] font-normal leading-normal `}
            >
                At New Way Forward Strategies, we believe that Democracy starts with accessibility. We founded the New Way Forward to deploy pioneering technologies and strategies, providing change-makers the tools to operate cutting-edge, winning campaigns.
            </p>
        </div>
        <div className='flex flex-row justify-between items-center px-20 w-full'>
          <div className='card-container h-fit w-[45%]'>
            <p className='mission-card bg-[#185767] text-white px-[70px] py-[50px] rounded-lg relative z-10'>
              We strive to revolutionize campaigns one step at a time. Starting at the grassroots level, NWF exists to catalyze innovation in campaign strategy and technology.
            </p>
          </div>
          <div className='card-container w-[45%] h-fit'>
            <p className='mission-card bg-[#185767] text-white px-[70px] py-[50px] rounded-lg relative z-10'>
              By leveraging technology with our political experience, we support aspiring change-makers in their journey to generate positive impact in the United States.
            </p>
          </div>
        </div>
      </div>
      <div className='timeline-section pb-10 flex flex-col mb-10 w-full'>
        <div className='flex flex-row justify-center items-center pl-[50px] mb-20 py-10'>
          <div className='w-[55%] mr-10'>
            <h3 className='text-[#43BCCD] font-poppins text-[20px] font-semibold leading-normal tracking-widest'>Company</h3>
            <h2 className='text-white font-poppins text-[47px] font-normal tracking-tight leading-wide'>History</h2>
            <p className='text-white lg:text-[23px] md:text-[15px] sm:text-[10px] font-poppins font-normal tracking-tight leading-relaxed mb-4'><span className='font-semibold'>We're doers before consultants.</span> Out of Silicon Valley, we started as a group of individuals who wanted to make a change. With diverse, first-hand knowledge in effective campaigning, we recognized early on that key inefficiencies permeate the political sphere, inflating costs and threatening our Democrac's accessibility. For us, the New Way Forward for campaigning meant pushing the boundaries of traditional campaigning by pioneering implementations of data-driven technologies to power traditional outreach methodologies. </p>
            <p className='text-white lg:text-[23px] md:text-[15px] font-poppins font-normal tracking-tight leading-relaxed mb-4'>Today, we're developing tools to ensure campaigning is more accessible than ever. Fueled by our evaluative analysis of decades of strategical campaigning, we have developed cost-efficient, customizeable strategies to provide candidates the necessary resources to run highly-effective, people-powered campaigns. From high-quality outreach to machine-learning-powered targeting, each cent contributed to the New Way Forward will be reflected in your campaign's success. </p>
            <p className='text-white lg:text-[23px] md:text-[15px] font-poppins font-normal tracking-tight leading-relaxed mb-4'>Our team consists of leaders selected from a multitude of backgrounds, from quantitative research and technology companies to campaign strategy and field operation consultancies. By leveraging technology with our political experience, we support aspiring change-makers in their journey to generate positive impact in the United States. When you work with New Way Forward Strategies, you're working with a diverse group of passionate leaders, experienced consultants, leading engineers, and most importantly, people dedicated to bringing your campaign victory.</p>
          </div>
          <div className='h-fit px-5 w-[40%]'>
              <div className="timeline-container">
                  {mission_tags.map((event, index) => (
                      <div className="timeline-event ">
                          <h3 className='text-white'>{event.date}</h3>
                          <p className='text-white'>{event.description}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  )
};

export default About;
