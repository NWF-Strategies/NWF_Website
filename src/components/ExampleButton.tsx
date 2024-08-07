import React from "react";
import styles from "../style";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className={` ${styles.button} cursor-should-hover`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
