import { Newsletter } from "../../components";
import bush_logo from "../../assets/logo_bush.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CoriBushCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className = "doublepillgradient">
        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 pt-28">
            <Link to="/solutions" className="text-white text-xl flex items-center">
                <span className="pr-2 pb-1 text-2xl">←</span>
                Solutions
            </Link>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 relative">  
            <h1 className="text-5xl lg:text-6xl text-white font-bold mb-6 pt-20">
                Rep. Cori Bush (MO-01) <br/><br/>
            </h1>

            <img src={bush_logo} alt="Rep. Cori Bush" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">First Black woman to represent Missouri in Congress</li>
                    <li className="list-item">Transformed from debt-ridden campaign to $3M quarter</li>
                    <li className="list-item">Raised over $100,000 per day in final two weeks</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            After our success with Rep. Lee's race, we were asked to raise money for Rep. Bush's re-election race. We started by revamping the finance plan and strategy for the campaign. The campaign was badly in debt, and raised much less than similar campaigns in Q4 of 2023 and Q1 of 2024. The challenge was clear: transform a struggling finance operation into a fundraising powerhouse capable of competing at the highest level.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Digital Strategy Overhaul</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            In Q2, we coordinated their email and text teams, and built a more cohesive digital strategy. NWF provided more than 25,000 contacts for text and email. These donated contacts paid for NWF's entire cost, demonstrating immediate ROI from our partnership.<br /><br />
            Our digital coordination went beyond simple list management. We implemented sophisticated segmentation strategies, A/B testing protocols, and personalized messaging that dramatically increased conversion rates. The integration of email and text campaigns created a seamless donor journey that kept supporters engaged and motivated to contribute.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">High-Dollar Event Program</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF built a high-dollar event program which started with multiple $75,000 fundraising trips in NYC and California. We cultivated relationships with major donors, organized intimate gatherings, and created compelling asks that resonated with supporters who wanted to see Rep. Bush's voice remain in Congress.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>After achieving a <span className="font-bold text-greenBlue">$1,000,000 quarter in Q2</span>, NWF cultivated virtual and in-person fundraisers almost every day for the last two months of the campaign</li>
            <li>We were able to raise <span className="font-bold text-greenBlue">$3,000,000 in Q3 of 2024</span></li>
            <li>Became so efficient in raising that we were raising more than <span className="font-bold text-greenBlue">$100,000 per day</span> for the last two weeks of the campaign</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            The transformation of Rep. Bush's fundraising operation demonstrates how strategic planning, digital innovation, and high-dollar cultivation can work together to overcome significant financial challenges. From a debt-ridden campaign to a multi-million dollar quarter, NWF's comprehensive approach proved that with the right strategy and execution, even the most difficult fundraising situations can be turned around.
            </div>
        </div>
        <div className="max-w-[160px] mx-auto mb-28 mt-32">
            <hr className="border-white" />
        </div>
      <Newsletter />
      <br /><br />
    </div>
  );
};

export default CoriBushCaseStudy;

