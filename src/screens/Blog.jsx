import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BlogContent } from "../components/BlogContent";
import { BlogFilters } from "../components/BlogFilters";
import { BlogJumbotron } from "../components/BlogJumbotron";
import { Link } from "react-router-dom";

export default function Blog() {
  const [filter, setFiter] = useState("");
  console.log(filter);
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
      <BlogJumbotron />
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
