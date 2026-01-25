import { Newsletter } from "../../components";
import ak_dems_logo from "../../assets/ak_dems.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AlaskaCaseStudy = () => {
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
                    Alaska Democratic Party <br /><br />
                </h1>

                <img src={ak_dems_logo} alt="Alaska Democratic Party" className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:w-[460px]" style={{ position: 'absolute', left: 'calc(70%)', top: '215px' }} />
                <div className="hidden ml-[-4rem] xl:ml-0 lg:block w-[360px] 2xl:block sticky w-[360px] 2xl:w-[460px] border border-gray-400 p-6 list-disc top-[630px] 2xl:top-[740px]"
                    style={{ position: 'absolute', left: 'calc(70%)' }}>
                    <h3 className="text-lg font-bold text-white mt-4 mb-4">Key Items</h3>
                    <ul className="text-lg space-y-5 text-gray-300 list-disc pl-6">
                        <li className="list-item">State House flipped to Democratic control - the only legislative chamber in the country to flip in 2024</li>
                        <li className="list-item">Over 60 unique targeting universes for state house races</li>
                        <li className="list-item">27% increase in voter turnout in key districts</li>
                        <br />
                    </ul>
                </div>
            </div>

            <div className="max-w-[1100px] 2xl:max-w-[1200px] mx-auto px-4 lg:pr-[400px] relative">
                <h2 className="text-2xl text-white font-bold mb-4">The Challenge</h2>
                <div className="text-lg lg:text-xl text-white mb-12">
                    In the 2024 election cycle, the Alaska Democratic Party reached out to NWF Strategies to leverage our successful targeting strategies from Rep. Peltola's historic campaign while maintaining strict compliance standards between candidate and party operations. The challenge was clear: build a comprehensive digital IE program that could adapt to Alaska's unique geographic and demographic challenges while coordinating multiple campaign elements simultaneously.
                </div>

                <h2 className="text-2xl text-white font-bold mb-4">The Strategy</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    We developed a robust system that allowed the party to benefit from publicly available targeting data while maintaining complete separation from candidate operations.
                </div>

                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li><span className="font-bold text-greenBlue">Comprehensive Digital IE Program:</span> We created and managed over 60 unique targeting universes for state house races, each carefully crafted to address local issues and demographics. Real-time tracking allowed continuous optimization for maximum impact.</li>
                    <li><span className="font-bold text-greenBlue">Firewall & Compliance:</span> We created an internal firewall and clear protocols to allow the state party to transform public targeting frameworks into VAN targets for candidates, whilst maintaining strict separation from candidate operations.</li>
                    <li><span className="font-bold text-greenBlue">Precision Targeting:</span> We developed custom turnaround universes and precinct-level targeting that maximized efficiency in a state known for its challenging geography.</li>
                </ul>

                <h2 className="text-2xl text-white font-bold mb-4">Results & Impact</h2>
                <div className="text-lg lg:text-xl text-white mb-6">
                    The scope of our work expanded to include direct mail programs and rapid response protocols. We coordinated multiple campaign elements simultaneously, ensuring consistent messaging across all channels while maintaining strict compliance standards.
                </div>
                <ul className="list-disc list-inside text-lg lg:text-xl text-white space-y-6 mb-12">
                    <li>The Alaska State Senate remained in Democratic coalition control</li>
                    <li>The State House <span className="font-bold text-greenBlue">flipped to Democratic coalition control</span> - making it the only legislative chamber in the country to flip from Republican to Democratic control in 2024</li>
                    <li>Voter turnout in key districts increased by <span className="font-bold text-greenBlue">27%</span></li>
                    <li>Message penetration improved across all media channels</li>
                </ul>
                <h2 className="text-2xl text-white font-bold mb-4">Outcome</h2>
                <div className="text-lg lg:text-xl text-white mb-8">
                    The Alaska Democratic Party's historic success in 2024 demonstrates the power of sophisticated data-driven campaigns combined with strategic coordination. NWF's role in flipping the State House proves that innovative targeting and real-time optimization can overcome even the most challenging political landscapes.
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

export default AlaskaCaseStudy;

