import React from "react";

const Button = ({
  onClick,
  text,
  className = "bg-[#7c4ee4] text-white px-4 py-2 rounded-md ml-8"
}) => {
  return (
    <div>
      <button onClick={onClick} className={className}>{text}</button>
    </div>
  );
};

export default Button;