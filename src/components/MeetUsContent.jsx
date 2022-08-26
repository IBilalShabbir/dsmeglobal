import React from "react";
import {
  smallthingsBigdifference,
  smallthingsBigdifference2,
  smallthingsBigdifference1,
} from "../assets";

export function MeetUsContent() {
  return (
    <div className="meet__us__content">
      <img
        loading="lazy"
        src={smallthingsBigdifference1}
        alt="smallthingsBigdifference1"
        className="meet__us__content__svg1"
      />
      <img
        loading="lazy"
        src={smallthingsBigdifference2}
        alt="smallthingsBigdifference2"
        className="meet__us__content__svg2"
      />
      <div className="meet__us__content__heading heading">
        Small things. Big difference
      </div>
      <img
        loading="lazy"
        src={smallthingsBigdifference}
        alt="smallthingsBigdifference"
        className="meet__us__content__img"
      />
    </div>
  );
}
