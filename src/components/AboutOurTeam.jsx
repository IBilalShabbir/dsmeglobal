import React from "react";
import { Fade } from "react-reveal";
import { teamData } from "../constants/data";

export function AboutOurTeam() {
  return (
    <div className="about__teams">
      <div className="about__teams__heading">
        <span>Teamwork</span>, Makes the dream work
      </div>
      <div className="about__teams__content">
        {teamData.map((item) => (
          <Fade up>
            <div
              className="about__teams__content__entry"
              key={JSON.stringify(item)}
            >
              <img
                src={
                  "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1658515904/dsme_team/" +
                  item.image +
                  ".webp"
                }
                alt={item.name}
                className="about__teams__content__entry__img"
              />
              <div className="about__teams__content__entry__overlay">
                <div className="about__teams__content__entry__overlay__heading">
                  {item.name}
                </div>
                <div className="about__teams__content__entry__overlay__info">
                  {item.designation}
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
