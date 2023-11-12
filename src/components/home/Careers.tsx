import styles from "../../style";
import React from 'react';
import TwoPieceFormat from "../TwoPieceFormat";
import coverPhoto from "../../assets/images/home_careers.png";

const Careers = () => {
  const content = (
    <>
      <p className={styles.heading4}>CAREER</p>
      <p className={styles.heading3}>Join Us</p>
      <p className={styles.paragraph}>
        Power the New Way Forward of campaigning with us. From software engineers and researchers to campaign managers and canvassers, we have a team for you.
      </p>
    </>
  );

  return (
    <TwoPieceFormat
      imageSrc={coverPhoto} 
      imageAlt="Careers image"
      content={content}
    />
  );
};

export default Careers;
