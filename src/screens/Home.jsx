import React from "react";
import { NavLink } from "react-router-dom";
import { homeBannerImage } from "../assets";

export default function Home() {
  return (
    <>
      <div className="home__jumbotron">
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
