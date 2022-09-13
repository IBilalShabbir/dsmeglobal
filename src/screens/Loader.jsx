import React from "react";
import { GridLoader } from "react-spinners";
import {
  homeBannerSvg1,
  homeBannerSvg2,
  homeBannerSvg3,
  homeBannerSvg4,
} from "../assets";

export function Loader() {
  const slogans = [
    "Lets Build Your Digital Presence",
    "Lets Make your idea reality",
  ];
  return (
    <div className="loader">
      <img
        src={homeBannerSvg1}
        alt="homeBannerSvg1"
        className="home__jumbotron__svg1"
      />
      <img
        src={homeBannerSvg2}
        alt="homeBannerSvg2"
        className="home__jumbotron__svg2"
      />
      <img
        src={homeBannerSvg3}
        alt="homeBannerSvg3"
        className="home__jumbotron__svg3"
      />
      <img
        src={homeBannerSvg4}
        alt="homeBannerSvg4"
        className="home__jumbotron__svg4"
      />
      <GridLoader color="#24aa6c" />
      <div className="loader__heading">
        {slogans
          .filter(
            (_item, i) => i === Math.round(Math.random() * slogans.length - 1)
          )
          .map((item) => item)}
      </div>
    </div>
  );
}
