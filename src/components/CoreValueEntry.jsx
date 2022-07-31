import React from "react";
import { Fade } from "react-reveal";

export function CoreValueEntry({ svg, label, info }) {
  return (
    <Fade up>
      <div className="about__core__values__content__entry">
        <div className="about__core__values__content__entry__icon">{svg}</div>
        <div className="about__core__values__content__entry__heading">
          {label}
        </div>
        <div className="about__core__values__content__entry__info">{info}</div>
      </div>
    </Fade>
  );
}
