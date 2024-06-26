import TwoPieceFormat from "./TwoPieceFormat";
import coverPhoto from "../assets/home_careers.png";
import { JoinUsContent } from "../constants/div_constants";

const JoinUs = () => {
  return (
    <div className='m-10'>
      <TwoPieceFormat
        imageSrc={coverPhoto}
        imageAlt='Join us image'
        content={<JoinUsContent />} // Using the component directly
      />
    </div>
  );
};

export default JoinUs;