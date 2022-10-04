import React from "react";

export function AgileWorkShopWhatWeDoCards({ svg, title, text }) {
  return (
    <div className="agile__discovery__workshop__header__last__entry">
      <div className="agile__discovery__workshop__header__last__entry__icon">
        {svg}
      </div>
      <div className="agile__discovery__workshop__header__last__entry__heading">
        {title}
      </div>
      <div className="agile__discovery__workshop__header__last__entry__text">
        {text}
      </div>
    </div>
  );
}
