import React from "react";
import Container from "../../common/Container";
import Images from "../../common/Images";
import { allImages } from "../../../hepler/imageprovider";
import SectionHeader from "../../common/SectionHeader";

const AboutUs = () => {
  const { homeAboutBanner, mission, vision } = allImages;

  return (
    <section className="pt-[120px] pb-[98px]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-x-[65px]">
          {/* Left: Banner Image */}
          <div>
            <Images src={homeAboutBanner} height={707} width={698} />
          </div>

          {/* Right: Content */}
          <div>
            {/* Section Header */}
            <SectionHeader
              mianClassName={"!items-start"}
              subTitleClassName={"!text-start"}
              title={"About Us"}
              subTitle={
                "Establishing a community that encourages lifelong learning"
              }
            />

            {/* Description paragraph */}
            <p className="paragraph-semi text-secondary py-10">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks The generated Lorem Ipsum is therefore always free
              from repetition
            </p>

            {/* Mission & Vision Cards */}
            <div className="flex flex-col gap-y-8">
              {/* Our Mission */}
              <div className="space-y-5">
                <div className=" flex gap-x-[29px]  items-center ">
                  <Images
                    src={mission}
                    height={50}
                    width={50}
                    alt="mission icon"
                  />
                  <h4 className="heading-six text-primary mb-3">Our Mission</h4>
                </div>
                <div>
                  <p className="paragraph-regular text-secondary">
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures, to generate Lorem
                    Ipsum which looks The generated Lorem Ipsum is therefore
                    always free from repetition
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-gray-200" />

              {/* Our Vision */}
              <div className="space-y-5">
                <div className=" flex gap-x-[29px]  items-center ">
                  <Images
                    src={vision}
                    height={50}
                    width={50}
                    alt="vision icon"
                  />
                  <h4 className="heading-six text-primary mb-3">Our Vision</h4>
                </div>
                <div>
                  <p className="paragraph-regular text-secondary">
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures, to generate Lorem
                    Ipsum which looks The generated Lorem Ipsum is therefore
                    always free from repetition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
