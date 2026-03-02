import React from "react";

const ServicesNumber = ({value,suffix,label}) => {
  return (
    <div className="border-3 rounded-[10px] border-dashed border-tarnary py-[57px] px-[76px] flex flex-col items-center ">
      <h2 className="text-quaternary heading-two ">{value}{suffix}</h2>
      <p className="pt-2 paragraph-semi text-secondary">{label}</p>
    </div>
  );
};

export default ServicesNumber;
