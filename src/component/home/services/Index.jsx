import React from "react";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import ServiceCard from "../../common/ServiceCard";
import { homeServicesArr, homeStatsData } from "../../../hepler/projectArryObj";
import ServicesNumber from "../../common/ServicesNumber";

const HomeServices = () => {
  // for images
  const { homeServicesBanner, homeAboutFram, homeServicesBanner2 } = allImages;
  return (
    <section className="mb-[82px]">
      <div
        className="py-[120px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeServicesBanner})` }}
      >
        <Container>
          <div>
            <div className="flex flex-col items-center gap-y-[30px]">
              <div className="flex items-center gap-x-4">
                <h6 className="text-tarnary heading-six">Our Service</h6>

                <figure>
                  <img src={homeAboutFram} alt="homeAboutFram" />
                </figure>
              </div>
              <h3 className="text-primary heading-three max-w-[592px] text-center">
                Creating a Lifelong Learning Best Community{" "}
              </h3>
            </div>
            <div className="mt-[80px] grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-9">
              {homeServicesArr.map((items, index) => {
                return (
                  <ServiceCard
                    key={index}
                    icon={items.icon}
                    title={items.title}
                    description={items.description}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      <div
        className="pb-[120px] mt-[120px]  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${homeServicesBanner2})` }}
      >
        <Container>
          <div className="grid grid-cols-4 gap-[66px]">
            {homeStatsData.map((items, index) => {
              return (
                <ServicesNumber
                  label={items.label}
                  suffix={items.suffix}
                  value={items.value}
                  key={index}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeServices;
