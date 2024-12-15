import { Newsletter } from "../../components";
import ventura_logo from "../../assets/logo_ventura.png";
import ventura_graph from "../../assets/VenturaVsPritzker.png"
import { Link } from "react-router-dom";


const VenturaCaseStudy = () => {
  return (
    <>
        <div className="max-w-[1200px] mx-auto px-4 pt-28">
            <Link to="/solutions" className="text-white text-xl flex items-center">
                <span className="pr-2 pb-1 text-2xl">←</span>
                Solutions
            </Link>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 relative">  
            <h1 className="text-5xl lg:text-6xl text-white font-bold mb-6 pt-20">
            State Sen. Rachel Ventura (IL-43)
            <br/><br/>
            </h1>

            <img src={ventura_logo} alt="Ventura Logo" className="hidden 2xl:block w-56" style={{ position: 'absolute', left: 'calc(70% + 32px)', top: '325px' }} />
            <div className="hidden 2xl:block sticky w-[460px] border border-gray-400 p-6 list-disc" 
                style={{ position: 'absolute', left: 'calc(70% + 32px)', top: '440px' }}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">Ventura ran against an appointed incumbent who outraised her 65-to-1</li>
                    <li className="list-item">Our field program out-contacted Mattson 15-to-1, powered by the NWF fellowship program's massive calling and texting infrastructure</li>
                    <li className="list-item">Our data-first approach helped her overcome the institutional disadvantage to win a 15-point victory.</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Ventura ran against an appointed incumbent who outraised her 65-to-1 and had the backing of the state party, labor unions, both U.S. Senators and the governor. Our data-first approach helped her overcome the institutional disadvantage to win a 15-point victory.<br /><br />
            As a county supervisor, Ventura had some residual name recognition - especially in the constituency she represented. Rather than go negative against her opponent, we chose to attack the corruption of the Democratic machine.
            </div>
            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Strategy & Field</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            Our strategy from the beginning was to portray Ventura as an independent leader who delivered results for her community. To accomplish this, we designed 3 mailers focusing on her support from pro-choice groups, including Planned Parenthood and NARAL. We particularly highlighted the fact that she had no strings attached to the corruption of the machine. The fourth and final mailer deliberately deflated all of the negative attacks by making fun of the "junk mail" (Mattson sent 25 mailers) and the inaccuracies they contained.<br /><br />
            Our field program out-contacted Mattson 15-to-1, powered by the NWF fellowship program's massive calling and texting infrastructure. We also ran volunteer coordination for Ventura’s existing volunteer network.<br /><br />
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Software & Data</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF leveraged an in-house data scraper to automate weekly reports based on social media performance. This in turn allowed NWF to optimize and fine-tune various models  developed for previous campaigns and organizations. <br /><br />
            By leveraging multivariate regression on features such as previous election history, sentiment analysis (captured by NWF’s Natural Language Processing tools), digital media impressions, and spending magnitude, NWF  developed an end-to-end solution to generate curated messaging and optimal communication modes. <br /><br />
            Despite being outraised 18-to-1, NWF’s software facilitated a voter outreach operation outperforming Mattson <span className="font-bold text-greenBlue">15-to-1.</span><br /><br />
            Through these efforts, Ventura defeated Mattson in the Democratic primary, 57.4% to 42.5%, and her margin of victory in the general election was nearly identical to that of the governor’s race in the district.
            </div>
            <img src={ventura_graph} alt="Ventura Graph" className="relative mx-auto mt-20 hidden 2xl:block h-[25rem] object-contain" />
        </div>
        <div className="max-w-[160px] mx-auto mb-28 mt-32">
            <hr className="border-white" />
        </div>
      <Newsletter />
      <br /><br />
    </>
  );
};

export default VenturaCaseStudy;