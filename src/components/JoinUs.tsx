import TwoPieceFormat from "./TwoPieceFormat";
import coverPhoto from "../assets/home_careers.png";
import { JoinUsContent } from "../constants/div_constants";

const JoinUs = () => {
  return (
    <div className='m-10 3xl:ml-[19%] 3xl:w-[80%]'>
      <TwoPieceFormat
        imageSrc={coverPhoto}
        imageAlt='Join us image'
        content={<JoinUsContent />}
      />
    </div>
  );
};

export default JoinUs;