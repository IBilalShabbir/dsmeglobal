import React from "react";
import missionSvg from "../assets/missionSvg.svg";
import visionSvg from "../assets/visionSvg.svg";
import { Bounce } from "react-reveal";

export function AboutOurMissionandVision() {
  return (
    <>
      <div className="about__page__container__pricing">
        <div className="about__page__container__pricing__content">
          <div className="about__page__container__pricing__content__left">
            <img loading="lazy" src={missionSvg} alt="missionSvg" />
            <Bounce duration={2000} left>
              <div className="about__page__container__pricing__content__left__heading">
                Our Mission
              </div>
              <div className="about__page__container__pricing__content__left__info">
                DSME’s mission is to solve challenging technical problems in
                partnership with our clients. D.S.M.E Global Links cohorts with
                its customers to disentangle complex technology problems and
                help them acclimatize to a constantly evolving economic and
                technological backdrop. Specializing in mobile, web and other
                smart technologies.
              </div>
            </Bounce>
          </div>
          <div className="about__page__container__pricing__content__right">
            <img loading="lazy" src={visionSvg} alt="visionSvg" />
            <Bounce duration={2000} right>
              <div className="about__page__container__pricing__content__right__heading">
                Our Vision
              </div>
              <div className="about__page__container__pricing__content__right__heading__text">
                Our vision is to help businesses and people create a better
                community and social living using technology-enabled solutions.
                We spend our efforts in making the finest educational,
                commercial business software, mobile applications, and next-gen
                tech-enabled solutions to help and improve businesses and
                lifestyles of the community.
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </>
  );
}
