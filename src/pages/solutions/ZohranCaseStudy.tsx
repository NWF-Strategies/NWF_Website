import { Newsletter } from "../../components";
import zohran_photo from "../../assets/zohran_speaking.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ZohranCaseStudy = () => {
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
                Zohran Mamdani (NY-36) <br/><br/>
            </h1>

            <img src={zohran_photo} alt="Zohran Mamdani" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">Progressive champion for working families in Queens</li>
                    <li className="list-item">Advocate for social justice and economic equality</li>
                    <li className="list-item">NWF's grassroots mobilization reached over 50,000 voters</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            NWF Strategies partnered with Zohran Mamdani's campaign to help secure his position as a leading progressive voice in the New York State Assembly. Our comprehensive approach combined grassroots organizing with cutting-edge technology to mobilize diverse communities across Queens and build a powerful coalition for change.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Strategy & Field</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            NWF developed targeted outreach strategies that resonated with the diverse communities in Zohran's district. Our team crafted culturally sensitive messaging that addressed key issues like housing affordability, healthcare access, and economic justice. We worked closely with local community leaders to ensure authentic engagement and build lasting relationships.<br /><br />
            Our field operation focused on deep canvassing techniques that allowed for meaningful conversations about progressive policies. We trained volunteers to discuss complex issues like Medicare for All and the Green New Deal in accessible ways, helping voters understand how these policies would directly impact their lives.<br /><br />
            Through our fellowship program, we mobilized over 200 volunteers who made direct contact with more than 50,000 voters across the district. This grassroots effort was crucial in building the broad coalition that powered Zohran's campaign to victory.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Software & Data</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF Technology deployed advanced analytics to identify and engage progressive voters while also reaching persuadable moderates. Our data-driven approach helped optimize resource allocation and maximize voter contact efficiency.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's voter targeting algorithms increased turnout in key precincts by <span className="font-bold text-greenBlue">22%</span></li>
            <li>Our predictive modeling identified <span className="font-bold text-greenBlue">15,000+ persuadable voters</span> who ultimately supported progressive candidates</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            Our technology stack enabled real-time tracking of voter engagement and sentiment analysis across social media platforms. This allowed the campaign to quickly respond to emerging issues and adapt messaging strategies on the fly.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>NWF's digital organizing platform facilitated <span className="font-bold text-greenBlue">500+ volunteer shifts</span> and coordinated activities across multiple languages
                <ul className="list-disc list-inside ml-6 mt-6">
                <li>Translated materials into Spanish, Arabic, and Bengali to reach diverse communities</li>
                </ul>
            </li>
            <li>Our rapid response system helped counter misinformation with <span className="font-bold text-greenBlue">same-day fact-checking</span> and community education</li>
            <li>Data-driven ad targeting reached <span className="font-bold text-greenBlue">75,000+ young voters</span> through strategic social media campaigns</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            The success of Zohran's campaign demonstrated the power of combining authentic grassroots organizing with sophisticated technology. NWF's integrated approach helped build a sustainable progressive infrastructure that continues to drive positive change in Queens and serve as a model for progressive campaigns nationwide.
            </div>
        </div>
        <div className="max-w-[160px] mx-auto mb-28 mt-32">
            <hr className="border-white" />
        </div>
      <Newsletter />
      <br /><br />
    </ div>
  );
};

export default ZohranCaseStudy;

