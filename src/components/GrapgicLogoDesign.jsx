import React from "react";
import { logobrandone } from "../assets/index";
import { logobrandtwo } from "../assets/index";

export function GrapgicLogoDesign() {
  return (
    <div className="graphic__design__logo__and__branding__section">
      <div className="graphic__design__logo__and__branding__section__container">
        <div className="graphic__design__logo__and__branding__container__heading heading">
          LOGO & BRANDING DESIGN PACKAGES
        </div>
        <div className="graphic__design__logo__and__branding__container__text">
          DESIGN At DSME Global Links we begin every project with a
          conversation. It’s important for us to spend time listening to your
          story before we offer any solutions because every business is
          different. So before we offer final estimates we spend time on the
          phone with you brain-storming strategies and solutions that work best
          for you.
        </div>
        <div className="graphic__design__logo__and__branding__container__img__data">
          <img src={logobrandone} alt="Logobrandone" />
          <img src={logobrandtwo} alt="Logobrandtwo" />
          <img src={logobrandone} alt="Logobrandone" />
          <img src={logobrandtwo} alt="Logobrandtwo" />
          <img src={logobrandone} alt="Logobrandone" />
          <img src={logobrandtwo} alt="Logobrandtwo" />
          <img src={logobrandone} alt="Logobrandone" />
          <img src={logobrandtwo} alt="Logobrandtwo" />
        </div>
      </div>
    </div>
  );
}
