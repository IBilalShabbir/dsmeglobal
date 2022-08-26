import React from "react";
import { agileProcess, developmentProcessSvg } from "../assets";

export function AboutDevelopmentProcess() {
  return (
    <div className="about__our__development__process">
      <img
        loading="lazy"
        src={developmentProcessSvg}
        alt="developmentProcessSvg"
        className="about__our__development__process__svg"
      />
      <div className="about__our__development__process__heading heading">
        Our Development Process
      </div>
      <img
        loading="lazy"
        src={agileProcess}
        alt="agileProcess"
        className="about__our__development__process__img"
      />
    </div>
  );
}
