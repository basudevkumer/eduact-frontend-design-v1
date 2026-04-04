import React from "react";
import Container from "../../common/Container";
import { allImages } from "../../../hepler/imageprovider";
import { blogData } from "../../../hepler/projectArryObj";
import BlogCard from "../../common/BlogCard"
import SectionHeader from "../../common/SectionHeader";

const HomeBlog = () => {
  // for icons & images
  const { homeAboutFram } = allImages;
  return (
    <section className="border-t-2 border-[#E4E4E4] pt-[120px] pb-4">
      <Container>
        <div>
          <div className="flex flex-col items-center gap-y-6">
            <SectionHeader title={"Latest Blog"} subTitle={"Latest Updates & Articles"} />
          </div>
          <div className="mt-[80px] grid grid-cols-3 gap-x-9 ">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-[416px]">
                <BlogCard
                  cardImages={blog.cardImages}
                  userImages={blog.userImages}
                  time={blog.time}
                  heading={blog.heading}
                  userName={blog.userName}
                  userDepartment={blog.userDepartment}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBlog;
