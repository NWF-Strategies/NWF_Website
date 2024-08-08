import TwoPieceFormat from "./TwoPieceFormat";
import coverPhoto from "../assets/home_careers.png";
import { JoinUsContent } from "../constants/div_constants";

const JoinUs = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center w-full m-10 pr-20 sm:pr-12 xl:pr-4 3xl:ml-[19.5%] 3xl:w-[78%] 3xl:mt-20 '>
      <TwoPieceFormat
        imageSrc={coverPhoto}
        imageAlt='Join us image'
        content={<JoinUsContent />}
      />
    </div>
  );
};

export default JoinUs;