import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import { allImages } from "../../hepler/imageprovider";
import SectionHeader from "../common/SectionHeader";

// Mission Icon
const MissionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#4f5de4" strokeWidth="2" />
    <circle cx="20" cy="20" r="10" stroke="#4f5de4" strokeWidth="2" />
    <circle cx="20" cy="20" r="3" fill="#4f5de4" />
    <line x1="20" y1="1" x2="20" y2="10" stroke="#4f5de4" strokeWidth="2" />
    <line x1="20" y1="30" x2="20" y2="39" stroke="#4f5de4" strokeWidth="2" />
  </svg>
);

// Vision Icon
const VisionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#4f5de4" strokeWidth="2" />
    <path d="M20 12 L28 28 L20 24 L12 28 Z" stroke="#4f5de4" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="3" stroke="#4f5de4" strokeWidth="1.5" fill="none" />
    <line x1="20" y1="1" x2="20" y2="7" stroke="#4f5de4" strokeWidth="2" />
    <line x1="20" y1="33" x2="20" y2="39" stroke="#4f5de4" strokeWidth="2" />
    <line x1="1" y1="20" x2="7" y2="20" stroke="#4f5de4" strokeWidth="2" />
    <line x1="33" y1="20" x2="39" y2="20" stroke="#4f5de4" strokeWidth="2" />
  </svg>
);

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
                  <Images src={mission} height={50} width={50} alt="mission icon" />
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
                  <Images src={vision} height={50} width={50} alt="vision icon" />
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