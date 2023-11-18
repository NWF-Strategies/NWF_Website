import styles from "../style";

import home_carousel_1 from "../assets/home_carousel_1.png";
import home_carousel_2 from "../assets/home_carousel_2.png";
import home_carousel_3 from "../assets/home_carousel_3.png";


export const landing_carousel = [
    {
        img: home_carousel_1,
    },
    {
        img: home_carousel_2,
    },
    {
        img: home_carousel_3,
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