import React from "react";
import { Fade } from "react-reveal";

export function QuateSectionCard({ title, info, svg }) {
  return (
    <Fade>
      <div className="container__stats__right__card">
        <div className="container__stats__right__card__icon">{svg}</div>
        <div className="container__stats__right__card__heading">{title}</div>
        <div className="container__stats__right__card__info">{info}</div>
      </div>
    </Fade>
  );
}
