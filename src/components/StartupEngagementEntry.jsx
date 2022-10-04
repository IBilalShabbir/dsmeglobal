import React from "react";

export function StartupEngagementEntry({ svg, heading, info }) {
  return (
    <div className="startup__engagement__content__entry">
      <div className="startup__engagement__content__entry__icon">{svg}</div>
      <div className="startup__engagement__content__entry__heading heading">
        {heading}
      </div>
      <div className="startup__engagement__content__entry__info">{info}</div>
    </div>
  );
}
