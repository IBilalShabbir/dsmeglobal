import React from "react";
import { ourMission, ourVision } from "../assets";

export function AboutOur() {
  return (
    <div className="about__our">
      <div className="about__our__entry">
        <img
          loading="lazy"
          src={ourVision}
          alt="ourVision"
          className="about__our__entry__img"
        />
        <div className="about__our__entry__heading heading">Our Vision</div>
        <div className="about__our__entry__info">
          DSME’s mission is to solve challenging technical problems in
          partnership with our clients. D.S.M.E Global Links cohorts with its
          customers to disentangle complex technology problems and help them
          acclimatize to a constantly evolving economic and technological
          backdrop. Specializing in mobile, web and other smart technologies.
        </div>
      </div>
      <div className="about__our__entry">
        <img
          loading="lazy"
          src={ourMission}
          alt="ourMission"
          className="about__our__entry__img"
        />
        <div className="about__our__entry__heading heading">Our Mission</div>
        <div className="about__our__entry__info">
          Our vision is to help businesses and people create a better community
          and social living using technology-enabled solutions. We spend our
          efforts in making the finest educational, commercial business
          software, mobile applications, and next-gen tech-enabled solutions to
          help and improve businesses and lifestyles of the community.
        </div>
      </div>
    </div>
  );
}
