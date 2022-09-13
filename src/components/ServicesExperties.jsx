import React from "react";

export function ServicesExperties({ children, image }) {
  return (
    <div className="services__experties">
      <div className="services__experties__heading heading">Our Expertise</div>
      <div className="services__experties__info">
        Building a great business and consumer apps means not only creating an
        amazing user experience but also taking architecture, technical design,
        and security into account.
      </div>
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
