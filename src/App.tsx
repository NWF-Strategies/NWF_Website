import { Footer, Navbar } from "./components";
import styles from "./style";

const App = () => (
  <div className='bg-grey w-full overflow-hidden '>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-grey ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);
//
export default App;
