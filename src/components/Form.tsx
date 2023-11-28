import styles from "../style";

const Form = () => {
  return (
    <form className='w-full max-w-lg'>
      <div className='md:flex md:items-center mb-9'>
        <div className='md:w-2/3'>
          <input
            className={`${styles.form} xs:my-4 sm:my-4 `}
            id='inline-full-name'
            type='text'
            placeholder='Name'
          ></input>
          <input
            className={`${styles.form} xs:my-4 sm:my-4 `}
            id='inline-full-name'
            type='text'
            placeholder='Email'
          ></input>
          <textarea
            className={`${styles.form} xs:my-4 sm:my-4 `}
            id='inline-full-name'
            placeholder='Your Message'
          ></textarea>
        </div>
      </div>
    </form>
  );
};
export default Form;
