// Form.tsx
import React from "react";

type FormProps = {
  className?: string;
  disableMdWidth?: boolean;
};

const Form: React.FC<FormProps> = ({ className = "", disableMdWidth = false }) => {
  const widthClass = disableMdWidth ? "" : "md:w-[45%]";
  return (
    //Go to https://web3forms.com/#start to change email
    <div className={`w-[90%] ${widthClass} flex justify-center items-center ${className}`}>
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
          <div className='bg-black border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[21px]'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name *'
              className='bg-black text-xl placeholder-white outline-none focus:ring-0 focus:outline-none text-white w-full'
              required
            />
          </div>
          <div className='bg-black border-2 rounded-md w-full border-[#43BCCD] mb-5 py-3 px-[21px]'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email *'
              className='bg-black text-xl placeholder-white outline-none focus:ring-0 focus:outline-none text-white w-full'
              required
            />
          </div>
        </div>
        <div className='bg-black border-2 rounded-md w-full border-[#43BCCD] mb-4'>
          <textarea
            rows={5}
            name='message'
            id='message'
            placeholder='Your Message'
            className='bg-black  text-xl placeholder-white outline-none focus:ring-0 focus:outline-none text-white w-full h-[220px] py-3 px-[21px]'
            required
          ></textarea>
        </div>
        <div className='w-full flex justify-start mt-6 items-center'>
          <button
            type='submit'
            className='flex justify-center items-center px-[21px] py-[8px] bg-[#43BCCD] rounded-full w-[130px] font-semibold text-black text-xl'
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
