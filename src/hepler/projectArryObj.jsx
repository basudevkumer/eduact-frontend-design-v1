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
    value: 6.3,
    suffix: "+",
    label: "Top Instructors",
  },
];

const popularCourses = [
  {
    id: 1,
    duration: "20 Hours",
    rating: 5,
    reviews: 25,
    title: "Management Consultants in Competitive Markets",
    instructor: {
      name: "Guy Hawkins",
      role: "PROJECT MANAGER",
      avatar: "https://i.ibb.co.com/example/user1.png",
    },
    price: 473.0,
    lessons: 15,
  },
  {
    id: 2,
    duration: "15 Hours",
    rating: 4,
    reviews: 18,
    title: "Advanced Data Science & Machine Learning",
    instructor: {
      name: "Jane Cooper",
      role: "DATA SCIENTIST",
      avatar: "https://i.ibb.co.com/example/user2.png",
    },
    price: 520.0,
    lessons: 12,
  },
  {
    id: 3,
    duration: "30 Hours",
    rating: 5,
    reviews: 40,
    title: "Digital Marketing Strategy & SEO Masterclass",
    instructor: {
      name: "Robert Fox",
      role: "MARKETING HEAD",
      avatar: "https://i.ibb.co.com/example/user3.png",
    },
    price: 350.0,
    lessons: 25,
  },
  {
    id: 4,
    duration: "10 Hours",
    rating: 5,
    reviews: 12,
    title: "Introduction to User Experience (UX) Design",
    instructor: {
      name: "Esther Howard",
      role: "UI/UX DESIGNER",
      avatar: "https://i.ibb.co.com/example/user4.png",
    },
    price: 299.0,
    lessons: 10,
  },
  {
    id: 5,
    duration: "25 Hours",
    rating: 4,
    reviews: 32,
    title: "Full Stack Web Development with React & Node",
    instructor: {
      name: "Cameron Williamson",
      role: "SOFTWARE ENGINEER",
      avatar: "https://i.ibb.co.com/example/user5.png",
    },
    price: 599.0,
    lessons: 45,
  },
  {
    id: 6,
    duration: "18 Hours",
    rating: 5,
    reviews: 21,
    title: "Business Analytics and Financial Modeling",
    instructor: {
      name: "Leslie Alexander",
      role: "FINANCIAL ANALYST",
      avatar: "https://i.ibb.co.com/example/user6.png",
    },
    price: 450.0,
    lessons: 20,
  },
  {
    id: 7,
    duration: "12 Hours",
    rating: 4,
    reviews: 15,
    title: "Graphic Design Masterclass: Photoshop & Illustrator",
    instructor: {
      name: "Arlene McCoy",
      role: "SENIOR DESIGNER",
      avatar: "https://i.ibb.co.com/example/user7.png",
    },
    price: 199.0,
    lessons: 18,
  },
  {
    id: 8,
    duration: "40 Hours",
    rating: 5,
    reviews: 55,
    title: "Ethical Hacking: From Scratch to Advanced",
    instructor: {
      name: "Devon Lane",
      role: "SECURITY EXPERT",
      avatar: "https://i.ibb.co.com/example/user8.png",
    },
    price: 650.0,
    lessons: 50,
  },
  {
    id: 9,
    duration: "08 Hours",
    rating: 4,
    reviews: 9,
    title: "Public Speaking & Effective Communication",
    instructor: {
      name: "Courtney Henry",
      role: "SOFT SKILLS TRAINER",
      avatar: "https://i.ibb.co.com/example/user9.png",
    },
    price: 150.0,
    lessons: 8,
  },
  {
    id: 10,
    duration: "22 Hours",
    rating: 5,
    reviews: 28,
    title: "Supply Chain Management & Logistics",
    instructor: {
      name: "Jerome Bell",
      role: "OPERATIONS MANAGER",
      avatar: "https://i.ibb.co.com/example/user10.png",
    },
    price: 410.0,
    lessons: 22,
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Devon Lane",
    designation: "UI/UX Designer",
    image: "path/to/devon.jpg",
    socials: {
      facebook: "https://facebook.com/devon",
      linkedin: "https://linkedin.com/in/devon",
      youtube: "https://youtube.com/devon",
    },
    themeColor: "blue",
  },
  {
    id: 2,
    name: "Cody Fisher",
    designation: "Frontend Developer",
    image: "path/to/cody.jpg",
    socials: {
      facebook: "https://facebook.com/cody",
      linkedin: "https://linkedin.com/in/cody",
      youtube: "https://youtube.com/cody",
    },
    themeColor: "orange",
  },
  {
    id: 3,
    name: "Jane Cooper",
    designation: "Product Manager",
    image: "path/to/jane.jpg",
    socials: {
      facebook: "https://facebook.com/jane",
      linkedin: "https://linkedin.com/in/jane",
      youtube: "https://youtube.com/jane",
    },
    themeColor: "orange",
  },
];

const blogData = [
  {
    id: 1,
    cardImages:
      "https://img.freepik.com/free-photo/enchanted-forest-fantasy-background_23-2151910716.jpg?semt=ais_rp_progressive&w=740&q=80",
    userImages:
      "https://img.freepik.com/free-photo/enchanted-forest-fantasy-background_23-2151910716.jpg?semt=ais_rp_progressive&w=740&q=80",
    time: "26 Mar, 2023",
    heading: "The Complete Web Developer Guideline 2023",
    userName: "Darrell Steward",
    userDepartment: "FRONTED DEVELOPER",
  },
  {
    id: 2,
    cardImages:
      "https://i.natgeofe.com/n/cddbeec0-8cd7-4d70-876a-fa51ce714867/night-vision-2.jpg",
    userImages:
      "https://i.natgeofe.com/n/cddbeec0-8cd7-4d70-876a-fa51ce714867/night-vision-2.jpg",
    time: "26 Mar, 2023",
    heading: "The Complete Web Developer Guideline 2023",
    userName: "Darrell Steward",
    userDepartment: "FRONTED DEVELOPER",
  },
  {
    id: 3,
    cardImages:
      "https://png.pngtree.com/thumb_back/fh260/background/20250326/pngtree-mystical-enchanted-fairy-forest-illustration-with-magical-trees-and-glowing-fireflies-image_17147420.jpg",
    userImages:
      "https://png.pngtree.com/thumb_back/fh260/background/20250326/pngtree-mystical-enchanted-fairy-forest-illustration-with-magical-trees-and-glowing-fireflies-image_17147420.jpg",
    time: "26 Mar, 2023",
    heading: "The Complete Web Developer Guideline 2023",
    userName: "Darrell Steward",
    userDepartment: "FRONTED DEVELOPER",
  },
];

export {
  homeServicesArr,
  homeStatsData,
  popularCourses,
  teamMembers,
  blogData,
};
