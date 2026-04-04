import { Image } from "@unpic/react";
import React from "react";

const Images = ({ src, width, height }) => {
  return <Image src={src} height={height} width={width} />;
};

export default Images;
