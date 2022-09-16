import React from "react";

export function WebScrapingFeatureEntry({ icon, heading, description }) {
  return (
    <div className="web__scraping__feature__content__entry">
      <div className="web__scraping__feature__content__entry__icon">{icon}</div>
      <div className="web__scraping__feature__content__entry__heading heading">
        {heading}
      </div>
      <div className="web__scraping__feature__content__entry__info">
        {description}
      </div>
    </div>
  );
}
