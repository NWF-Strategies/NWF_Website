import styles, { layout } from "../style";
import Form from "../components/Form";
import { Newsletter2 } from '../components'

const ContactUs = () => {
  return (
    <section
      className={`${layout.section} ${styles.paddingX} ${styles.paddingY} w-[100vw] 3xl:mt-40 3xl:pb-40`} /*something wrong here */
    >{/*
      <div className='flex flex-col py-12 mt-20 sm:flex-row justify-between items-center w-full '>
        <div className='flex flex-col pb-5 justify-center items-start md:w-[45%]'>
          <h1 className={`${styles.heading2}`}>Contact Us</h1>
          <p className={`${styles.paragraph2}`}>
            Send us any questions or inquiries via the contact form, or email us
            at info@nwfstrategies.com.
          </p>
        </div>
        <Form />
      </div>*/}
      <Newsletter2 />
    </section>
  );
};

export default ContactUs;
