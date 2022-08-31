import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function DedicatedTeamsJumbotron() {
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
      <Fade bottom distance="30%">
        <div className="jumbotron__heading heading">
          FULLY MANAGED DEVELOPMENT TEAMS{" "}
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="jumbotron__sub__heading">TO BUILD YOUR SOFTWARE</div>
      </Fade>
      <Link
        to="/services"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="jumbotron__link"
      >
        <Fade distance="30%">Let’s work together</Fade>
      </Link>
    </div>
  );
}
