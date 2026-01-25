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
    <div className="doublepillgradient">
      <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 pt-28">
        <Link to="/solutions" className="text-white text-xl flex items-center">
          <span className="pr-2 pb-1 text-2xl">←</span>
          Solutions
        </Link>
      </div>

      <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 relative">
        <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6 pt-20">
          Councilman Kenyan R. McDuffie (At-large)
          <br /><br />
        </h1>

        <img src={mcduffie_home} alt="Kenyan McDuffie" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
        <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
          style={{ position: 'absolute', left: 'calc(70%)' }}>
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
        <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
        <div className="text-lg lg:text-xl text-white mb-12">
          Kenyan McDuffie was the incumbent councilmember for Ward 5 of Washington, D.C.’s City Council. After being disqualified from the Attorney General ballot due to a technicality, he mounted an independent campaign for one of the two at-large seats. This was a bold move against two popular incumbents – Democrat Anita Bonds and independent Elissa Silverman.
        </div>

        <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
        <div className="text-lg lg:text-xl text-white mb-6">
          Because Bonds was the lone Democrat on the ballot, it was all-but-guaranteed for her to come in first. Our strategy was to focus on holding Bonds below 35% of the vote and making sure McDuffie came in second, ahead of Silverman.
        </div>

        <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
          <li><span className="font-bold text-greenBlue">Vote Share Management:</span> We messaged to emphasize McDuffie’s Democratic Party roots and his accomplishments. By running a vigorous voter contact campaign, we kept Silverman’s margins down in Wards 3 and 4.</li>
          <li><span className="font-bold text-greenBlue">Targeted Mobilization:</span> We aggressively targeted Wards 7 and 8, home to a heavy Black population, and used existing name recognition in his home turf of Ward 5 to reinforce our firewall.</li>
          <li><span className="font-bold text-greenBlue">Voter Contact:</span> NWF wrote targeted scripts and provided targeting for the digital program. Our fellows made over <span className="font-bold text-greenBlue">113,000 calls</span> and <span className="font-bold text-greenBlue">331,214 texts</span>.</li>
        </ul>

        <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
        <div className="text-lg lg:text-xl text-white mb-8">
          Ultimately, McDuffie won by racking up large margins against Silverman in Wards 5, 7, and 8. He held strong in the whiter wards and ran ahead of her in Ward 4. Many voters in Bonds’ voting base defected to McDuffie, helping him secure the seat.
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