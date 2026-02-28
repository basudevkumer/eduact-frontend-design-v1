import React from "react";
import Container from "../../commonComponent/Container";
import { allImages } from "../../../hepler/imageprovider";
import ServiceCard from "../../commonComponent/ServiceCard";
import { homeServicesArr } from "../../../hepler/projectArryObj";

const HomeServices = () => {
  const { homeServicesBanner, homeAboutFram } = allImages;
  return (
    <section
      className="py-[120px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeServicesBanner})` }}
    >
      <Container>
        <div>
          <div className="flex flex-col items-center gap-y-6">
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
              return <ServiceCard key={index} icon={items.icon} title={items.title} description={items.description}/>;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeServices;
