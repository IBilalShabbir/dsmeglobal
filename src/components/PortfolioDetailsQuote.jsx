import React from "react";

export function PortfolioDetailsQuote({ data }) {
  return (
    <div className="portfolio__details__quote">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={data.theme}
          d="M33.2,-23.5C37.5,-21.1,31.7,-7.6,30.8,11.3C29.9,30.3,34,54.6,26.5,60.3C19,65.9,-0.1,52.8,-18.4,42.4C-36.7,31.9,-54.3,24.2,-62.4,8.6C-70.5,-7,-69,-30.5,-57.1,-34.6C-45.1,-38.8,-22.5,-23.8,-4,-20.5C14.5,-17.3,28.9,-26,33.2,-23.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="portfolio__details__quote__message">{data.quotation}</div>
      <div className="portfolio__details__quote__name heading">
        {data.quotationAuthor}
      </div>
      <div className="portfolio__details__quote__designation">
        {data.quotationDesignation}
      </div>
    </div>
  );
}
