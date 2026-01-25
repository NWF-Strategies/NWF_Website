import { Newsletter } from "../../components";
import peltola_home from "../../assets/home_peltola.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const PeltolaCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="doublepillgradient">
            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 pt-28 doublepillgradient">
                <Link to="/solutions" className="text-white text-xl flex items-center">
                    <span className="pr-2 pb-1 text-2xl">←</span>
                    Solutions
                </Link>
            </div>

            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 relative">
                <h1 className="text-5xl lg:text-6xl text-white font-bold mb-6 pt-20">
                    U.S. Rep. Mary Peltola (AK-AL) <br /><br />
                </h1>

                <img src={peltola_home} alt="Mary Peltola" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
                <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
                    style={{ position: 'absolute', left: 'calc(70%)' }}>
                    <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                    <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                        <li className="list-item">First Democrat in over 50 years to represent Alaska</li>
                        <li className="list-item">First Alaskan Native to ever serve in Congress</li>
                        <li className="list-item">NWF's data filtration system handled targeting of over 200 unique universes for digital ads</li>
                        <br />
                    </ul>
                </div>
            </div>

            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">
                <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
                <div className="text-lg lg:text-xl text-white mb-12">
                    One month before the special election for Alaska's at-large congressional district, NWF Strategies was enlisted to rebuild the campaign of Mary Peltola. This election presented unique challenges, given the historically Republican-leaning electorate. Our expertise in voter targeting strategies, data-driven approaches, and real-time data analysis played a decisive role in achieving a historic victory.
                </div>

                <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    NWF developed the voter targeting strategies utilized for all direct voter contact efforts, adapting to Alaska's first ranked-choice voting election.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Ranked-Choice Education:</span> We worked hard to ensure voters knew how to cast their ballots properly in the new system, which helped Rep. Peltola win in the second round and nearly win outright in the November general election.</li>
                    <li><span className="font-bold text-greenBlue">Branched Scripting:</span> Working with the field team, we crafted branched scripts with targeted messaging designed to appeal to specific groups of voters, refining messaging on almost every key issue.</li>
                    <li><span className="font-bold text-greenBlue">Rapid Mobilization:</span> In just two weeks, we mobilized NWF's fellowship program to make 40,000 calls to voters across Alaska, making up 50% of the campaign's total calls.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Software & Data</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    NWF Technology developed a suite of internal software tools to project voter behavior and turnout. From data-scraping and pre-processing to training machine learning (ML) models, NWF supplied invaluable technical support.
                </div>
                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6">
                    <li>NWF's voter targeting increased low propensity voter participation by <span className="font-bold text-greenBlue">27%</span></li>
                    <li>NWF's voter turnout modeling tools predicted turnout with <span className="font-bold text-greenBlue">0.3% error</span>, coming within 500 votes of projecting the actual turnout</li>
                </ul>
                <div className="text-lg lg:text-xl text-white mb-6">
                    Nearly all messaging was driven by insights from ML-powered tools on voter trends and social media sentiment.
                </div>
                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li>NWF's tracking system provided real-time visualizations, allowing the campaign to <span className="font-bold text-greenBlue">reverse a major turnout deficit in Juneau</span> into the highest early voting area.</li>
                    <li>NWF's data filtration system handled targeting of over <span className="font-bold text-greenBlue">200 unique universes</span> for digital ads.</li>
                    <li>NWF's tools fine tuned effective talking points and policies, increasing Republican and Swing Voter conversions by <span className="font-bold text-greenBlue">15%</span></li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
                <div className="text-lg lg:text-xl text-white mb-8">
                    Following the success of the 2022 House race, we continued to work with the Alaska Democratic Party. Thanks to NWF's efforts, the candidate running in the most Republican district in Anchorage outran President Biden's 2020 results by 12%.
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

export default PeltolaCaseStudy;