import { Newsletter } from "../../components";
import kansas_logo from "../../assets/logo_kansas.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const KansasCaseStudy = () => {
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
                    Kansas Democratic Party <br /><br />
                </h1>

                <img src={kansas_logo} alt="Kansas Democratic Party" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
                <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
                    style={{ position: 'absolute', left: 'calc(70%)' }}>
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
                <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
                <div className="text-lg lg:text-xl text-white mb-12">
                    When the Kansas Democratic Party approached NWF Strategies in January 2024, they faced a critical challenge: their candidate support system needed modernization. The existing infrastructure couldn't keep pace with growing candidate interest, and valuable opportunities were being lost due to delayed responses and fragmented resources. We undertook a comprehensive transformation of their entire operation, creating a streamlined digital ecosystem that dramatically improved candidate recruitment, training, and support.
                </div>

                <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    We implemented a revolutionary candidate intake process and infrastructure to modernize KDP's operations.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Automated Intake:</span> We developed an automated system where candidates could instantly access training materials, receive VoteBuilder credentials, and complete compliance documentation.</li>
                    <li><span className="font-bold text-greenBlue">Resource Center:</span> We created the state's first centralized campaign resource center, including detailed training materials, customizable templates, and an interactive video library.</li>
                    <li><span className="font-bold text-greenBlue">15-Minute Guarantee:</span> We instituted a 15-minute response guarantee for all candidate inquiries, supported by a 24/7 system providing instant access to campaign expertise.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Technology & Infrastructure</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    NWF Technology deployed cutting-edge tools to support the Kansas Democratic Party's operational transformation. Our integrated platform became the backbone of their statewide candidate support system.
                </div>
                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li>Automated candidate onboarding reduced processing time by <span className="font-bold text-greenBlue">90%</span></li>
                    <li>Centralized resource library served <span className="font-bold text-greenBlue">100+ candidates</span> across all levels of office</li>
                    <li>Real-time support system maintained <span className="font-bold text-greenBlue">15-minute response time</span> for candidate inquiries</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
                <div className="text-lg lg:text-xl text-white mb-8">
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

