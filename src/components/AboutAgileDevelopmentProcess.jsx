import React from "react";
import { Fade } from "react-reveal";
import agileprocess from "../assets/agile__process__img.webp";

export function AboutAgileDevelopmentProcess() {
  return (
    <div className="about__agile__process">
      <div className="about__agile__process__heading">
        Our <span>Development</span> Process
      </div>
      <Fade>
        <img
          loading="lazy"
          className="about__agile__process__img"
          src={agileprocess}
          alt="agile process img"
        />
      </Fade>
    </div>
  );
}
