import React from "react";
import styles from "../style";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
  <div className={` ${styles.button}`}>
    <button type='button'> {label} </button>
  </div>
);

export default Button;
