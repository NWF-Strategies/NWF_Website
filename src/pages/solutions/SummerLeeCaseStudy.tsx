import { Newsletter } from "../../components";
import summer_photo from "../../assets/summer_lee.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SummerLeeCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 pt-28">
            <Link to="/solutions" className="text-white text-xl flex items-center">
                <span className="pr-2 pb-1 text-2xl">←</span>
                Solutions
            </Link>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 relative">  
            <h1 className="text-5xl lg:text-6xl text-white font-bold mb-6 pt-20">
                U.S. Rep. Summer Lee (PA-12) <br/><br/>
            </h1>

            <img src={summer_photo} alt="Summer Lee" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">First Black woman to represent Pennsylvania in Congress</li>
                    <li className="list-item">Progressive champion for working families and social justice</li>
                    <li className="list-item">NWF's community organizing reached 80,000+ voters across Pittsburgh</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            NWF Strategies played a pivotal role in Summer Lee's historic campaign for Pennsylvania's 12th Congressional District. Our comprehensive strategy combined innovative digital organizing with deep community engagement to help elect the first Black woman to represent Pennsylvania in Congress, overcoming significant funding disadvantages through grassroots power.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Strategy & Field</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            NWF developed a multi-faceted approach that centered community voices and progressive values. Our strategy focused on building authentic relationships with voters who had been traditionally overlooked by conventional campaigns, particularly in working-class neighborhoods and communities of color across Pittsburgh and surrounding areas.<br /><br />
            We implemented innovative voter contact techniques that went beyond traditional phone banking and door-to-door canvassing. Our team organized community listening sessions, town halls, and issue-focused roundtables that allowed Summer to directly engage with constituents about their concerns regarding healthcare, jobs, and education.<br /><br />
            Through our fellowship program and local partnerships, we mobilized a diverse coalition of young activists, labor unions, and community organizations. This grassroots army made contact with over 80,000 voters, helping to overcome a significant fundraising disadvantage against well-funded opponents.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Software & Data</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF Technology deployed cutting-edge tools to maximize voter outreach efficiency and impact. Our data science team built sophisticated models to identify likely supporters and persuadable voters, while our digital platform enabled seamless coordination of volunteer activities across the district.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's precision targeting helped increase youth voter turnout by <span className="font-bold text-greenBlue">35%</span> in key precincts</li>
            <li>Our voter modeling accurately predicted <span className="font-bold text-greenBlue">93%</span> of precinct-level results, enabling strategic resource deployment</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            Our integrated technology platform enabled real-time volunteer coordination and voter tracking. Campaign volunteers could access updated voter files, track contact attempts, and report feedback instantly through our mobile-optimized interface.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's digital organizing tools coordinated <span className="font-bold text-greenBlue">1,200+ volunteer shifts</span> across multiple campaigns and organizations
                <ul className="list-disc list-inside ml-6 mt-6">
                <li>Enabled seamless coordination between federal, state, and local progressive campaigns</li>
                </ul>
            </li>
            <li>Our text messaging platform delivered <span className="font-bold text-greenBlue">150,000+ targeted messages</span> with personalized content for different voter segments</li>
            <li>Advanced analytics tracked digital engagement across platforms, optimizing <span className="font-bold text-greenBlue">$75,000 in digital ad spend</span> for maximum impact</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Summer Lee's victory represented a triumph of grassroots organizing over establishment politics. NWF's role in this historic campaign demonstrates how technology and community organizing can work together to elect progressive champions who truly represent their constituents' values and needs.
            </div>
        </div>
        <div className="max-w-[160px] mx-auto mb-28 mt-32">
            <hr className="border-white" />
        </div>
      <Newsletter />
      <br /><br />
    </>
  );
};

export default SummerLeeCaseStudy;

