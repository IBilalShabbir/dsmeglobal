import React from "react";
import Marquee from "react-fast-marquee";
import {
  amazingUIUX,
  helpSloganSvg,
  highQualityCode,
  oneStopSolution,
  specializedExperts,
} from "../assets";
import { HomeHelpEntry } from "./HomeHelpEntry";

export function HomeHelp() {
  return (
    <div className="home__help">
      <Marquee className="home__help__heading heading" speed={100}>
        <span>We Help You Succeed.</span>
        <span>We Help You Succeed.</span>
        <span>We Help You Succeed.</span>
        <span>We Help You Succeed.</span>
        <span>We Help You Succeed.</span>
      </Marquee>
      <div className="home__help__info">
        Work with top-notch developers and designers to build, enhance and
        support your product on time and in budget.
      </div>
      <div className="home__help__slogan">
        <img
          src={helpSloganSvg}
          alt="helpSloganSvg"
          className="home__help__slogan__svg"
        />
        <span>"</span>
        We build amazing software solutions on-time and within budget.
        <span>"</span>
      </div>
      <div className="home__help__content">
        <HomeHelpEntry
          image={specializedExperts}
          heading={
            <>
              Specialized
              <span>Experts</span>
            </>
          }
        />
        <HomeHelpEntry
          image={amazingUIUX}
          heading={
            <>
              Amazing
              <span>UI/UX</span>
            </>
          }
        />
        <HomeHelpEntry
          image={oneStopSolution}
          heading={
            <>
              One-Stop
              <span>Solution</span>
            </>
          }
        />
        <HomeHelpEntry
          image={highQualityCode}
          heading={
            <>
              High
              <span>Quality Code</span>
            </>
          }
        />
      </div>
    </div>
  );
}
