import React, { ReactElement } from 'react';

interface TwoPieceProps {
    imageSrc: string;
    imageAlt: string;
    content: ReactElement;
}

const TwoPieceFormat: React.FC<TwoPieceProps> = ({ imageSrc, imageAlt, content }) => (
    <div className="mx-[20px]">
        <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3 items-start">
            <div className="border border-white justify-self-center m-3"> {/* sm:justify-self-end */}
                <img src={imageSrc} alt={imageAlt} className="h-[260px]" />
            </div>
            <div className="m-5 grid-row: md:col-span-2 md:self-center">
                {content}
            </div>
        </div>
    </div>
);



export default TwoPieceFormat;
