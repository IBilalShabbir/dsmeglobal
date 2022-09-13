import React, { useState } from "react";
import { BlogContent } from "../components/BlogContent";
import { BlogFilters } from "../components/BlogFilters";
import { fetcher } from "../utils/fetcher";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { Jumbotron } from "../components/Jumbotron";

export default function Blog() {
  const [filter, setFiter] = useState("");
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher
  );
  function dataFilter() {
    return data?.filter((item) => {
      let category;
      item.categories.map((item) => {
        category = item.label;
      });
      return category?.includes(filter);
    });
  }

  return (
    <>
      <Jumbotron
        heading="BLOGS"
        description="Keep up with the most trending tech news articles. Stay ahead of the
          curve and up-to-date with the latest technology to advance and
          innovate your business at DSME Global Link Blog."
      />
      <div
        style={{
          backgroundColor: "#EFEFEF",
          paddingTop: "5em",
          paddingBottom: "5em",
        }}
      >
        <BlogFilters filter={filter} setFiter={setFiter} />
        <BlogContent dataFilter={dataFilter} data={data} filter={filter} />
      </div>
      <div className="blog__motivation">
        <div className="blog__motivation__heading heading">
          Delivering software solutions beyond expectations
        </div>
        <div className="blog__motivation__info">Have a project in mind?</div>
        <Link to="/" className="blog__motivation__button">
          Learn More
        </Link>
      </div>
    </>
  );
}
