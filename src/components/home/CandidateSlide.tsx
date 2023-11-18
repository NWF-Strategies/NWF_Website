import React, { ReactElement } from 'react';

interface CandidateProps {
    imageSrc: string;
    imageAlt: string;
    content: ReactElement;
}

const CandidateSlide: React.FC<CandidateProps> = ({ imageSrc, imageAlt, content }) => (
    <div className="border border-white mx-[20px] justify-center items-center px-20 py-5">
        <div className="flex flex-col sm:flex-row items-start">
            <div className="m-3 flex-shrink-0">
                <img src={imageSrc} alt={imageAlt} className="h-[260px]" />
            </div>
            <div className="m-5 flex-grow">
                {content}
            </div>
        </div>
    </div>
);


export default CandidateSlide;
