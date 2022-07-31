import React from "react";
import { Fade, Zoom } from "react-reveal";
import missionSvg from "../assets/missionSvg.svg";

export function AboutOurMission() {
  return (
    <div
      className="our__mission__section__about__us"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="our__mission__section__about__us__content">
        <Fade>
          <div className="our__mission__section__about__us__content__left">
            <div
              className="feature__section__entry__content__jumbotron__sub__heading"
              style={{
                color: "#ffffff",
              }}
            >
              Our <span>Mission</span>
            </div>
            <div
              className="our__mission__section__about__us__content__left__para"
              style={{
                color: "#ffffff",
              }}
            >
              DSME’s mission is to solve challenging technical problems in
              partnership with our clients. D.S.M.E Global Links cohorts with
              its customers to disentangle complex technology problems and help
              them acclimatize to a constantly evolving economic and
              technological backdrop. Specializing in mobile, web and other
              smart technologies.
            </div>
          </div>
        </Fade>
        <div className="our__mission__section__about__us__content__right">
          <Zoom>
            <img
              loading="lazy"
              src={missionSvg}
              alt="missionSvg"
              className="our__mission__section__about__us__content__right__img"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
