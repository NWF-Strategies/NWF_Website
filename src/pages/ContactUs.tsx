import styles, { layout } from "../style";
/*import Form from "../components/Form";*/
import { Newsletter2, SEO } from '../components'

const ContactUs = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX} ${styles.paddingY} w-[100vw] 3xl:mt-40 3xl:pb-40`} /*something wrong here */ /*wdym?*/>
      <SEO
        title="Contact Us"
        description="Book an intro call with NWF Strategies. Get in touch to discuss how we can help your campaign succeed with our innovative technologies and strategies."
        canonical="/contactus"
      />
      <Newsletter2 />
    </section>
  );
};

export default ContactUs;
