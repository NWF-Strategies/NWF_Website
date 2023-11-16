import React from "react";
import { Navbar, Footer, Careers } from "../components";
import styles from "../style";
// import {  } from '../components/Careers';

const Home = () => {
  return (
    <div className=''>
      <Careers />
      {/* <div className='h-[100hv]'>
          <div>
            <h1 className={`text-white`}>Solutions</h1>
            <p className={`text-white`}>We combine traditional outreach strategy with innovative technology.</p>
          </div>
          <ul>
            {solutions_tags.map((item) => (
              <li className='flex flex-row'>
                <img src={item.img} />
                <p className={`${styles.paragraph} text-white`}>{item.title}</p>
              </li>
            ))}
          </ul>
        </div> */}
    </div>
  );
};

export default Home;
