import { solutions_tags, solutions_notes } from "../constants";
import { Newsletter } from "../components";
import { gear } from "../assets";
import styles from "../style";
const Solutions = () => {
  return (
    <div>
      <div className='relative py-[100px] h-fit blue__black__gradient flex flex-col justify-center z-10'>
        <img
          src={gear}
          alt='gear'
          className='absolute left-0 overflow-hidden -z-10 lg:w-100 md:w-50 md:top-0 sm:top-0 xs:-top-10 '
        />
        <div className='w-[90%] mt-20 flex flex-col items-left pl-[20%] mr-5 z-10'>
          <div>
            <h1
              className={styles.heading1}
            >
              Solutions
            </h1>
            <p
              className={`text-white font-poppins 3xl:text-[40px] lg:text-[23px] md:text-[20px] sm:text-[15px] font-normal leading-normal `}

            >
              We combine traditional outreach strategy with innovative
              technology.
            </p>
          </div>
          <ul className='lg:ml-[100px] md:ml-[50px] sm:ml-[40px] mt-10'>
            {solutions_tags.map((item) => (
              <li className='flex flex-row justify-start items-center w-full'>
                <img src={item.img} className='lg:scale-1 md:scale-75 mx-3' />
                <p
                  // className={`text-white font-poppins lg:text-[33px] md:text-[30px] sm:text-[22px] font-normal leading-normal text-center ml-5`}
                  //fix this
                  className={`${styles.heading3} text-[20px]`}

                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='pb-10 flex justify-center items-center flex-col'>
        <div className='h-fit py-10 px-10 mb-10 3xl:w-[42%] 3xl:ml-[1%] 2xl:w-[70%] xl:ml-[2%] xl:w-[98%] lg:w-[100%] md:w-[100%]'>
          <ul>
            {solutions_notes.map((item, index) => (
              <li className='h-fit flex flex-row w-full py-1'>
                <div
                  className={`flex justify-center items-center w-1/2 ${
                    index % 2 === 0 ? "order-first" : "order-last"
                  } px-10`}
                >
                  <img src={item.img} className='sm:scale-[80%]' />
                </div>

                <div className='w-1/2 flex flex-col justify-center items-start'>
                  <div className='flex flex-row items-center justify-start w-full my-2'>
                    <img src={item.icon} className='hidden sm:block w-[60px] h-[60px] mx-3' />
                    <p className={styles.heading3}>
                      {item.title}
                    </p>
                  </div>
                  <p className={styles.paragraph}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className = "3xl:w-[62%]">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
