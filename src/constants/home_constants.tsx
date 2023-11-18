import styles from "../style";

import home_carousel01 from "../assets/home_carousel01.png";
import home_carousel02 from "../assets/home_carousel02.png";
import home_carousel03 from "../assets/home_carousel03.png";

import peltola_logo from "../assets/home_peltola-logo.png";

export const landing_carousel = [
    {
        img: home_carousel01,
    },
    {
        img: home_carousel02,
    },
    {
        img: home_carousel03,
    },
];

export const career_text = (
    <>
        <p className={styles.heading4}>CAREER</p>
        <p className={styles.heading3}>Join Us</p>
        <p className={styles.paragraph}>
            Power the New Way Forward of campaigning with us. From software engineers and researchers to campaign managers and canvassers, we have a team for you.
        </p>
    </>
);

export const peltola_text = (
    <>
        <p className={styles.heading4}>CASE STUDY</p>
        <p className={styles.heading3}>Mary Peltola</p>
        <p className={styles.paragraph}>
            How fish and freedom flipped a 50-year Republican stronghold against former governor Sarah Palin to seat the first Alaskan Native in Congress.
        </p>
        <img src={peltola_logo} alt="test"/>
    </>
);