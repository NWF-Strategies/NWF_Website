import candidate_img from "../../assets/home_peltola.png";
import {peltola_text} from "../../constants/home_constants";
import CandidateSlide from "./CandidateSlide";
import GenericCarousel from "./GenericCarousel";

const CandidateStudies = () => {
    const candidates = [
        <CandidateSlide
            imageSrc={candidate_img}
            imageAlt='Peltola image'
            content={peltola_text}
        />,
        <CandidateSlide
            imageSrc={candidate_img}
            imageAlt='Peltola image'
            content={peltola_text}
        />,
        <CandidateSlide
            imageSrc={candidate_img}
            imageAlt='Peltola image'
            content={peltola_text}
        />
    ]
    return (
        <>
            <div className="h-fit min-h-[300px]">
            <GenericCarousel slides={candidates} width={900} height={300}/>
            </div>
        </>
    );
};

export default CandidateStudies;
