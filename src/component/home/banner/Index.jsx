import React from "react";
import Container from "../../commonComponent/Container";
import { allImages } from "../../../hepler/imageprovider";
import Button from "../../commonComponent/Button";
import allIcons from "../../../hepler/iconProvider";

const Banner = () => {
  //for images & images
  const {
    bannerImage,
    bannerBlue,
    bannerBook,
    bannerBulb,
    bannerNet,
    bannerVector,
    bannerSnake,
    bannerPencil
  } = allImages;

  const { rightArrow } = allIcons;
  return (
    <section className="py-[125px] bg-quinary">
      <Container>
        <div className="grid grid-cols-2 gap-x-[50px] items-center">
          <div className="relative">
            <figure className="absolute top-[-100px] left-[-150px]">
              <img
                src={bannerSnake}
                alt="bannerSnake"
              />
            </figure>
            <figure className="absolute bottom-[-150px] left-[-130px]">
              <img
                src={bannerPencil}
                alt="bannerPenceil"
              />
            </figure>
            <h1 className="heading-One text-[#2A254D]">
              {" "}
              <span className="block">Come along</span> as we begin our learning{" "}
              <span className="relative inline-block px-2">
                journey
                <img
                  src={bannerVector}
                  alt="bannerVector"
                  className="absolute left-0 top-[6px]  lg:w-[300px] "
                />
              </span>
            </h1>
            <p className="paragraph-regular w-auto lg:w-[440px] text-secondary my-10">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary,
            </p>
            <Button children={"Try for fee"} icon={rightArrow} />
          </div>
          <div className="relative z-50">
            <figure className="absolute top-[-95px] left-0 z-[-1]">
              <img src={bannerBlue} alt="bannerBlue" />
            </figure>
            <figure className="absolute top-full left-1/2  -translate-1/2 animate-bounce">
              <img src={bannerBook} alt="bannerBook" />
            </figure>
            <figure className="absolute top-0 left-16">
              <img src={bannerBulb} alt="bannerBulb" />
            </figure>
            <figure className="absolute top-[27%] left-[-70px] z-[-1]">
              <img src={bannerNet} alt="bannerNet" />
            </figure>
            <figure>
              <img src={bannerImage} alt="bannarImages" />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
