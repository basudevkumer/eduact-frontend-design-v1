import React from "react";

const ButtonTwo = ({ className, children }) => {
  return (
    <button
      className={`font-urbanist text-base font-bold py-[14px] px-[32px] rounded-[6px] bg-[#F57005] text-white cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonTwo;
