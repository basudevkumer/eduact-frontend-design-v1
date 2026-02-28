// for icons

import allIcons from "./iconProvider";

const { servicesCardIcons } = allIcons;

const homeServicesArr = [
  {
    id: 1,
    title: "Exclusive Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit",
    icon: servicesCardIcons[0].icon,
    buttonText: "Read More",
    highlight: false,
  },
  {
    id: 2,
    title: "Creative Minds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit",
    icon: servicesCardIcons[1].icon,
    buttonText: "Read More",
    highlight: true,
  },
  {
    id: 3,
    title: "Video Tutorials",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit",
    icon: servicesCardIcons[2].icon,
    buttonText: "Read More",
    highlight: false,
  },
  {
    id: 4,
    title: "Worlds Record",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit",
    icon: servicesCardIcons[3].icon,
    buttonText: "Read More",
    highlight: false,
  },
];

export { homeServicesArr };
