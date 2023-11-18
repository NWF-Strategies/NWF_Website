import thumbnailImg from "../../assets/home_carousel01.png";
import GenericCarousel from "./GenericCarousel";
import LandingThumbnail from "./LandingThumbnail";

const LandingCarousel = () => {
    const thumbnails = [
        <LandingThumbnail
            imageSrc={thumbnailImg}
            spanText='Innovating today'
            mainText='for the campaigns of tomorrow'
        />,
        <LandingThumbnail
            imageSrc={thumbnailImg}
            spanText='Innovating today'
            mainText='for the campaigns of tomorrow'
        />,
        <LandingThumbnail
            imageSrc={thumbnailImg}
            spanText='Innovating today'
            mainText='for the campaigns of tomorrow'
        />
    ]
    return (
        <>
            <GenericCarousel slides={thumbnails} width={900} height={500}/>
        </>
    );
};

export default LandingCarousel;
