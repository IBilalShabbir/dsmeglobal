import React, { useRef } from "react";
import { useIsInViewport } from "../utils/useIsInViewport";
import CountUp from "react-countup";
import { statsSvg } from "../assets";

export function HomeStats() {
  const ref = useRef(null);
  useIsInViewport(ref);
  return (
    <section className="home__stats" ref={ref}>
      <img src={statsSvg} alt="statsSvg" className="home__stats__svg" />
      <div className="home__stats__content">
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={10} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Years In Remote Software Development
          </div>
        </div>
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={150} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Digital Solutions Delivered
          </div>
        </div>
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={200} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Experts On Board
          </div>
        </div>
      </div>
    </section>
  );
}
