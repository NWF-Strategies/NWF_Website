import TwoPieceFormat from "./TwoPieceFormat";
import coverPhoto from "../assets/home_careers.png";
import { JoinUsContent } from "../constants/div_constants";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

// const [section2Visible, setSection2Visible] = useState(false);

// const handleSection2Enter = () => {
//   setSection2Visible(true);
// };

const JoinUs = () => {
  return (
    <div className={`m-10`}>
      <TwoPieceFormat
        imageSrc={coverPhoto}
        imageAlt='Join us image'
        content={<JoinUsContent />} // Using the component directly
      />
    </div>
  );
};

export default JoinUs;
