import React from "react";
import { Fade } from "react-reveal";
import { Link, useLocation } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";
import { getText } from "../utils/getText";
import { parseDate } from "../utils/parseDate";

export default function CareerDetails() {
  const location = useLocation();
  return (
    <>
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
            {location.state.position}
          </div>
        </Fade>
        <Fade bottom distance="30%">
          <div className="jumbotron__sub__heading">
            {parseDate(location.state.createdAt)}
          </div>
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
      <div className="careers__details__content">
        <div className="careers__details__content__heading heading">
          Job Responsibilities
        </div>
        <div className="careers__details__content__info">
          {getText(location.state?.description)}
        </div>

        <div className="careers__details__content__heading heading">
          Requirements
        </div>
        <div className="careers__details__content__info">
          {getText(location.state?.requirements)}
        </div>
      </div>
    </>
  );
}
