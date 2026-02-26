import React from "react";
import Container from "../../commonComponent/Container";
import allIcons from "../../../hepler/iconProvider";
import { allImages } from "../../../hepler/imageprovider";
import Button from "../../commonComponent/Button"

const HomeAbout = () => {
  // for images & icon

  const { homeAboutBanner, homeAboutFram, homeAboutFlexible } = allImages;
  const { done ,rightArrow} = allIcons;
  return (
    <section className="py-[120px]">
      <Container>
        <div className="grid grid-cols-2 gap-x-[65px] items-center">
          <figure>
            <img src={homeAboutBanner} alt="homeAboutBanner" />
          </figure>
          <div>
            <div className="flex items-center  gap-x-4">
              <h6 className="heading-six text-tarnary">About Us</h6>
              <figure>
                <img src={homeAboutFram} alt="about-fram-images" />
              </figure>
            </div>
            <h3 className="heading-three text-primary pt-[30px] pb-[40px]">
              Establishing a community that encourages lifelong learning
            </h3>
            <div className="bg-quinary pt-[58px] pb-6 relative">
              <figure className="absolute top-0 left-0">
                <img src={homeAboutFlexible} alt="homeAboutFlexible" />
              </figure>
              <p className="paragraph-semi text-secondary pl-[121px] ">
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>
            <div className="pt-[40px] pb-[50px] grid grid-cols-2 gap-x-[66px] gap-y-[18px]">
              <p className="text-primary   paragraph-bold-twenty flex items-center gap-x-4">
                <span className="inline-block p-1 bg-tarnary text-white rounded-full">{done}</span> Free Incoming method
              </p>
              <p className="text-primary   paragraph-bold-twenty flex items-center gap-x-4">
                <span className="inline-block p-1 bg-quaternary text-white rounded-full">{done}</span> Provide Best Support
              </p>
              <p className="text-primary   paragraph-bold-twenty flex items-center gap-x-4">
                <span className="inline-block p-1 bg-quaternary text-white rounded-full">{done}</span> Expert Many Teacher 
              </p>
              <p className="text-primary   paragraph-bold-twenty flex items-center gap-x-4">
                <span className="inline-block p-1 bg-tarnary text-white rounded-full">{done}</span> Lifetime access 
              </p>
              
            </div>
            <Button children={"Discover More"} className={" !bg-tarnary "} icon={rightArrow}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
