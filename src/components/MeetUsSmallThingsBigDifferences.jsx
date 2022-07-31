import React from "react";
import agilefirst from "../assets/agileFirst.svg";
import { Fade } from "react-reveal";

export function MeetUsSmallThingsBigDifferences() {
  return (
    <div className="meetus__container__smallThings">
      <div className="meetus__container__smallThings__content">
        <Fade up In>
          <div className="meetus__container__smallThings__heading">
            Small things. <span>Big difference</span>
          </div>
        </Fade>
        <div className="meetus__container__smallThings__content__container">
          <Fade up>
            <div className="meetus__container__smallThings__left">
              <div className="meetus__container__smallThings__left__heading">
                <span>Agile </span> first
              </div>
              <div className="meetus__container__smallThings__left__para">
                For some people, Agile is dull. For us, it is the way to adapt,
                deliver and grow.
              </div>
            </div>
          </Fade>
          <div className="meetus__container__smallThings__right">
            <Fade up>
              <div className="meetus__container__smallThings__right__image">
                <img loading="lazy" src={agilefirst} alt="Agile first" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
