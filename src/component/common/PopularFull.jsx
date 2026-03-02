import React from "react";
import Container from "./Container";
import { allImages } from "../../hepler/imageprovider";
import CarouselOne from "./CarouselOne";

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
            <div className="flex items-center gap-x-4">
              <h6 className="text-tarnary heading-six">Popular Course</h6>

              <figure>
                <img src={homeAboutFram} alt="homeAboutFram" />
              </figure>
            </div>
            <h3 className="text-primary heading-three max-w-[592px] text-center">
              Featured Course On This Month
            </h3>
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
