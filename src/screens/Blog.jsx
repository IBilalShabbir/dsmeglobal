import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BlogContent } from "../components/BlogContent";
import { BlogFilters } from "../components/BlogFilters";
import { BlogJumbotron } from "../components/BlogJumbotron";

export default function Blog() {
  const [filter, setFiter] = React.useState("");
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
    </>
  );
}
