import React from "react";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import ButtonTwo from "../../common/ButtonTwo";

const Subscribe = () => {
  //for images
  const { subscribeImages } = allImages;
  return (
    <section>
      <Container>
        <div
          className="px-[77px] py-[100px] flex   items-start justify-between rounded-t-[14px]"
          style={{ backgroundImage: `url(${subscribeImages})` }}
        >
          <h3 className="heading-three text-white w-[518px]">
            Subscribe to our newsletter for daily updates
          </h3>
          <div className=" flex  gap-x-3 ">
            <input
              type="text"
              placeholder="Email Address"
              className="py-4 px-6  bg-white  rounded-[6px]  paragraph-regular text-secondary w-[352px]"
            />
            <ButtonTwo children={"Subscribe"} className={"!py-4"}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
