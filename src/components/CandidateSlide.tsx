import React, { ReactElement } from 'react';

interface CandidateProps {
    imageSrc: string;
    imageAlt: string;
    content: ReactElement;
}

const CandidateSlide: React.FC<CandidateProps> = ({ imageSrc, imageAlt, content }) => (
    <div className="flex flex-col mx-5 sm:flex-row items-center justify-left">
        <div className='mx-5'>
            <img src={imageSrc} alt={imageAlt} className="h-[250px] object-contain" />
        </div>
        <div className="text-left ">
            {content}                
        </div>
    </div>
);


export default CandidateSlide;
