import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BlogFiltersEntry } from "./BlogFiltersEntry";

export function BlogFilters({ filter, setFiter }) {
  const [newData, setNewData] = useState([]);
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_category`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setNewData([{ name: "All" }, ...data]);
    }
  }, [data]);

  return (
    <div className="blog__filters">
      {newData?.map((item) => (
        <BlogFiltersEntry
          key={item._id ? item._id : item.name}
          label={item.name}
          filter={filter}
          setFiter={setFiter}
        />
      ))}
    </div>
  );
}
