import React from "react";
import Slider from "react-slick";
import PopularCourse from "./PopularCourse";
import { popularCourses } from "../../hepler/projectArryObj";
import allIcons from "../../hepler/iconProvider";

const { carocellArrow } = allIcons;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <span className="text-lg text-white px-3 py-2 rounded-md bg-tarnary inline-block z-10 absolute  cursor-pointer  right-16 top-[-70px]">{carocellArrow[1].icon}</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <span className="text-lg text-white px-3 py-2 rounded-md bg-tarnary inline-block z-10 absolute top-[-70px] right-0 cursor-pointer ">{carocellArrow[0].icon}</span>
    </div>
  );
}

const CarouselOne = () => {
  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {popularCourses.map((items, index) => {
          return (
            <PopularCourse
              hour={items.duration}
              key={index}
              price={items.price}
              lessons={items.lessons}
              title={items.title}
              name={items.instructor.name}
              role={items.instructor.role}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselOne;
