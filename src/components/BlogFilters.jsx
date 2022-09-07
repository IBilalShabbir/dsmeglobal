import React, { useEffect, useState } from "react";
import { BlogFiltersEntry } from "./BlogFiltersEntry";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

export function BlogFilters({ filter, setFiter }) {
  const [newData, setNewData] = useState([]);
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setNewData([{ title: "All" }, ...data]);
    }
  }, [data]);

  return (
    <div className="blog__filters">
      {newData?.map((item) => (
        <BlogFiltersEntry
          key={item._id ? item._id : item.title}
          label={item.title}
          filter={filter}
          setFiter={setFiter}
        />
      ))}
    </div>
  );
}
