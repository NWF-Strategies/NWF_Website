import { Newsletter } from "../../components";
import peltola_home from "../../assets/home_peltola.png";
import { Link } from "react-router-dom";


const PeltolaCaseStudy = () => {
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
                U.S. Rep. Mary Peltola (AK-AL) <br/><br/>
            </h1>

            <img src={peltola_home} alt="Mary Peltola" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
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
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            One month before the special election for Alaska's at-large congressional district, NWF Strategies was enlisted to rebuild the campaign of Mary Peltola, a former state representative. This election presented unique challenges, given the historically Republican-leaning electorate. Our expertise in voter targeting strategies, data-driven approaches, and real-time data analysis played a decisive role in achieving a historic victory.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Strategy & Field</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            NWF developed the voter targeting strategies that were utilized for all direct voter contact efforts (including phones, texts, and robocalls). Because this election was Alaska's first using ranked-choice voting, we had to work extra hard to ensure voters (who in some cases were voting for a Democrat for the first time ever) knew how to cast their ballots properly, which helped Rep. Peltola win in the second round and nearly win outright in the November general election.<br /><br />
            Working with the campaign field team, NWF helped craft branched scripts for the calls and robocall universes with targeted messaging designed to maximize appeal to specific groups of voters. NWF also refined campaign messaging on almost every key issue for use in direct voter contact, press communications, debates, endorsement questionnaires, digital content, and much more.<br /><br />
            Prior to NWF coming on board, the campaign had a marginal voter contact presence throughout the entire state. In two weeks, we mobilized NWF's fellowship program to make 40,000 calls to voters across Alaska. NWF's volunteer fellowship made up 50% of the campaign's calls. We worked in conjunction with the campaign's paid phone banking program, which made the other 50%.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Software & Data</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF Technology developed a suite of internal software tools to project voter behavior and turnout. From data-scraping and pre-processing to training machine learning (ML) models, NWF supplied invaluable technical support in campaign targeting and messaging.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's voter targeting increased low propensity voter participation by <span className="font-bold text-greenBlue">27%</span></li>
            <li>NWF's voter turnout modeling tools predicted turnout with <span className="font-bold text-greenBlue">0.3% error</span>, coming within 500 votes of projecting the actual turnout</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            Nearly all messaging was driven by NWF Technology's insights, with direct voter contact scripts, endorsement questionnaires, digital content, etc. refined by ML-powered tools' analyses on voter trends, social media sentiment, and proprietarily collected data.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's tracking system provided real-time visualizations and insights, allowing the campaign to quickly redeploy resources, address lagging precincts in early turnout
                <ul className="list-disc list-inside ml-6 mt-6">
                <li>Reversed a major turnout deficit in Juneau into the highest early voting area</li>
                </ul>
            </li>
            <li>NWF's data filtration system handled targeting of over <span className="font-bold text-greenBlue">200 unique universes</span> for digital ads in what became the largest congressional digital ad program nationwide</li>
            <li>NWF's tools fine tuned effective talking points and policies, increasing Republican and Swing Voter conversions by <span className="font-bold text-greenBlue">15%</span></li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Following the success of the 2022 House race, we worked with the Alaska Democratic Party for mobilization efforts during this year's Anchorage municipal elections. We made multiple rounds of calls and texts, especially to strong Democratic voters that sat out the 2022 midterm elections, and 27% of those targeted voters cast their ballots. Thanks to NWF's efforts, the candidate running in the most Republican district in the city of Anchorage outran President Biden's 2020 results by 12%.
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

export default PeltolaCaseStudy;