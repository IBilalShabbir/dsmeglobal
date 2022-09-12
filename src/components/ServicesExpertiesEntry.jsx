import React from "react";

export function ServicesExpertiesEntry({ icon, title, description }) {
  return (
    <div className="services__experties__content__left__entry">
      <div className="services__experties__content__left__entry__icon">
        {icon}
      </div>
      <div className="services__experties__content__left__entry__content">
        <div className="services__experties__content__left__entry__content__heading">
          {title}
        </div>
        <div className="services__experties__content__left__entry__content__info">
          {description}
        </div>
      </div>
    </div>
  );
}
