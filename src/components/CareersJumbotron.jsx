import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function CareersJumbotron() {
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
          Good things should grow, and so do we
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="jumbotron__info">
          There are jobs and then there are careers. <br />
          We welcome you to find your best fit at DSME Global Links and become
          part of the fastest-growing technology leaders in the region. Join us
          to be surrounded by smart, ambitious, and motivated people at DSME
          Global Links.
        </div>
      </Fade>
      <Link
        to="/services"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="jumbotron__link"
      >
        <Fade distance="30%">Let’s work together</Fade>
      </Link>
    </div>
  );
}
