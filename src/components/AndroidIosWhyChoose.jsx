import React from "react";

export function AndroidIosWhyChoose({ svg, title, info }) {
  return (
    <div className="androidios__why__choose__content__details__entry">
      <div className="androidios__why__choose__content__details__entry__heading heading">
        {svg}
        {title}
      </div>
      <div className="androidios__why__choose__content__details__entry__info">
        {info}
      </div>
    </div>
  );
}
