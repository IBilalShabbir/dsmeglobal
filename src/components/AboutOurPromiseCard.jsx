import React from "react";

export function AboutOurPromiseCard({ number, title, info }) {
  return (
    <div className="about__our__promise__content__entry">
      <div className="about__our__promise__content__entry__number heading">
        {number}
      </div>
      <div className="about__our__promise__content__entry__content">
        <div className="about__our__promise__content__entry__content__heading">
          {title}
        </div>
        <div className="about__our__promise__content__entry__content__info">
          {info}
        </div>
      </div>
    </div>
  );
}
