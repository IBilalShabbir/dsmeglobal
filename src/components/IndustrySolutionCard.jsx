import React from "react";

export function IndustrySolutionCard({ image, title, info }) {
  return (
    <div className="industries__solutions__content__card">
      <img
        src={image}
        alt={title}
        className="industries__solutions__content__card__img"
      />
      <div className="industries__solutions__content__card__heading heading">
        {title}
      </div>
      <div className="industries__solutions__content__card__info">{info}</div>
    </div>
  );
}
