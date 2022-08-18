import React, { useEffect } from "react";
import { developmentProcessDesktop, developmentProcessMobile } from "../assets";

export function HomeDevelopmentProcess() {
  const [isMobile, setIsMobile] = React.useState(false);
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
      <div className="home__development__process__heading heading">
        Our Development Process
      </div>
      <div className="home__development__process__info">
        We understand the potential value of emerging technologies for both
        corporates and consumers and thus help you choose the right set of
        technologies.
      </div>
      <img
        src={isMobile ? developmentProcessMobile : developmentProcessDesktop}
        alt={
          isMobile ? "developmentProcessMobile" : "developmentProcessDesktop"
        }
        className="home__development__process__img"
      />
    </div>
  );
}
