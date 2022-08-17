import React from "react";

export function HomeTechnologiesCard({ title, info, image }) {
  return (
    <div className="home__technologies__content__entry">
      <img
        src={image}
        alt={title}
        className="home__technologies__content__entry__img"
      />
      <div className="home__technologies__content__entry__heading">{title}</div>
      <div className="home__technologies__content__entry__info">{info}</div>
    </div>
  );
}
