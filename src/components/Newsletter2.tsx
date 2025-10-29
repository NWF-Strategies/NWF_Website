import Form from "./Form";
import styles from "../style";
import { socialMedia_blue } from "../constants";
import calendar from "../assets/calendar_icon.svg";
import FadeIn from "./FadeIn";
import SlideIn from "./SlideInAnimation";

const Newsletter2 = () => {
  return (
    <FadeIn>
      <div className="w-full max-w-8xl mx-auto mt-8 px-20">
        <div className="flex justify-between items-start mt-8">
          <div className="flex flex-col justify-start items-start">
            <p className={`${styles.heading4} text-white text-lg tracking-wide`}>INTERESTED IN OUR SERVICES?</p>
            <a
              href="https://calendar.app.google/JLvGBnHtjfQcufP49"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mr-3 text-xl text-[#43BCCD] font-[600] flex items-center lg:gap-3 border-2 border-[#43BCCD] rounded-lg px-6 py-3 hover:bg-[#43BCCD] hover:bg-opacity-10 transition-all duration-300 group"
            >
              <img
                src={calendar}
                alt="Calendar"
                className="h-10 w-10"
              />
              <span>Book an Intro Call</span>
              <svg 
                className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className='mr-0 ml-auto flex gap-6 mt-10'>
            {socialMedia_blue.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[50px] h-[50px] object-contain cursor-should-hover cursor-pointer !text-blue ${
                  index !== socialMedia_blue.length - 1 ? "mr-4" : "mr-0 pb-2"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
        <div className='h-2 w-24 mt-20 mb-8 bg-[#43BCCD]' />
        <div className='w-full flex flex-col xl:flex-row justify-between items-start'>
          <SlideIn direction="left" duration={500} delay={300}>
            <div className='w-full xl:w-3/5 '>
              <h3 className='text-[#43BCCD] text-[50px] 2xl:text-[60px] text-start font-poppins font-[1000] tracking-wide leading-none w-[90%] mr-20' 
                  style={{
                    WebkitTextStroke: "3px #43BCCD", 
                    WebkitTextFillColor: "#43BCCD", 
                  }}>
                Contact Us
              </h3>
              <p className={`${styles.heading4} mt-10 !leading-relaxed text-white font-[400] mb-16 xl:mb-0 text-lg xl:text-xl tracking-wide pr-16 2xl:pr-64`}>
                Send us any questions or inquiries via the contact form, or email us at info@nwfstrategies.com.
              </p> 
            </div>
          </SlideIn>
          <Form className="w-[95%] sm:w-[90%] xl:w-[45%]  !2xl:max-w-none !2xl:w-auto" disableMdWidth />
        </div>
      </div>
    </FadeIn>
  );
};

export default Newsletter2;
