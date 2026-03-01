import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

import { HiOutlineLightBulb } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import { PiNetworkFill } from "react-icons/pi";

import { FaArrowLeftLong } from "react-icons/fa6";



const allIcons = {
  rightArrow: <FaArrowRightLong />,
  done: <MdOutlineDone />,
  servicesCardIcons: [
    { id: 1, icon: <RiGraduationCapFill /> },
    { id: 2, icon: <HiOutlineLightBulb /> },
    { id: 3, icon: <MdVideoLibrary /> },
    { id: 4, icon: <PiNetworkFill /> },
  ],
  carocellArrow : [
    { id: 1, icon: <FaArrowRightLong /> },
    { id: 2, icon: <FaArrowLeftLong /> },
  ]
};

export default allIcons;
