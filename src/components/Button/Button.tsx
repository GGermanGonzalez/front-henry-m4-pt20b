

import React from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  variant?: "tertiary" | "quaternary" | "quinary";
  onClick?: () => void;
  href?: string;
}

const Button = ({ 
  children, 
  className = "", 
  variant = "tertiary", 
  onClick, 
  href = "" 
}: IButton) => {
  
  return (
   
    <button
      className={`border-2 rounded transition-all hover:scale-105 active:scale-95 text-primary bg-${variant} ${className}`}
      onClick={onClick}
      style={{ width: "100px", height: "50px" }}
    >
      {children}
    </button>
    
  );
};

export default Button;


