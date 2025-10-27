import { Newsletter } from "../../components";
import mcduffie_home from "../../assets/home_mcduffie.png";
import mcduffie_graph from "../../assets/McDuffieVotesByWard.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";


const McDuffieCaseStudy = () => {
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
            <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6 pt-20">
            Councilman Kenyan R. McDuffie (At-large)
            <br/><br/>
            </h1>

            <img src={mcduffie_home} alt="Kenyan McDuffie" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">Our fellows made over 113,000 calls and 331,214 texts.</li>
                    <li className="list-item">NWF wrote all of the voter contact scripts and messaging and provided targeting for the digital program.</li>
                    <li className="list-item">Ultimately, McDuffie won by racking up large margins against Silverman in Wards 5, 7, and 8.</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Kenyan McDuffie was the incumbent councilmember for Ward 5 of Washington, D.C.’s City Council. He vacated the seat to run for Attorney General, but was knocked off the ballot due to a legal technicality.<br /><br />
            After McDuffie was disqualified from the AG ballot, he mounted an independent campaign for one of the two at-large seats on the D.C. city council. This was a bold move, given two popular incumbents were running for re-election – Democrat Anita Bonds and independent Elissa Silverman, considered a rising star.<br /><br />
            Because Bonds was the lone Democrat on the ballot, it was all-but-guaranteed for her to come in first place and secure one of the two seats. Our strategy was to focus on holding Bonds below 35% of the vote and making sure McDuffie came in second, ahead of Silverman.<br /><br />
            Messaging surrounding this strategy included emphasizing McDuffie’s Democratic Party roots, and reminding voters of his incumbency and accomplishments.<br /><br />
            NWF accomplished this by aggressively targeting Wards 7 and 8, home to a heavy Black population, and building large margins there. We also used existing name recognition in Ward 5, McDuffie’s home turf, to reinforce our firewall. By running a vigorous voter contact campaign, NWF kept Silverman’s margins down throughout the rest of the city, especially in Wards 3 and 4.<br /><br />
            Other than small volunteer canvasses, the campaign's strategy, messaging, and logistics were built and run by NWF. Our fellows made over <span className="font-bold text-greenBlue">113,000 calls</span> and <span className="font-bold text-greenBlue">331,214 texts,</span>, with targeted messaging to different voters across the city.<br /><br />
            NWF wrote all of the voter contact scripts and messaging and provided targeting for the digital program (with edits and revisions from the campaign, of course).<br /><br />
            Ultimately, McDuffie won by racking up large margins against Silverman in Wards 5, 7, and 8. He held strong in the whiter wards (1, 2, 3, and 6) and ran ahead of her in Ward 4. Many voters in Bonds’ voting base defected to McDuffie, particularly in Wards 7 and 8, reflecting our successful conversion of Black voters – although she finished in first as expected, she was held to under 33% of the vote.<br /><br />
            </div>
            <img src={mcduffie_graph} alt="McDuffie Graph" className="relative mx-auto mt-[-1rem] h-[21.5rem] w-[788px] object-cover overflow-hidden" />
        </div>
        <div className="max-w-[160px] mx-auto mb-28 mt-32">
            <hr className="border-white" />
        </div>
      <Newsletter />
      <br /><br />
    </div>
  );
};

export default McDuffieCaseStudy;