import React from "react";
import { noData } from "../assets";
import { BlogCard } from "./BlogCard";

export function BlogContent({ dataFilter, data, filter }) {
  return (
    <div
      className="home__blog home__blog__reverse"
      style={{
        paddingBottom: 0,
      }}
    >
      <div className="home__blog__content">
        {dataFilter()?.length > 0 ? (
          data?.map((item) => (
            <BlogCard item={item} key={item._id} filter={filter} />
          ))
        ) : (
          <div
            style={{
              width: "100%",
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              loading="lazy"
              src={noData}
              alt="noData"
              style={{
                width: "100%",
                maxWidth: 500,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
