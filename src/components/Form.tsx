const Form = () => {
  return (
    //This form just need to be changed to work with the company's email.
    //Go to https://web3forms.com/#start and create the access key using the company's email
    //Replace the current value in the input field named access_key with the company's key. 
    //Form will automatically send the contact email to the company's email address
    <div className=' w-[90%] md:w-[40%] flex justify-center items-center'>
      <form action='https://api.web3forms.com/submit' method="POST" className='w-full'>
        <input type="hidden" name="access_key" value="7475b2b7-e29c-486d-b520-19bfe9f2f72e"/>
        <div className='flex flex-col'>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className='bg-transparent text-white w-full'
              required
            />
          </div>
          <div className='border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[20px]'>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@email.com"
              className='bg-transparent text-white w-full'
              required
            />
          </div>
        </div>
        <div className='border-2 rounded-md w-full border-[#43BCCD] mb-4'>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Your Message"
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
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
};
export default Form;
