import styles from "../style";

const Form = () => {
  return (
    <div className=' w-[90%] md:w-[40%] flex justify-center items-center'>
      <form action='mailto::info@nwfstrategies.com' className='w-full'>
        <div className='flex flex-col'>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type='text'
              placeholder='Name *'
              className='bg-transparent text-white w-full'
            />
          </div>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type='email'
              placeholder='Email *'
              className='bg-transparent text-white w-full'
            />
          </div>
        </div>
        <div className='border-2 rounded-md w-full border-[#43BCCD] mb-4'>
          <textarea
            placeholder='Message'
            className='bg-transparent text-white w-full h-[100px] py-3 px-[20px]'
          ></textarea>
        </div>
        <div className='w-full flex justify-center items-center'>
          <button
            type='submit'
            className='flex justify-center items-center px-[24px] py-[5px] bg-[#43BCCD] rounded-md w-[120px] text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
