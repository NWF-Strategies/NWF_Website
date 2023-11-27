import React, { ReactElement } from 'react';

interface CandidateProps {
    imageSrc: string;
    imageAlt: string;
    content: ReactElement;
}

const CandidateSlide: React.FC<CandidateProps> = ({ imageSrc, imageAlt, content }) => (
    <div className="mx-[20px] px-20 mb-[30px]">
        <div className=" flex flex-col sm:flex-row items-left justify-left">
            <div className="m-3">
                <img src={imageSrc} alt={imageAlt} className="h-[250px]" />
            </div>
                <div className="m-5 text-left h-[300px]">
                    {content}                
                </div>
        </div>
    </div>
);


export default CandidateSlide;
