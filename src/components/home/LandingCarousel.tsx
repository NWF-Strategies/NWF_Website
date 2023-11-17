import React from 'react';
import styles from "../../style";
import carousel_img1 from "../../assets/images/home_carousel01.png";
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
            <Button label="The New Way Forward"/>
        </>
    );
};

export default LandingCarousel;
