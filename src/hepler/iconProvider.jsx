import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

import { HiOutlineLightBulb } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import { PiNetworkFill } from "react-icons/pi";

import { FaArrowLeftLong } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const allIcons = {
  rightArrow: <FaArrowRightLong />,
  done: <MdOutlineDone />,
  servicesCardIcons: [
    { id: 1, icon: <RiGraduationCapFill /> },
    { id: 2, icon: <HiOutlineLightBulb /> },
    { id: 3, icon: <MdVideoLibrary /> },
    { id: 4, icon: <PiNetworkFill /> },
  ],
  carocellArrow: [
    { id: 1, icon: <FaArrowRightLong /> },
    { id: 2, icon: <FaArrowLeftLong /> },
  ],
  contactData: [
    {
      id: 1,
      icon: <BsTelephone size={32} />,
      label: "Have any question?",
      value: "Free + 23 (000)-8050",
    },
    {
      id: 2,
      icon: <MdOutlineEmail size={32} />,
      label: "Send Email",
      value: "Demo@gmail.com",
    },
    {
      id: 3,
      icon: <GoLocation size={32} />,
      label: "Visit Anytime",
      value: "6391 Elgin St. Delaware 10299",
    },
  ],
};

export default allIcons;
