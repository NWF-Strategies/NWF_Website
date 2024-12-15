import React from "react";
import styles from "../style";

interface CaseStudyButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const CaseStudyButton: React.FC<CaseStudyButtonProps> = ({ children, onClick }) => {
    return (
      <div 
        className={`${styles.button} cursor-pointer`} 
        style={{ 
            position: 'relative'
        }}
      >
        <button onClick={onClick}>{children}</button>
      </div>
    );
  };

export default CaseStudyButton;