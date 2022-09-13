import React from "react";
import { dedicatedTeamAbout } from "../assets";

export function DedicatedTeamsAbout() {
  return (
    <div className="dedicated__teams__about">
      <div className="dedicated__teams__about__left">
        <div className="dedicated__teams__about__left__heading heading">
          Get A Perfectly Fitted Team
        </div>
        <div className="dedicated__teams__about__left__info">
          When you don't want to hire permanent resources, you can rely on our
          dedicated resources to either work as an independent extension or as
          part of your existing team, both on a partime/fulltime basis.
        </div>
      </div>
      <div className="dedicated__teams__about__right">
        <img
          loading="lazy"
          src={dedicatedTeamAbout}
          alt="dedicatedTeamAbout"
          className="dedicated__teams__about__right__img"
        />
      </div>
    </div>
  );
}
