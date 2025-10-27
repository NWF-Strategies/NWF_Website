import TwoPieceFormat from "./TwoPieceFormat";
import joinUsPhoto from "../assets/join_us_photo.png";
import { JoinUsContent } from "../constants/div_constants";
import SlideIn from './SlideInAnimation';
//import { research } from "../assets";
const JoinUs = () => {
  return (
      <SlideIn direction = "right" delay ={200}> 
        <div className='py-32 bg-gray-100 w-full'>
          <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center my-10 '>
            <TwoPieceFormat
              imageSrc={joinUsPhoto}
              imageAlt='Join us image'
              content={<JoinUsContent />}
            />
          </div>
        </div>
      </SlideIn>
  );
};

export default JoinUs;