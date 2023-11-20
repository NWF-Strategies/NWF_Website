import candidate_img from "../../assets/home_peltola.png";
import {peltola_text} from "../../constants/div_constants";
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
            <div className="h-fit min-h-[300px] invisible sm:visible">
                <GenericCarousel slides={candidates} width={900} height={250}/>
            </div>
        </>
    );
};

export default CandidateStudies;
