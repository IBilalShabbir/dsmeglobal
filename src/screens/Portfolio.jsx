import React, { useState } from "react";
import { BlogContent } from "../components/BlogContent";
import { BlogFilters } from "../components/BlogFilters";
import { Jumbotron } from "../components/Jumbotron";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

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
      <Jumbotron
        heading="PORTFOLIO"
        description="DSME Global Links has successfully rendered digital solutions to every
          type and size of industries. We take up challenges not only to deliver
          impactful solutions but also to create avant-garde products. We not
          only provides customized services but also builds products to aid
          industry verticals. We accept challenges boldly to move a step forward
          in the innovative world."
      />
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
