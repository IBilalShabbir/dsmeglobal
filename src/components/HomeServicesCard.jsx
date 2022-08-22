import React from "react";
import { Link } from "react-router-dom";

export function HomeServicesCard({ image, title, info, svg, description }) {
  return (
    <Link
      to="/"
      className={
        description
          ? "home__services__content__card home__services__content__card__reverse"
          : "home__services__content__card"
      }
    >
      {svg ? (
        <div className="home__services__content__card__icon">{svg}</div>
      ) : (
        <img
          src={image}
          alt={title}
          className="home__services__content__card__img"
        />
      )}
      <div className="home__services__content__card__heading">{title}</div>
      {description ? (
        <div className="home__services__content__card__info">
          {description.length > 100
            ? description.substring("", 100) + "..."
            : description}
        </div>
      ) : (
        <div className="home__services__content__card__info">
          {info.length > 120 ? info.substring("", 120) + "..." : info}
        </div>
      )}
    </Link>
  );
}
