import React from "react";

const Button = ({ text, type = "button", className = "" }) => {
  return (
    <div>
      <button
        type={type}
        className={`py-3 px-5  bg-primary outline-none cursor-pointer  rounded-2xl ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
