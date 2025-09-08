import React, { ReactElement } from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';

interface LandingThumbnailProps {
    imageSrc: string;
    text: ReactElement;
    primaryButton?: string;
    primaryNavigate?: string;
    secondaryButton: string;
    secondaryNavigate: string;
}

const LandingThumbnail: React.FC<LandingThumbnailProps> = ({ imageSrc, text, primaryButton, primaryNavigate, secondaryButton, secondaryNavigate }) => {
    const navigate = useNavigate();
    
    const handlePrimaryClick = () => {
        if (primaryNavigate?.startsWith('http')) {
            window.open(primaryNavigate, '_blank');
        } else if (primaryNavigate && primaryNavigate !== "/") {
            navigate(primaryNavigate);
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 700);
        }
    }
    
    const handleSecondaryClick = () => {
        if (secondaryNavigate.startsWith('http')) {
            window.open(secondaryNavigate, '_blank');
        } else if (secondaryNavigate !== "/") {
            navigate(secondaryNavigate);
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 700);
        }
    }
    
    return (
        <>
            <div className="items-start w-full h-screen">
                <div className="h-full">
                    <img src={imageSrc} alt="Carousel Image" className='h-full w-full object-cover' />
                </div>
            </div>
            <div className="absolute inset-y-0 z-20 flex justify-center items-center text-center px-[25px] mt-20">
                <div className="flex flex-col rounded-none gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
                    <p className={`${styles.heading7} text-white font-medium`}>
                        {text}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        {primaryButton && (
                            <button 
                                className="relative overflow-hidden border border-yellow-500 text-yellow-500 hover:text-white font-poppins font-medium px-6 py-3 rounded-md transition-all duration-300 group" 
                                type='button' 
                                onClick={handlePrimaryClick}
                            >
                                <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">{primaryButton}</span>
                            </button>
                        )}
                        <button 
                            className="group relative font-poppins font-medium text-white hover:text-black transition-colors duration-300" 
                            type='button' 
                            onClick={handleSecondaryClick}
                        >
                            <div className="relative inline-flex items-center">
                                <div 
                                    className={`absolute left-0 w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center transition-all duration-300 ease-out overflow-hidden bg-transparent ${
                                        secondaryButton === "Getting Started" ? "group-hover:w-52" : "group-hover:w-72"
                                    }`}
                                >
                                    <span 
                                        className="absolute inset-0 opacity-0 transition-all duration-300 ease-out rounded-full group-hover:opacity-100 bg-cyan-400"
                                    ></span>
                                    <svg 
                                        className="absolute left-3 z-10 w-4 h-4 transition-all duration-300 text-cyan-400 group-hover:text-black"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <span className="relative z-10 pl-14 text-base">{secondaryButton}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingThumbnail;
