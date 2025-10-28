import { Newsletter } from "../../components";
import kansas_logo from "../../assets/logo_kansas.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const KansasCaseStudy = () => {
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
                Kansas Democratic Party <br/><br/>
            </h1>

            <img src={kansas_logo} alt="Kansas Democratic Party" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
            <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]" 
                style={{ position: 'absolute', left: 'calc(70%)'}}>
                <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                    <li className="list-item">Comprehensive transformation of candidate support infrastructure</li>
                    <li className="list-item">15-minute response guarantee for candidate inquiries</li>
                    <li className="list-item">First centralized campaign resource center in Kansas</li>
                    <br />
                </ul>
            </div>
        </div>

        <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">  
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            When the Kansas Democratic Party approached NWF Strategies in January 2024, they faced a critical challenge: their candidate support system needed modernization. The existing infrastructure couldn't keep pace with growing candidate interest, and valuable opportunities were being lost due to delayed responses and fragmented resources. We undertook a comprehensive transformation of their entire operation, creating a streamlined digital ecosystem that dramatically improved candidate recruitment, training, and support.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Candidate Support Revolution</h2>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            The first change we implemented was revolutionizing their candidate intake process. We developed an automated system that transformed how KDP processes new candidates. Prospective candidates could now instantly access training materials, receive VoteBuilder credentials, and complete compliance documentation - all through a streamlined digital platform.<br /><br />
            Building on this foundation, we created the state's first centralized campaign resource center. This comprehensive hub included detailed training materials, customizable templates, and best practices documentation drawn from successful campaigns. The cornerstone of this resource center was our interactive video library, walking candidates through every aspect of campaign operations, from fundraising fundamentals to advanced field strategies.<br /><br />
            Most crucially, we instituted a 15-minute response guarantee for all candidate inquiries. This transformed KDP's ability to support candidates, particularly first-time runners who often needed quick guidance on urgent campaign decisions. Our support system operated 24/7, providing candidates with instant access to campaign expertise, technology support, and strategic guidance.
            </div>

            <h2 className="text-2xl lg:text-3xl text-white font-bold mb-6">Technology & Infrastructure</h2>
            <div className="text-lg lg:text-xl text-white mb-6 max-w-3xl">
            NWF Technology deployed cutting-edge tools to support the Kansas Democratic Party's operational transformation. Our integrated platform became the backbone of their statewide candidate support system.
            </div>
            <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-6 max-w-3xl">
            <li>Automated candidate onboarding reduced processing time by <span className="font-bold text-greenBlue">90%</span></li>
            <li>Centralized resource library served <span className="font-bold text-greenBlue">100+ candidates</span> across all levels of office</li>
            <li>Real-time support system maintained <span className="font-bold text-greenBlue">15-minute response time</span> for candidate inquiries</li>
            </ul>
            <div className="text-lg lg:text-xl text-white mb-16 max-w-3xl">
            The transformation of Kansas Democratic Party's candidate support infrastructure demonstrates how modernizing party operations can dramatically improve candidate recruitment, training, and success rates. By combining innovative technology with strategic support systems, NWF helped build a sustainable foundation for Democratic organizing in Kansas for years to come.
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

export default KansasCaseStudy;

