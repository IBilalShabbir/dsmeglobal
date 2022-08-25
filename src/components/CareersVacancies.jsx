import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { CareersVacanciesEntry } from "./CareersVacanciesEntry";

export function CareersVacancies() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_careers`,
    fetcher
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <div className="careers__vacancies">
      <div className="careers__vacancies__heading heading">
        Open Vacancies
        <span>Join us</span>
      </div>
      <div className="careers__vacancies__info">
        We give you opportunities to excel and achieve the global recognition
        that you deserve!
      </div>
      <div className="careers__vacancies__content">
        <div className="careers__vacancies__content__search">
          <input
            type="text"
            className="careers__vacancies__content__search__field"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#667080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0004 21L16.6504 16.65"
              stroke="#667080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {data
          ?.filter((item) =>
            item.position
              .toLowerCase()
              .trim()
              .includes(searchQuery.toLowerCase().trim())
          )
          ?.map((item, i) => (
            <CareersVacanciesEntry
              data={item}
              index={i}
              key={i}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
      </div>
    </div>
  );
}
