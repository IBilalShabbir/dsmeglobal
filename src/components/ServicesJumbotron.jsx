import React from "react";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function ServicesJumbotron() {
  return (
    <div className="jumbotron">
      <img
        src={homeBannerSvg1}
        alt="homeBannerSvg1"
        className="home__jumbotron__svg1"
      />
      <img
        src={homeBannerSvg3}
        alt="homeBannerSvg3"
        className="home__jumbotron__svg3"
      />
      <div className="jumbotron__heading heading">
        FROM STARTUP TO ENTERPRISE
      </div>
      <div
        className="jumbotron__sub__heading"
        style={{
          marginTop: "-.5em",
        }}
      >
        THE FULL RANGE OF ENGINEERING SERVICES YOUR COMPANY NEEDS
      </div>
      <Link
        to="/services"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="jumbotron__link"
      >
        Let’s work together
      </Link>
    </div>
  );
}
