import React from "react";

export function ServicesExperties({ children, image, description }) {
  return (
    <div className="services__experties">
      <div className="services__experties__heading heading">Our Expertise</div>
      <div className="services__experties__info">{description}</div>
      <div className="services__experties__content">
        <div className="services__experties__content__left">{children}</div>
        <div className="services__experties__content__right">
          <img
            src={image}
            alt="homeBannerImage"
            className="services__experties__content__right__img"
          />
        </div>
      </div>
    </div>
  );
}
