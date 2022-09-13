import React from "react";
import { Fade } from "react-reveal";

export function HomeTechnologiesCard({ title, info, image, smaller }) {
  return (
    <Fade bottom distance="30%">
      <div className="home__technologies__content__entry">
        <div
          className={
            smaller
              ? "home__technologies__content__entry__content home__technologies__content__entry__content__special"
              : "home__technologies__content__entry__content"
          }
        >
          {image}
          <div className="home__technologies__content__entry__heading">
            {title}
          </div>
          <div className="home__technologies__content__entry__info">{info}</div>
        </div>
      </div>
    </Fade>
  );
}
