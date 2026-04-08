import { JoinUs } from '../components'
import { mission_tags } from '../constants'
import scribbleUnderlineBlue from "../assets/scribble_underline_blue.svg";
import scribbleCircleBlue from "../assets/scribble_circle_blue.svg";
import styles from '../style';
import whatWeDoBackground from '../assets/home_carousel03c_darkened.png';
import ellipseDotsAbout from '../assets/ellipse_dots_about.svg';
import ellipseDotsAboutBottom from '../assets/ellipse_dots_about_bottom.svg';
import SlideIn from '../components/SlideInAnimation';
import FadeIn from '../components/FadeIn';

const About = () => {
  return (
    <div className='doublepillorangegradient'>
      <div className='relative h-fit pt-[100px] flex flex-col items-center z-10 bg-gray-100'>
        <div className='w-[90%] max-w-[900px] mt-2 flex flex-col justify-center items-center z-10 mb-[120px]'>
          <SlideIn direction='top' duration={200}>
            <h1 className="text-[#43BCCD] font-lato text-[26px] tracking-tighter font-semibold mb-3">
              OUR MISSION
            </h1>
          </SlideIn>
          <SlideIn direction='top' delay={350} duration={200}>
            <p className={`text-black font-poppins px-12 md:px-16 lg:px-20 lg:text-[20px] md:text-[17px] sm:text-[13px] tracking-wide font-normal leading-normal text-center`}>
              At New Way Forward Strategies, we believe that Democracy starts with <span className="relative inline-block overflow-visible font-[900]"
                style={{
                  WebkitTextStroke: "0.8px black",
                  WebkitTextFillColor: "black",
                }}>
                accessibility
                <img
                  src={scribbleUnderlineBlue}
                  alt=""
                  className="absolute inset-0 w-full h-full scale-x-[0.98] scale-y-[1.25] left-[1%] top-[45%] pointer-events-none"
                />
              </span>. We founded the New Way Forward to deploy<span className="font-[900]"
                style={{
                  WebkitTextStroke: "0.8px black",
                  WebkitTextFillColor: "black",
                }}>
                {" "}pioneering technologies and strategies
              </span>, providing change-makers the tools to operate cutting-edge,
              <span className="font-[900]"
                style={{
                  WebkitTextStroke: "0.8px black",
                  WebkitTextFillColor: "black",
                }}>
                {" "}
                <span className="relative inline-block overflow-visible">
                  winning
                  <img
                    src={scribbleCircleBlue}
                    alt=""
                    className="absolute inset-0 w-full h-full scale-x-[1.4] scale-y-[1.25] left-[6%] top-[-6%] pointer-events-none"
                  />
                </span> campaigns
              </span>.
            </p>
          </SlideIn>
        </div>
      </div>
      <div className='relative h-fit pt-[200px] pb-[100px] flex flex-col items-start z-10 doublepillgradient leading-snug'
        style={{
          backgroundImage: `url(${whatWeDoBackground})`,
          backgroundSize: '2300px auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}>
        <SlideIn>
          <div className="w-[90%] mx-16 pr-16 lg:pr-0 lg:w-2/5 lg:ml-48">
            <h1 className={`${styles.paragraph2} !text-[24px]`}>WHAT WE DO</h1>
            <div className="bg-white h-[1px] w-80 mb-10" />
            <p className={`${styles.paragraph2} !text-[20px]`}>
              We strive to
              <span className="font-[900]"
                style={{
                  WebkitTextStroke: "0.2px white",
                  WebkitTextFillColor: "white",
                }}>
                &nbsp;revolutionize campaigns&nbsp;
              </span>one step at a time. Starting at the grassroots level, NWF exists to
              <span className="font-[900]"
                style={{
                  WebkitTextStroke: "0.2px white",
                  WebkitTextFillColor: "white",
                }}>
                &nbsp;catalyze innovation&nbsp;
              </span>in campaign strategy and technology.
            </p>
            <div className="h-3" />
            <p className={`${styles.paragraph2} !text-[20px]`}>
              By
              <span className="font-[900]"
                style={{
                  WebkitTextStroke: "0.2px white",
                  WebkitTextFillColor: "white",
                }}>
                &nbsp;leveraging technology with our political experience
              </span>, we support aspiring change-makers in their journey to generate positive impact in the United States.
            </p>
          </div>
        </SlideIn>
      </div>
      <FadeIn delay={100} duration={700}>
        <div className="px-6 sm:px-10 pt-20 pb-16 relative">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-white font-poppins text-[44px] font-normal tracking-tight mb-2">Our Team</h2>
            <div className="bg-[#43BCCD] h-[2px] w-24 mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sathvik Kaliyur", title: "CEO & Co-Founder" },
                { name: "Jonathan Li", title: "COO & Co-Founder" },
                { name: "Ashley Caleb", title: "Director of Fundraising" },
                { name: "Ayat Al Tamimi", title: "Data & Fundraising Manager" },
                { name: "Liam Borg", title: "Fundraising Manager" },
                { name: "Nathan Jeffrey", title: "Calltime Manager" },
                { name: "Sarah Brewer", title: "Calltime Manager" },
                { name: "Erica Henderson", title: "Digital Manager" },
                { name: "Mary Pham", title: "Organizing Manager" },
              ].map((member) => (
                <div key={member.name} className="border border-white/10 rounded-lg px-6 py-5 bg-white/5 hover:bg-white/10 transition-colors duration-200">
                  <p className="text-white font-poppins font-semibold text-[17px] mb-1">{member.name}</p>
                  <p className="text-[#43BCCD] font-poppins text-[14px] font-normal tracking-wide">{member.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className='flex flex-col-reverse md:flex-row leading-relaxed items-stretch gap-10'>
            <div className='w-full md:w-[75%]'>
              <h2 className='text-white font-poppins text-[44px] font-normal tracking-tight leading-tight mb-5'>Our History</h2>
              <p className="leading-[25px] font-poppins font-normal text-primary text-[17px] xl:text-[19px] mb-4 leading-relaxed"><span className='font-semibold'>We're doers before consultants.</span> Out of Silicon Valley, we started as a group of individuals who wanted to make a change. With diverse, first-hand knowledge in effective campaigning, we recognized early on that key inefficiencies permeate the political sphere, inflating costs and threatening our Democracy's accessibility. </p>
              <p className="leading-[25px] font-poppins font-normal text-primary text-[17px] xl:text-[19px] mb-4 leading-relaxed">For us, the New Way Forward for campaigning meant pushing the boundaries of traditional campaigning by pioneering implementations of data-driven technologies to power traditional outreach methodologies. </p>
              <p className="leading-[25px] font-poppins font-normal text-primary text-[17px] xl:text-[19px] mb-4 leading-relaxed">Our team consists of leaders selected from a multitude of backgrounds, from quantitative research and technology companies to campaign strategy and field operation consultancies. By leveraging technology with our political experience, we support aspiring change-makers in their journey to generate positive impact in the United States. </p>
              <p className="leading-[25px] font-poppins font-normal text-primary text-[17px] xl:text-[19px] mb-4 leading-relaxed">Today, we're developing tools to ensure campaigning is more accessible than ever. Fueled by our evaluative analysis of decades of strategical campaigning, we have developed cost-efficient, customizeable strategies to provide candidates the necessary resources to run highly-effective, people-powered campaigns.  </p>
              <p className="leading-[25px] font-poppins font-normal text-primary text-[17px] xl:text-[19px] mb-4 leading-relaxed">From high-quality outreach to machine-learning-powered targeting, each cent contributed to the New Way Forward will be reflected in your campaign's success. </p>
            </div>
            <SlideIn direction="top" delay={400} duration={2000}>
              <div className='hidden md:block w-[270px] shrink-0 mt-0'>
                <div className="timeline-container h-full">
                  {mission_tags.map((event) => (
                    <div className="timeline-event">
                      <h3 className='text-white font-bold mb-1 text-[22px]'>{event.date}</h3>
                      <p className='text-white text-[18px]'>{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
            </div>
          </div>
          <img src={ellipseDotsAbout} className="hidden md:block absolute top-0 right-0 z-10 w-[2000px] pointer-events-none" />
          <img src={ellipseDotsAboutBottom} className="hidden md:block absolute bottom-0 sm:left-[-64px] z-10 w-[2000px] pointer-events-none" />
        </div>
      </FadeIn>
      <JoinUs />
    </div>
  )
};

export default About;
