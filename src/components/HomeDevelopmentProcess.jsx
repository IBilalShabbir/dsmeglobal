import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import {
  developmentProcessDesktop,
  developmentProcessMobile,
  developmentProcessSvg,
} from "../assets";

export function HomeDevelopmentProcess() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div className="home__development__process">
      <img
        loading="lazy"
        src={developmentProcessSvg}
        alt="developmentProcessSvg"
        className="home__development__process__svg"
      />
      <Fade bottom distance="30%">
        <div className="home__development__process__heading heading">
          Our Development Process
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__development__process__info">
          We understand the potential value of emerging technologies for both
          corporates and consumers and thus help you choose the right set of
          technologies.
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <img
          loading="lazy"
          src={isMobile ? developmentProcessMobile : developmentProcessDesktop}
          alt={
            isMobile ? "developmentProcessMobile" : "developmentProcessDesktop"
          }
          className="home__development__process__img"
        />
      </Fade>
    </div>
  );
}
