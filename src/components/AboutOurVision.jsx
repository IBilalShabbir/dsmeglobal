import React from "react";
import { Fade } from "react-reveal";
import visionSvg from "../assets/visionSvg.svg";

export function AboutOurVision() {
  return (
    <div
      className="our__vision__section__about__us"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="our__vision__section__about__us__content">
        <div className="our__vision__section__about__us__content__right">
          <Fade>
            <img
              loading="lazy"
              src={visionSvg}
              alt="visionSvg"
              className="our__vision__section__about__us__content__right__img"
            />
          </Fade>
        </div>
        <div className="our__vision__section__about__us__content__left">
          <Fade>
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              Our <span>Vision</span>
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              Our vision is to help businesses and people create a better
              community and social living using technology-enabled solutions. We
              spend our efforts in making the finest educational, commercial
              business software, mobile applications, and next-gen tech-enabled
              solutions to help and improve businesses and lifestyles of the
              community.
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
