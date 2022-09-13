import React from "react";

export function DedicatedBestFitContent({ right, image, heading, list }) {
  return (
    <div
      className={
        right
          ? "dedicated__best__fit__content dedicated__best__fit__content__reverse"
          : "dedicated__best__fit__content"
      }
    >
      <img
        loading="lazy"
        src={image}
        alt={heading}
        className="dedicated__best__fit__content__img"
      />
      <div className="dedicated__best__fit__content__details">
        <div className="dedicated__best__fit__content__details__heading heading">
          {heading}
        </div>
        <div className="dedicated__best__fit__content__details__info">
          {list.map((item) => (
            <div className="dedicated__best__fit__content__details__info__entry">
              <div className="dedicated__best__fit__content__details__info__entry__dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
