import React from "react";

export function ServicesExperianceEntry({ icon, heading, info }) {
  return (
    <div className="services__experiance__content__entry">
      <div className="services__experiance__content__entry__icon">{icon}</div>
      <div className="services__experiance__content__entry__content">
        <div className="services__experiance__content__entry__content__heading heading">
          {heading}
        </div>
        <div className="services__experiance__content__entry__content__info">
          {info}
        </div>
      </div>
    </div>
  );
}
