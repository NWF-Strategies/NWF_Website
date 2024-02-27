const Form = () => {
  return (
    //Go to https://web3forms.com/#start to change email
    <div className=' w-[90%] md:w-[40%] flex justify-center items-center'>
      <form
        action='https://api.web3forms.com/submit'
        method='POST'
        className='w-full'
      >
        <input
          type='hidden'
          name='access_key'
          value='c9b55d96-f49b-4657-a3db-afa0050cc6ba'
        />
        <div className='flex flex-col'>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='John Doe'
              className='bg-transparent text-white w-full'
              required
            />
          </div>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='you@email.com'
              className='bg-transparent text-white w-full'
              required
            />
          </div>
        </div>
        <div className='border-2 rounded-md w-full border-[#43BCCD] mb-4'>
          <textarea
            rows={5}
            name='message'
            id='message'
            placeholder='Your Message'
            className='bg-transparent text-white w-full h-[100px] py-3 px-[20px]'
            required
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
      <script src='https://web3forms.com/client/script.js' async defer></script>
    </div>
  );
};
export default Form;
