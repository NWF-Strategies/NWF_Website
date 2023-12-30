import TwoPieceFormat from "./TwoPieceFormat";
import coverPhoto from "../assets/home_careers.png";
import { joinus_content } from "../constants/div_constants";

const JoinUs = () => {
  return (
    <div className="m-10">
      <TwoPieceFormat
        imageSrc={coverPhoto}
        imageAlt='Join us image'
        content={joinus_content}
      />
    </div>
  )
}

export default JoinUs