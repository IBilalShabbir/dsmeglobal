import React from "react";

export function StartupProcessEntry({ svg, heading, info }) {
  return (
    <div className="startup__process__content__entry">
      <div className="startup__process__content__entry__heading heading">
        {svg}
        {heading}
      </div>
      <div className="startup__process__content__entry__info">{info}</div>
    </div>
  );
}
