import React from "react";
const Button = (props) => {
    const { children, variant = "bg-black", onClick = () => {}, type = "button" } = props;
    return (
      <button
        className={`h-10 px-6 font-bold rounded-md ${variant} text-white bg-blue-500`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  