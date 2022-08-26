import React from "react";
import { ceo } from "../assets";

export function AboutCeoMessage() {
  return (
    <div className="about__ceo__message">
      <div className="about__ceo__message__content">
        <div className="about__ceo__message__content__left">
          <div className="about__ceo__message__content__left__heading heading">
            Message From Our Ceo
          </div>
          <div className="about__ceo__message__content__left__info">
            We believe in what we do and that drives us to excel
          </div>
        </div>
        <div className="about__ceo__message__content__right">
          <img
            loading="lazy"
            src={ceo}
            alt="Dayyan Shahid"
            className="about__ceo__message__content__right__img"
          />
          <div className="about__ceo__message__content__right__info">
            “We enable a smooth and reliable digital transformation by providing
            comprehensive services that embed technology into business.”
          </div>
        </div>
      </div>
    </div>
  );
}
