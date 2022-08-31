import React from "react";
import {
  dedicatedTeamAdvantages,
  dedicatedTeamAdvantagesActive,
} from "../assets";
import { useState } from "react";

export function DedicatedTeamsAdvantages() {
  const [hover, setHover] = useState(false);
  return (
    <div className="dedicated__teams__advantages">
      <div className="dedicated__teams__advantages__heading heading">
        Advantages of using DSME’s Talent
      </div>
      <img
        src={hover ? dedicatedTeamAdvantagesActive : dedicatedTeamAdvantages}
        alt="dedicatedTeamAdvantages"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className="dedicated__teams__advantages__img"
      />
    </div>
  );
}
