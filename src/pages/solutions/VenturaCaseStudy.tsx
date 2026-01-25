import { Newsletter } from "../../components";
import ventura2_home from "../../assets/home_ventura2.png";
import ventura_graph from "../../assets/VenturaVsPritzker.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";


const VenturaCaseStudy = () => {
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
        <h1 className="text-5xl lg:text-6xl text-white font-bold mb-6 pt-20">
          State Sen. Rachel Ventura (IL-43)
          <br /><br />
        </h1>
        <img src={ventura2_home} alt="Rachel Ventura" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
        <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
          style={{ position: 'absolute', left: 'calc(70%)' }}>
          <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
          <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
            <li className="list-item">Ventura ran against an appointed incumbent who outraised her 65-to-1</li>
            <li className="list-item">Our field program out-contacted Mattson 15-to-1, powered by the NWF fellowship program's massive calling and texting infrastructure</li>
            <li className="list-item">Our data-first approach helped her overcome the institutional disadvantage to win a 15-point victory.</li>
            <br />
          </ul>
        </div>
      </div>

      <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">
        <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
        <div className="text-lg lg:text-xl text-white mb-12">
          Ventura ran against an appointed incumbent who outroaised her 65-to-1 and had the backing of the state party, labor unions, both U.S. Senators and the governor. Our data-first approach helped her overcome the institutional disadvantage to win a 15-point victory.
        </div>

        <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
        <div className="text-lg lg:text-xl text-white mb-6">
          As a county supervisor, Ventura had some residual name recognition. Rather than go negative, we chose to attack the corruption of the Democratic machine and portray her as an independent leader.
        </div>

        <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
          <li><span className="font-bold text-greenBlue">Independent Branding:</span> We designed mailers focusing on her support from pro-choice groups like Planned Parenthood, highlighting that she had no strings attached to the corruption of the machine.</li>
          <li><span className="font-bold text-greenBlue">Mailer Program:</span> We cleverly deflated negative attacks by making fun of the opponent's "junk mail" in a final mailer that corrected their inaccuracies.</li>
          <li><span className="font-bold text-greenBlue">Massive Outreach:</span> Our field program out-contacted Mattson 15-to-1, powered by the NWF fellowship program's massive calling and texting infrastructure.</li>
        </ul>

        <h2 className="text-2xl text-white font-bold mb-4">Software & Data</h2>
        <div className="text-lg lg:text-xl text-white mb-6">
          NWF leveraged an in-house data scraper to automate weekly reports based on social media performance, optimizing models developed for previous campaigns.
        </div>
        <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
          <li>By leveraging multivariate regression on features such as election history and sentiment analysis, NWF generated curated messaging and optimal communication modes.</li>
          <li>Despite being outroaised 18-to-1, NWF’s software facilitated a voter outreach operation outperforming Mattson <span className="font-bold text-greenBlue">15-to-1.</span></li>
        </ul>

        <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
        <div className="text-lg lg:text-xl text-white mb-8">
          Through these efforts, Ventura defeated Mattson in the Democratic primary, 57.4% to 42.5%, and her margin of victory in the general election was nearly identical to that of the governor’s race in the district.
        </div>
        <img src={ventura_graph} alt="Ventura Graph" className="relative mx-auto mt-20 h-[25rem] object-contain" />
      </div>
      <div className="max-w-[160px] mx-auto mb-28 mt-32">
        <hr className="border-white" />
      </div>
      <Newsletter />
      <br /><br />
    </div>
  );
};

export default VenturaCaseStudy;