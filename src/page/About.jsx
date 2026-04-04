import React from "react";
import Bredcrumb from "../component/common/Bredcrumb";
import AboutUs from "../component/about/AboutUs/Index";
import StatsBar from "../component/about/StatsBar/Index";
import AboutPopular from "../component/home/aboutPopular/Index";
import HomeTeam from "../component/home/team/Index";
import FeedBack from "../component/home/feedback/Index";

const About = () => {
  return (
    <>
      <Bredcrumb />
      <AboutUs />
      <StatsBar />
      <div className="py-[120px]">
        <AboutPopular />
      </div>
       <FeedBack/>
      <HomeTeam />

    </>
  );
};

export default About;
