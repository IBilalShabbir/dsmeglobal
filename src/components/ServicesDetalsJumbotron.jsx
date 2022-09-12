import React from "react";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export function ServicesDetalsJumbotron({ title, description }) {
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
        <div className="jumbotron__heading heading">{title}</div>
      </Fade>
      {description ? (
        <Fade bottom distance="30%">
          <div className="jumbotron__info">{description}</div>
        </Fade>
      ) : null}
      <Link
        to="/quote"
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
