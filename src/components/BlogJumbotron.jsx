import React from "react";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function BlogJumbotron() {
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
      <div className="jumbotron__heading heading">BLOGS</div>
      <div className="jumbotron__info">
        Keep up with the most trending tech news articles. Stay ahead of the
        curve and up-to-date with the latest technology to advance and innovate
        your business at DSME Global Link Blog.
      </div>
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
        Let’s work together
      </Link>
    </div>
  );
}
