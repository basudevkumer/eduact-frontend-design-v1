import React from "react";
import Slider from "react-slick";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import allIcons from "../../../hepler/iconProvider";
import SectionHeader from "../../common/SectionHeader";

const FeedBack = () => {
  // for images & icons
  const { carocellArrow } = allIcons;

  const { homeAboutFram, feedbackBannar, feedbackComment } = allImages;

  // for slick slider

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <span className="  text-lg text-white p-3 hover:bg-quaternary transition duration-300 ease-in-out rounded-md bg-tarnary inline-block z-10 absolute  cursor-pointer  bottom-[-40px] right-[51%] translate-x-[-50%]">
          {carocellArrow[1].icon}
        </span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <span className="text-lg text-white p-3 hover:bg-quaternary transition duration-300 ease-in-out  rounded-md bg-tarnary inline-block z-10 absolute bottom-[-40px] translate-x-[-50%] left-[51%] cursor-pointer ">
          {carocellArrow[0].icon}
        </span>
      </div>
    );
  }

  // for settings
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
    <section>
      <div
        className="object-cover  h-[485px] w-full"
        style={{ backgroundImage: `url(${feedbackBannar})` }}
      >
        <Container>
          <div className="flex flex-col items-center gap-y-6 pt-[120px] ">
            <SectionHeader title={"Our Team"} subTitle={"What Our Student Feedback"} />
          </div>
        </Container>
      </div>
      <div className="relative translate-y-[-165px]">
        <Container>
          <div   className="slider-container">
            <Slider {...settings} >
              {[...new Array(5)].map((_, index) => {
                return (
                  <figure className="">
                    <img src={feedbackComment} alt="feedbackBannar"  className=" object-cover"/>
                  </figure>
                );
              })}
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FeedBack;
