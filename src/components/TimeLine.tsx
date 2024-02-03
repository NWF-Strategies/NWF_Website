import React from "react";
import { mission_tags } from "../constants";

const TimeLine: React.FC = () => (
  <div className='pl-10 w-[95%]'>
    <h3 className='text-[#43BCCD] ml-[-10px] my-5 mb-5 font-poppins text-[25px] font-semibold leading-normal tracking-widest'>Company History</h3>
    <div className="timeline-container h-full">
      {mission_tags.map((event) => (
        <div className="timeline-event ">
          <h3 className='text-white'>{event.date}</h3>
          <p className='text-white'>{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TimeLine;
