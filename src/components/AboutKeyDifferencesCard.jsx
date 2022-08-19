import React from "react";

export function AboutKeyDifferencesCard({ icon, title, info }) {
  return (
    <div className="about__key__differences__content__card">
      <div className="about__key__differences__content__card__content">
        <div className="about__key__differences__content__card__icon">
          {icon}
        </div>
        <div className="about__key__differences__content__card__heading">
          {title}
        </div>
        <div className="about__key__differences__content__card__info">
          {info}
        </div>
      </div>
    </div>
  );
}
