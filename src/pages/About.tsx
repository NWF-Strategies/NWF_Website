import { Newsletter } from '../components'
import { mission } from '../assets'
import { mission_tags } from '../constants'
import styles from '../style';
const About = () => {
  return (
    <>
      <div className='relative h-fit pt-[100px] blue__black__gradient flex flex-col items-center z-10'>
        <img
          src={mission}
          alt='gear'
          className='absolute left-0 overflow-hidden -z-10 lg:w-100 md:w-50 md:top-5 sm:top-5'
        />
        <div className='w-[90%] mt-20 flex flex-col justify-center items-left pl-[10%] lg:pr-[200px] md:pr-[200px] sm:pr-[50px] z-10 mb-[50px]'>
            <h1
                className={styles.heading1}
            >
                Our Mission
            </h1>
            <p
                className={`text-white font-poppins lg:text-[23px] md:text-[20px] sm:text-[15px] font-normal leading-ormal `}
            >
                At New Way Forward Strategies, we believe that Democracy starts with accessibility. We founded the New Way Forward to deploy pioneering technologies and strategies, providing change-makers the tools to operate cutting-edge, winning campaigns.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center px-18 w-[80%] mb-12 2xl:ml-[1%] 2xl:w-[50%]'>
            {/* <p className='mission-card bg-[#185767] text-white md:px-[70px] md:py-[50px] xs:px-[15px] xs:py-[10px] xxs:px-[15px] xxs:py-[10px] rounded-lg relative z-10'> */}
          <p className={`${styles.callout2} text-white w-[90%] lg:text-[18px] h-full 2xl:mr-10`}>
              We strive to revolutionize campaigns one step at a time. Starting at the grassroots , NWF catalyzes innovation in campaign strategy and technology.
            </p>
            {/* <p className='mission-card bg-[#185767] text-white md:px-[70px] md:py-[50px] xs:px-[15px] xs:py-[10px] xxs:px-[15px] xxs:py-[10px] rounded-lg relative z-10'> */}
          <p className={`${styles.callout2} text-white w-[90%] lg:text-[18px] h-full 2xl:ml-10`}>
              By leveraging technology with our political experience, we support aspiring change-makers in their journey to generate positive impact in the United States.
            </p>
        </div>
      </div>
      <div className={`${styles.marginX} items-center`}>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center md:mb-20 py-10 h-fit  2xl:ml-[17%] 2xl:w-[70%] xl:ml-4'>
          <div className='my-5 w-[80%]'>
            <h2 className='text-white font-poppins text-[47px] font-normal tracking-tight leading-relaxed'>About Us</h2>
            <p className={`${styles.paragraph} text-[16px] mb-4 leading-relaxed`}><span className='font-semibold'>We're doers before consultants.</span> Out of Silicon Valley, we started as a group of individuals who wanted to make a change. With diverse, first-hand knowledge in effective campaigning, we recognized early on that key inefficiencies permeate the political sphere, inflating costs and threatening our Democracy's accessibility. </p>
            <p className={`${styles.paragraph} text-[16px] mb-4 leading-relaxed`}>For us, the New Way Forward for campaigning meant pushing the boundaries of traditional campaigning by pioneering implementations of data-driven technologies to power traditional outreach methodologies. </p>
            <p className={`${styles.paragraph} text-[16px] mb-4 leading-relaxed`}>Our team consists of leaders selected from a multitude of backgrounds, from quantitative research and technology companies to campaign strategy and field operation consultancies. By leveraging technology with our political experience, we support aspiring change-makers in their journey to generate positive impact in the United States. </p>
            <p className={`${styles.paragraph} text-[16px] mb-4 leading-relaxed`}>Today, we're developing tools to ensure campaigning is more accessible than ever. Fueled by our evaluative analysis of decades of strategical campaigning, we have developed cost-efficient, customizeable strategies to provide candidates the necessary resources to run highly-effective, people-powered campaigns.  </p>
            <p className={`${styles.paragraph} text-[16px] mb-4 leading-relaxed`}>From high-quality outreach to machine-learning-powered targeting, each cent contributed to the New Way Forward will be reflected in your campaign's success. </p>
          </div>
          <div className='pl-10'>
            <h3 className='text-[#43BCCD] ml-[-10px] sm:my-5 mb-5 font-poppins text-[25px] font-semibold leading-normal tracking-widest'>Company History</h3>
              <div className="timeline-container h-full">
                  {mission_tags.map((event) => (
                      <div className="timeline-event ">
                          <h3 className='text-white'>{event.date}</h3>
                          <p className='text-white'>{event.description}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
      <div className = "3xl:ml-[1%] xl:w-[100%]">
        <Newsletter />
      </div>
    </>
  )
};

export default About;
