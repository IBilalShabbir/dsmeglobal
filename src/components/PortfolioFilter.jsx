import React from "react";
import { Fade } from "react-reveal";

export function PortfolioFilter({ title, onChange, defaultChecked }) {
  return (
    <Fade>
      <div className="blog__page__filter__entry">
        <input
          type="radio"
          className="blog__page__filter__entry__input"
          name="portfolio__page__filter__entry"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <div className="blog__page__filter__entry__content">{title}</div>
      </div>
    </Fade>
  );
}
