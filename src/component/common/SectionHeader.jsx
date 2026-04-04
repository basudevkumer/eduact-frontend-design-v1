import React from "react";
import { allImages } from "../../hepler/imageprovider";

const SectionHeader = ({ title, subTitle, mianClassName,subTitleClassName, titleClassName }) => {
  const { homeAboutFram } = allImages;
  return (
    <div className={`flex flex-col items-center gap-y-6 ${mianClassName}`}>
      <div className="flex items-center gap-x-4">
        <h6 className={`text-tarnary heading-six ${titleClassName}`}> {title}</h6>

        <figure>
          <img src={homeAboutFram} alt="homeAboutFram" />
        </figure>
      </div>
      <h3 className={`text-primary heading-three  text-center ${subTitleClassName}`}>
        {subTitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
