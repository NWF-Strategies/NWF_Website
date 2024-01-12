import styles, { layout } from "../style";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import error404 from "../assets/error404.svg";
import { ExampleButton } from "../components";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <section
      className={`${layout.section} ${styles.paddingX} ${styles.paddingY}`}
    >
      <div className='flex flex-col py-3 sm:flex-row justify-between items-center w-full '>
        <div className='flex flex-col pb-5 justify-center items-start md:w-[45%]'>
          <h1 className={`${styles.heading2}`}>Page Not Found</h1>
          <p className={`${styles.paragraph2}`}>
            we can't seem to find the page you are looking for
          </p>
          <ExampleButton onClick={() => navigate("/")} children='Back Home' />
        </div>
        <img src={error404} className='max-w-[550px]' />
      </div>
    </section>
  );
};
export default NotFound;
