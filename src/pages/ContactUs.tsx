import styles, { layout } from "../style";
/*import Form from "../components/Form";*/
import { Newsletter2 } from '../components'

const ContactUs = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX} ${styles.paddingY} w-[100vw] 3xl:mt-40 3xl:pb-40`} /*something wrong here */ /*wdym?*/>
      <Newsletter2 />
    </section>
  );
};

export default ContactUs;
