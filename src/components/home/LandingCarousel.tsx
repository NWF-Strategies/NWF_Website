import React from 'react';
import styles from "../../style";
import carousel_img1 from "../../assets/home_carousel01.png";
import Button from '../Button';

const LandingCarousel = () => {
    return (
        <>
            <div className="items-start border border-white w-full h-fit">
                <div className="w-fit h-fit object-cover">
                    <div className="">
                        <img src={carousel_img1} alt="test" />
                    </div>
                </div>
            </div>
            <div className="absolute inset-y-[5rem] sm:inset-y-1/3 z-20 flex justify-center md:justify-start h-[80vh] min-h-[500px] max-h-[600px]">
                <div className="flex flex-col gap-[1rem] px-[4rem] text-center items-center md:text-left md:items-start">
                    <div className="text-white text-shadow-sm shadow-black">
                        {/* Title */}
                        <p className="text-[4rem] my-2 font-medium">TITLE TEST</p>
                        {/* Caption */}
                        <p className="text-[1.2rem] lg:w-3/4 2xl:w-3/5 my-3">
                            CAPTION TEST    
                        </p>
                    </div>
                    <Button label="The New Way Forward" />

                </div>
            </div>
        </>
    );
};

export default LandingCarousel;
