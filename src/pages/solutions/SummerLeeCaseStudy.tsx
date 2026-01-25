import { Newsletter } from "../../components";
import summer_photo from "../../assets/summer_lee.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SummerLeeCaseStudy = () => {
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
                    Summer Lee <br /><br />
                </h1>

                <img src={summer_photo} alt="Summer Lee" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
                <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
                    style={{ position: 'absolute', left: 'calc(70%)' }}>
                    <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                    <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                        <li className="list-item">2024 Re-election Cycle</li>
                        <li className="list-item">Raised over $3 million cycle-to-date</li>
                        <li className="list-item">Outperformed PA congressional delegation</li>
                        <br />
                    </ul>
                </div>
            </div>

            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">
                <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
                <div className="text-lg lg:text-xl text-white mb-12">
                    Despite her national profile as a leading progressive voice, Congresswoman Summer Lee entered the 2024 cycle with a fundraising operation raising less than $100,000 per quarter. This financial baseline fueled a media narrative that she was vulnerable to a well-funded primary challenge, particularly given the threat of opposition spending from groups that had spent millions against her in 2022. To secure her seat and shift the narrative, the campaign needed to rapidly professionalize its operation and demonstrate overwhelming financial strength.
                </div>

                <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    NWF Strategies was contracted to take over the entire fundraising operation, including finance planning, digital management, and event execution. We moved the campaign from a reactive posture to a high-tempo, proactive schedule.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Aggressive Event Programming:</span> We instituted a rigorous candidate schedule involving one to two fundraising trips every weekend, maximizing the Congresswoman's time to capture support across the district and beyond.</li>
                    <li><span className="font-bold text-greenBlue">Digital Revitalization:</span> We executed a complete overhaul of the campaign's email and SMS infrastructure, optimizing donor segmentation to increase conversion rates without burning out the list.</li>
                    <li><span className="font-bold text-greenBlue">Local Mobilization:</span> To counter the narrative of "outside money," we heavily emphasized local, community-based fundraising events, grounding the financial numbers in tangible district support.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Execution & Results</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    The operational overhaul produced immediate, market-moving results.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Dominating the Delegation:</span> In Q4 of 2023, the revamped operation raised $1,000,000. This total outperformed every other member of the Pennsylvania congressional delegation, including all four incumbents in competitive swing seats.</li>
                    <li><span className="font-bold text-greenBlue">Sustained Growth:</span> Leveraging the momentum from Q4, the team raised another $1,000,000 in Q1 of 2024, bringing the cycle-to-date total to over $3,000,000.</li>
                    <li><span className="font-bold text-greenBlue">Narrative Shift:</span> The fundraising totals effectively killed the "vulnerability" narrative in the press, transforming a perceived weakness into an undeniable strength.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
                <div className="text-lg lg:text-xl text-white mb-8">
                    By modernizing the fundraising infrastructure and enforcing a disciplined event schedule, NWF Strategies ensured Summer Lee had the resources to define the race on her terms. The financial firewall we built not only deterred significant opposition spending but also cemented her position as a formidable incumbent in Pennsylvania politics.
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

export default SummerLeeCaseStudy;

