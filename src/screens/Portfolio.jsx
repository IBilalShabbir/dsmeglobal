import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BlogContent } from "../components/BlogContent";
import { BlogFilters } from "../components/BlogFilters";
import { PortfolioJumbotron } from "../components/PortfolioJumbotron";

export default function Portfolio() {
  const [filter, setFiter] = useState("");
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_project`,
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
      <PortfolioJumbotron />
      <div
        style={{
          backgroundColor: "#EFEFEF",
          paddingTop: "5em",
          paddingBottom: "5em",
        }}
      >
        <BlogFilters filter={filter} setFiter={setFiter} />
        <BlogContent
          dataFilter={dataFilter}
          data={data}
          filter={filter}
          isPortfolio={true}
        />
      </div>
    </>
  );
}
