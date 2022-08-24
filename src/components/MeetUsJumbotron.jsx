import React from "react";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function MeetUsJumbotron() {
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
      <div className="jumbotron__heading heading">MEET US</div>
      <div className="jumbotron__info">
        Diverse personalities, Geeks, Individualists, and Team players Making
        kick-ass apps together.
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
