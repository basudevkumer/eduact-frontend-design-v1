import React from "react";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import { teamMembers } from "../../../hepler/projectArryObj";
import Capsule from "../../common/Capsule";
import SectionHeader from "../../common/SectionHeader";

const HomeTeam = () => {
  // for images and icons
  const { hometeam, evantoImages } = allImages;
  return (
    <section>
      <Container>
        <div className="relative translate-y-[92px]">
          <SectionHeader
            title={"Our Team"}
            subTitle={"Meet Our Professional Team Members"}
            subTitleClassName={"  !max-w-[592px]"}
          />
        </div>
      </Container>

      <div>
        <div className="relative translate-y-[184px]">
          <Container>
            <div className="grid grid-cols-3 gap-x-[35px]">
              {teamMembers.map((items, index) => {
                return (
                  <Capsule
                    key={index}
                    teacherName={items.name}
                    department={items.designation}
                  />
                );
              })}
            </div>
          </Container>
        </div>
        <figure className="relative translate-y-[-126px] z-[-1]">
          <img
            src={hometeam}
            alt="hometeam"
            className="w-full h-[410px] object-cover"
          />
        </figure>
      </div>
      <div className="pb-[120px]">
        <Container>
          <ul className="grid grid-cols-5 gap-x-[79px]">
            {[...new Array(5)].map((_, index) => {
              return (
                <li key={index}>
                  <img src={evantoImages} alt="evantoImages" />
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default HomeTeam;
