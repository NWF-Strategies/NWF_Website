import { solutions_tags, solutions_notes } from "../constants";
import { Newsletter } from "../components";
import { gear } from "../assets";
const Solutions = () => {
  return (
    <div className=''>
      <div className='relative h-fit py-[100px] blue__black__gradient flex flex-col items-center z-10'>
        <img
          src={gear}
          alt='gear'
          className='absolute left-0 overflow-hidden -z-10 lg:w-100 md:w-50 md:top-0 sm:top-0 xs:-top-10 '
        />
        <div className='w-[100%] flex flex-col justify-center items-left lg:pl-[20%] md:pl-[20%] sm:pl-[20%] pl-[20%] z-10'>
          <div>
            <h1
              className={`text-[#43BCCD] font-poppins lg:text-[100px] md:text-[50px] sm:text-[40px] font-bold leading-normal text-left `}
            >
              Solutions
            </h1>
            <p
              className={`text-white font-poppins lg:text-[25px] md:text-[20px] sm:text-[15px] font-normal leading-normal `}
            >
              We combine traditional outreach strategy with innovative
              technology.
            </p>
          </div>
          <ul className='lg:ml-[100px] md:ml-[50px] sm:ml-[40px] mt-10'>
            {solutions_tags.map((item) => (
              <li className='flex flex-row justify-start items-center w-full'>
                <img src={item.img} className='lg:scale-1 md:scale-75' />
                <p
                  className={`text-white font-poppins lg:text-[33px] md:text-[30px] sm:text-[22px] font-normal leading-normal text-center ml-5`}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='teal__black__gradient pb-10 flex justify-center items-center flex-col'>
        <div className='h-fit py-10 px-10 mb-10 lg:w-[70%] md:w-[90%]'>
          <ul>
            {solutions_notes.map((item, index) => (
              <li className='h-fit flex flex-row w-full py-1'>
                <div
                  className={`flex justify-center items-center w-1/2 ${
                    index % 2 === 0 ? "order-first" : "order-last"
                  } px-10`}
                >
                  <img src={item.img} className='scale-[80%]' />
                </div>

                <div className='w-1/2 flex flex-col justify-center items-start'>
                  <div className='flex flex-row items-center justify-start w-full'>
                    <img src={item.icon} className='w-[60px] h-[60px]' />
                    <h3 className='ml-3 text-white font-poppins lg:text-[45px] md:text-[30px] sm:text-[20px] font-normal leading-normal tracking-normal'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='text-white lg:text-[23px] md:text-[15px] sm:text-[13px] font-normal font-poppins'>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
