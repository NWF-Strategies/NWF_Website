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
      <div className='flex flex-col py-3 sm:flex-row justify-between items-center w-full '>
        <div className='flex flex-col pb-5 justify-center items-start md:w-[45%]'>
          <h1 className={`${styles.heading2}`}>Contact Us</h1>
          <p className={`${styles.paragraph2}`}>
            Send us any questions or inquiries via the contact form, or email us
            at info@nwfstrategies.com.
          </p>
        </div>
        <Form />
      </div>
    </section>

    // <div className='flex flex-col justify-center items-center w-1/2'>
    //     <h2 className={`${styles.heading2}`}> Contact Us</h2>
    //     <p className={`${styles.paragraph2} text-white  mt-5`}>
    //       Send us any questions or inquiries via the contact form, or email us
    //       at info@nwfstrategies.com.
    //     </p>
    //   </div>

    //   <div className={`${layout.sectionImg} flex-col`}>
    //     <Form />
    //   </div>
  );
};

export default ContactUs;
