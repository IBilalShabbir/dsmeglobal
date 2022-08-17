import React from "react";
import { Link } from "react-router-dom";

export function HomeServicesCard({ image, title, info }) {
  return (
    <Link to="/" className="home__services__content__card">
      <img
        src={image}
        alt={title}
        className="home__services__content__card__img"
      />
      <div className="home__services__content__card__heading">{title}</div>
      <div className="home__services__content__card__info">
        {info.substring("", 100) + "..."}
      </div>
    </Link>
  );
}
