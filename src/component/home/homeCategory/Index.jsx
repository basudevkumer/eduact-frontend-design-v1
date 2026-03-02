import React from "react";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import Button from "../../common/Button"
import allIcons from "../../../hepler/iconProvider";

const HomeCategory = () => {
  // for icon and images
  const {
    homeCategoryImages,
    homeAboutFram2,
    categoryImagesArray,
    categoryImagesFive,
  } = allImages;
  const {rightArrow} = allIcons
  return (
    <section>
      <div
        className="mt-[120px] py-[120px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeCategoryImages})` }}
      >
        <Container>
          <div className="flex flex-col items-center gap-y-[30px]">
            <div className="flex items-center gap-x-4">
              <h6 className="text-white heading-six">Our Categories</h6>

              <figure>
                <img src={homeAboutFram2} alt="homeAboutFram" />
              </figure>
            </div>
            <h3 className="text-white heading-three max-w-[592px] text-center">
              Favorite Topics To Learn
            </h3>
          </div>
          <div className="mt-[80px] bg-white rounded-[5px] overflow-hidden grid grid-cols-4">
            {categoryImagesArray.map((items) => {
              return (
                <div
                  className={`py-[56px] px-[92px] flex flex-col items-center space-y-[27px]   ${items.id === 4 ? "border-none" : "border-r border-primary"}`}
                  key={items.id}
                >
                  <figure>
                    <img src={items.images} alt="categoryImages" />
                  </figure>
                  <h6 className="heading-six text-primary text-center ">
                    Business Management
                  </h6>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="mb-[114px]">
        <Container>
          <div
            className="py-[80px] pl-[113px]  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryImagesFive})` }}
          >
            <h3 className=" max-w-[550px]   heading-three text-white pb-10">
              Discover the campus through a video tour
            </h3>
            <Button children={"Discover More"} icon={rightArrow}/>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeCategory;
