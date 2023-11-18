import React, { ReactElement } from 'react';
import styles from '../../style';

import venturaLogo from '../../assets/home_ventura-logo.png';
import akdemsLogo from '../../assets/home_akdems-logo.png';
import peltolaLogo from '../../assets/home_peltola-logo.png';
import mcduffieLogo from '../../assets/home_mcduffie-logo.png';

const FirmStatistics = () => {
    const logos = [venturaLogo, akdemsLogo, peltolaLogo, mcduffieLogo];

    const stats = [
        { 
            number: "10+ states",
            text: "impacted."
        },
        { 
            number: "75%",
            text: "election success rate."
        },
        { 
            number: "7.5 million+",
            text: "reached."
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center my-8'>
            <div className="flex flex-col sm:flex-row items-center">
                {stats.map((content, index) => (
                    <div className='items-center text-center py-10 mx-10'>
                        <p className={`${styles.heading5}`}>{content.number}</p>
                        <p className={`${styles.paragraph}`}>{content.text}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4'>
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center my-2">
                        <img src={logo} alt={`Logo ${index + 1}`} className='h-[9vw] min-h-[75px] px-2'/>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FirmStatistics;
