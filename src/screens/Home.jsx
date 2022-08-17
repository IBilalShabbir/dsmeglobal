import React from "react";
import { NavLink } from "react-router-dom";
import {
  homeBannerImage,
  homeBannerSvg1,
  homeBannerSvg2,
  homeBannerSvg3,
  homeBannerSvg4,
} from "../assets";

export default function Home() {
  return (
    <>
      <div className="home__jumbotron">
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
        <div className="home__jumbotron__content">
          <div className="home__jumbotron__content__left">
            <div className="home__jumbotron__content__left__heading heading">
              Quality <span>Products</span> <br /> You Really <span>Need</span>
            </div>
            <div className="home__jumbotron__content__left__info">
              Whether you want to modernize your application portfolio broadly,
              pursue specific opportunities in your industry, or optimize a
              single technology, DSME brings together all the services with
              leading back-office and industry-specific SaaS.
            </div>
            <NavLink
              to="/quote"
              className="home__jumbotron__content__left__button"
            >
              Get a quote
            </NavLink>
          </div>
          <div className="home__jumbotron__content__right">
            <img
              src={homeBannerImage}
              alt="homeBannerImage"
              className="home__jumbotron__content__right__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
