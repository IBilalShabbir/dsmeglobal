import React from "react";
import { Link } from "react-router-dom";
import { getText } from "../utils/getText";

export function CareersVacanciesEntry({
  data,
  index,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <div
      className="careers__vacancies__content__entry"
      style={selectedIndex === index ? { marginBottom: "4em" } : null}
    >
      {selectedIndex === index ? null : (
        <button
          className="careers__vacancies__content__entry__button heading"
          onClick={() => {
            selectedIndex === index
              ? setSelectedIndex(false)
              : setSelectedIndex(index);
          }}
        >
          {data?.position}
        </button>
      )}
      {selectedIndex === index ? (
        <div className="careers__vacancies__content__entry__content">
          <Link
            to="/vacancies-details"
            state={data}
            className="careers__vacancies__content__entry__content__name heading"
          >
            {data?.position}
          </Link>
          <div className="careers__vacancies__content__entry__content__sub__heading">
            Description
          </div>
          <div className="careers__vacancies__content__entry__content__info">
            {getText(data?.description)}
          </div>
          <div className="careers__vacancies__content__entry__content__sub__heading">
            Requirements
          </div>
          <div className="careers__vacancies__content__entry__content__info">
            {getText(data?.requirements)}
          </div>
          <Link
            to="/"
            className="careers__vacancies__content__entry__content__button"
          >
            Apply Now
          </Link>
        </div>
      ) : null}
    </div>
  );
}
