import React from "react";
import Container from "../common/Container";
import { useVirtualizer } from "@tanstack/react-virtual";
import BlogCard from "../common/BlogCard";
import { blogData } from "../../hepler/projectArryObj";

const COLUMN_COUNT = 3;

const Blog = () => {
  const parentRef = React.useRef(null);

  const rowCount = Math.ceil(blogData.length / COLUMN_COUNT);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 700,
    overscan: 3,
  });

  return (
    <section className="pt-[120px] pb-[210px]">
      <Container>
        <div
          ref={parentRef}
          style={{
            height: "900px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const fromIndex = virtualRow.index * COLUMN_COUNT;
              const toIndex = Math.min(
                fromIndex + COLUMN_COUNT,
                blogData.length,
              );
              const rowItems = blogData.slice(fromIndex, toIndex);

              return (
                <div
                  key={virtualRow.key}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                  className="grid grid-cols-3 gap-x-6"
                >
                  {rowItems.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      cardImages={blog.cardImages}
                      userImages={blog.userImages}
                      time={blog.time}
                      heading={blog.heading}
                      userName={blog.userName}
                      userDepartment={blog.userDepartment}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
