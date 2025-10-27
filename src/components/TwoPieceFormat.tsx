import React, { ReactElement } from 'react';

interface TwoPieceProps {
    imageSrc: string;
    imageAlt: string;
    content: ReactElement;
}

const TwoPieceFormat: React.FC<TwoPieceProps> = ({ imageSrc, imageAlt, content }) => (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 items-start">
        <div className="justify-self-center m-3 md:col-span-2">
            <img src={imageSrc} alt={imageAlt} className="w-auto h-auto rounded-[11px]" />
        </div>
        <div className="m-5 grid-row: md:col-span-2 md:self-center">
            {content}
        </div>
    </div>
);



export default TwoPieceFormat;
