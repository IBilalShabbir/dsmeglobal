import React from "react";
import { Link } from "react-router-dom";

export function HomeEngagementCard({ image, title, info, svg, to }) {
  return (
    <Link
      to={to}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="home__engagement__content__card"
    >
      {svg}
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="home__engagement__content__card__img"
      />
      <div className="home__engagement__content__card__heading">{title}</div>
      <div className="home__engagement__content__card__info">{info}</div>
      <svg
        width="31"
        height="14"
        viewBox="0 0 31 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="home__engagement__content__card__icon"
      >
        <path
          d="M30.4205 7.26494C30.7621 6.92337 30.7621 6.36959 30.4205 6.02803L24.8545 0.461978C24.5129 0.120417 23.9591 0.120417 23.6176 0.461978C23.276 0.803539 23.276 1.35732 23.6176 1.69888L28.5652 6.64648L23.6176 11.5941C23.276 11.9357 23.276 12.4894 23.6176 12.831C23.9591 13.1726 24.5129 13.1726 24.8545 12.831L30.4205 7.26494ZM0.0649414 7.52111H29.8021V5.77186H0.0649414V7.52111Z"
          fill="#2ECC82"
        />
      </svg>
    </Link>
  );
}
