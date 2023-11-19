import styles from "../style";

import home_carousel01 from "../assets/home_carousel01.png";
import home_carousel02 from "../assets/home_carousel02.png";
import home_carousel03 from "../assets/home_carousel03.png";

import peltola_logo from "../assets/home_peltola-logo.png";

import careers_role01 from "../assets/careers_role01.png"
import careers_role02 from "../assets/careers_role02.png"
import careers_role03 from "../assets/careers_role03.png"
import careers_role04 from "../assets/careers_role04.png"

export const landing_carousel = [
    home_carousel01, home_carousel02,home_carousel03,
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

const strategyContent = (
    <>
        <p className={styles.heading4}>STRATEGY</p>
        <p className={styles.heading3}>Strategic Consultants</p>
        <ol className={styles.paragraph}>
            <li>Interface 1-on-1 with clientele to support day-to-day operations</li>
            <li>Lead clientele acquisition efforts</li>
        </ol>
    </>
);

const researchContent = (
    <>
        <p className={styles.heading4}>RESEARCH</p>
        <p className={styles.heading3}>Research Consultants</p>
        <ol className={styles.paragraph}>
            <li>Analyze and interpret key internal insights to deliver actionable strategies</li>
            <li>Coordinate with Strategic Consultants to support clientele</li>
        </ol>
    </>
);

const softwareContent = (
    <>
        <p className={styles.heading4}>SOFTWARE</p>
        <p className={styles.heading3}>Software Engineers</p>
        <ol className={styles.paragraph}>
            <li>Design, develop, and deploy application software to support internal and external operations</li>
            <li>Test and drive iterations by interfacing with stakeholders</li>
        </ol>
    </>
);

const dataContent = (
    <>
        <p className={styles.heading4}>DATA</p>
        <p className={styles.heading3}>Data Scientists</p>
        <ol className={styles.paragraph}>
            <li>Research and develop pioneering implementations of algorithms and tools in campaigns, from Logistic Regression all the way to Large Language Models.</li>
            <li>Document and present findings</li>
        </ol>
    </>
);

export const roles = [
    { content: strategyContent, imageSrc: careers_role01, imageAlt: 'Strategy image' },
    { content: researchContent, imageSrc: careers_role02, imageAlt: 'Marketing image' },
    { content: softwareContent, imageSrc: careers_role03, imageAlt: 'Development image' },
    { content: dataContent, imageSrc: careers_role04, imageAlt: 'Operations image' }
];

