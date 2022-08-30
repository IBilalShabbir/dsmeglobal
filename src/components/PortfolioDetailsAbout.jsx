import React from "react";

export function PortfolioDetailsAbout({ data }) {
  return (
    <div className="portfolio__details__about">
      <div className="portfolio__details__about__heading heading">
        About{" "}
        <span
          style={{
            color: data.theme,
          }}
        >
          {data.title}
        </span>{" "}
        Solution
      </div>
      <div className="portfolio__details__about__info">{data.description}</div>
      <div className="portfolio__details__about__categories">
        {data.categories?.map((item) => (
          <div className="portfolio__details__about__categories__entry">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
