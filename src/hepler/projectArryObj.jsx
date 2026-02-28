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

const homeStatsData = [
  {
    id: 1,
    value: 30.3,
    suffix: "k",
    label: "Student Enrolled",
  },
  {
    id: 2,
    value: 40.5,
    suffix: "k",
    label: "Class Completed",
  },
  {
    id: 3,
    value: 88.9,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    id: 4,
    value: 6.30,
    suffix: "+",
    label: "Top Instructors",
  },
];


export { homeServicesArr,homeStatsData };
