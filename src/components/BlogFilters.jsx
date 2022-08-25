import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BlogFiltersEntry } from "./BlogFiltersEntry";

export function BlogFilters({ filter, setFiter }) {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_category`,
    fetcher
  );
  return (
    <div className="blog__filters">
      {data?.map((item) => (
        <BlogFiltersEntry
          key={item._id}
          label={item.name}
          filter={filter}
          setFiter={setFiter}
        />
      ))}
    </div>
  );
}
