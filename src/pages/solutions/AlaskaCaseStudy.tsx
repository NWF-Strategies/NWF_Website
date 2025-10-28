import { Newsletter } from "../../components";
import ak_dems_logo from "../../assets/ak_dems.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AlaskaCaseStudy = () => {
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
                Alaska Democratic Party <br/><br/>
            </h1>

            <img src={ak_dems_logo} alt="Alaska Democratic Party" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">State House flipped to Democratic control - the only legislative chamber in the country to flip in 2024</li>
                    <li className="list-item">Over 60 unique targeting universes for state house races</li>
                    <li className="list-item">27% increase in voter turnout in key districts</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            In the 2024 election cycle, the Alaska Democratic Party reached out to NWF Strategies to leverage our successful targeting strategies from Rep. Peltola's historic campaign while maintaining strict compliance standards between candidate and party operations. The challenge was clear: build a comprehensive digital IE program that could adapt to Alaska's unique geographic and demographic challenges while coordinating multiple campaign elements simultaneously.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Digital Strategy & Targeting</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Our partnership began with a comprehensive digital IE program. This wasn't just about broad reach - we created and managed over 60 unique targeting universes for state house races, each carefully crafted to address local issues and demographics. Our real-time performance tracking allowed us to continuously optimize these campaigns, ensuring maximum impact for every dollar spent.<br /><br />
            The challenge intensified when the party sought to utilize targeting insights from Rep. Peltola's successful campaign. We developed a robust system that allowed the party to benefit from publicly available targeting data while maintaining complete separation from candidate operations. This required creating an internal firewall and clear communication protocols. Our campaign team built targeting frameworks based on public data, which the state party could then transform into VAN targets and distribute to candidates statewide.<br /><br />
            To execute and reach voters, we created custom turnaround universes and developed precinct-level targeting that maximized efficiency in a state known for its challenging geography. Daily performance metrics allowed us to adjust strategies in real-time, while our voter file integration ensured we were always working with the most current data.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Results & Impact</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            The scope of our work expanded to include direct mail programs and rapid response protocols. We coordinated multiple campaign elements simultaneously, ensuring consistent messaging across all channels while maintaining strict compliance standards. Our custom API development and automated reporting systems provided visibility into campaign performance, allowing for quick strategic adjustments when needed.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>The Alaska State Senate remained in Democratic coalition control</li>
            <li>The State House <span className="font-bold text-greenBlue">flipped to Democratic coalition control</span> - making it the only legislative chamber in the country to flip from Republican to Democratic control in 2024</li>
            <li>Voter turnout in key districts increased by <span className="font-bold text-greenBlue">27%</span></li>
            <li>Message penetration improved across all media channels</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            The Alaska Democratic Party's historic success in 2024 demonstrates the power of sophisticated data-driven campaigns combined with strategic coordination. NWF's role in flipping the State House proves that innovative targeting and real-time optimization can overcome even the most challenging political landscapes.
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

export default AlaskaCaseStudy;

