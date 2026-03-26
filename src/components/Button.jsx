import React from "react";

const Button = ({ text, type = "button", className = "" }) => {
  return (
    <div>
      <button
        type={type}
        className={`py-5 px-3 text-white bg-primary outline-none cursor-pointer  ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
