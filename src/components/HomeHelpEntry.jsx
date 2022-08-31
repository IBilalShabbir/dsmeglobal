import React from "react";
import { Fade } from "react-reveal";

export function HomeHelpEntry({ image, heading }) {
  return (
    <Fade bottom distance="30%">
      <div className="home__help__content__entry">
        <img
          loading="lazy"
          src={image}
          alt={heading}
          className="home__help__content__entry__img"
        />
        <div className="home__help__content__entry__heading">{heading}</div>
      </div>
    </Fade>
  );
}
