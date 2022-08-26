import React from "react";

export function HomeHelpEntry({ image, heading }) {
  return (
    <div className="home__help__content__entry">
      <img
        loading="lazy"
        src={image}
        alt={heading}
        className="home__help__content__entry__img"
      />
      <div className="home__help__content__entry__heading">{heading}</div>
    </div>
  );
}
