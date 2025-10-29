import React, { ReactElement } from 'react';

interface TwoPieceProps {
  imageSrc: string;
  imageAlt: string;
  content: ReactElement;
  size?: string;
}

const TwoPieceVerticalFormat: React.FC<TwoPieceProps> = ({
  imageSrc,
  imageAlt,
  content,
}) => {

  return (
    <div className="flex flex-col items-center text-start gap-4">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`hidden sm:block rounded-[11px] w-auto h-[300px] mt-10`}
      />
      <div className="sm:mt-0 mt-4 w-full px-4 mb-4">{content}</div>
    </div>
  );
};

export default TwoPieceVerticalFormat;
