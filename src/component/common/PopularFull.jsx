import React from "react";
import Container from "./Container";
import { allImages } from "../../hepler/imageprovider";
import CarouselOne from "./CarouselOne";
import SectionHeader from "./SectionHeader";

const PopularFull = () => {
  const { homeAboutFram, paperImage, roketImage } = allImages;

  return (
    <section className="relative z-10">
      <figure className="absolute bottom-0 left-10 z-0">
        <img src={paperImage} alt="paperImage" />
      </figure>
      <figure className="absolute top-0 right-5 z-0">
        <img src={roketImage} alt="roketImage" />
      </figure>
      <Container>
        <div>
          <div className="flex flex-col items-center gap-y-6">
            <SectionHeader
              title={"Popular Course"}
              subTitle={"    Featured Course On This Month"}
            />
          </div>
          <div className="mt-[80px]">
            <CarouselOne />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularFull;
