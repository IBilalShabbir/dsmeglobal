import React from "react";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";

export function AboutJumbotron() {
  return (
    <div className="about__jumbotron">
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
      <div className="about__jumbotron__heading heading">
        LETS GET TO KNOW US
      </div>
      <div className="about__jumbotron__info">
        We are talented. We are experienced. <br />
        We are bold. We are DSME Global Links! <br />
        Get a behind-the-scenes glimpse of your new favorite software
        development company.
      </div>
    </div>
  );
}
