import React from "react";
import styles, { layout } from "../style";
import Button from "../components/Button";
import Form from "../components/Form";

const ContactUs = () => {
  return (
    <section
      id='features'
      className={`${layout.section} ${styles.paddingX} ${styles.paddingY}`}
    >
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}> Contact Us</h2>
        <p className={`${styles.paragraph2} text-white max-w-[470px] mt-5`}>
          Send us any questions or inquiries via the contact form, or email us
          at info@nwfstrategies.com.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
