import { Newsletter } from "../../components";
import zohran_photo from "../../assets/zohran_speaking.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ZohranCaseStudy = () => {
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
                    Zohran for NYC <br /><br />
                </h1>

                <img src={zohran_photo} alt="Zohran Mamdani NYC 2025 campaign run by NWF Strategies" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
                <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
                    style={{ position: 'absolute', left: 'calc(70%)' }}>
                    <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                    <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                        <li className="list-item">2025 NYC Democratic Mayoral Primary</li>
                        <li className="list-item">Unlocked over $7 million in public matching funds</li>
                        <li className="list-item">96.1% small-donor rate</li>
                        <br />
                    </ul>
                </div>
            </div>

            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">
                <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
                <div className="text-lg lg:text-xl text-white mb-12">
                    In the 2025 New York City Democratic Mayoral Primary, Assemblymember Zohran Mamdani entered the race facing a profound resource disparity. His primary opponent, former Governor Andrew Cuomo, benefited from universal name recognition and the support of the "Fix the City" Super PAC, which deployed over $16.4 million in independent expenditures.<br /><br />
                    With corporate and real estate interests heavily consolidated around the opposition, the Mamdani campaign could not rely on traditional high-dollar fundraising networks. To remain viable, the campaign needed to fully capitalize on New York City’s Campaign Finance Board (CFB) matching funds program, which matches eligible small-dollar donations at a rate of 8-to-1. The challenge was not just raising money, but building a compliance-heavy, high-volume operation capable of processing thousands of small transactions to unlock millions in public funding.
                </div>

                <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    NWF Strategies was retained to design, build, and manage the campaign’s financial infrastructure. Our strategy prioritized operational efficiency and rapid scalability to bridge the spending gap.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Database Enrichment & Targeting:</span> We bypassed the typical "cold start" problem by leveraging NWF’s proprietary data assets. We enriched the campaign’s initial lists with a targeted database of over 20,000 high-propensity progressive donors, allowing for immediate, high-yield outreach from Day 1.</li>
                    <li><span className="font-bold text-greenBlue">Integrated Call Time Operations:</span> We restructured the candidate's call time to focus on volume. Rather than chasing "max-out" donors, the candidate’s time was optimized to secure the critical mass of small donors needed to qualify for matching funds thresholds in every district.</li>
                    <li><span className="font-bold text-greenBlue">Multi-Channel Conversion:</span> We implemented a "surround sound" approach where direct mail, SMS, and email programs were synchronized with call time. This ensured that donors who were unreachable by phone were captured through digital channels, maximizing the conversion rate of the prospect universe.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Execution & Results</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    The financial operation proved to be the most efficient in the field. By strictly adhering to a small-dollar strategy, NWF Strategies ensured the campaign remained liquid and competitive despite the 15-to-1 spending disparity in independent expenditures.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Early Momentum:</span> In the critical first 80 days, the infrastructure processed $642,339 from 6,502 unique donors, setting a record for a single filing period in the 2025 race and establishing immediate credibility.</li>
                    <li><span className="font-bold text-greenBlue">Public Funds Maximization:</span> The operation successfully unlocked over $7 million in public matching funds. The campaign became the fastest in NYC history to hit the $8 million spending limit, a testament to the speed and accuracy of the compliance and fundraising teams.</li>
                    <li><span className="font-bold text-greenBlue">Grassroots Scale:</span> The campaign achieved a 96.1% small-donor rate (contributions under $250) with an average donation of just $82, proving that a decentralized donor base could fund a winning citywide effort.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
                <div className="text-lg lg:text-xl text-white mb-8">
                    The financial stability provided by NWF Strategies allowed the campaign to allocate resources confidently to field and media operations. This fiscal discipline was a decisive factor in Zohran Mamdani’s historic victory, making him the first Muslim and South Asian mayor of New York City.
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

