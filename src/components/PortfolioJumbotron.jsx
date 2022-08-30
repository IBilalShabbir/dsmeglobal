import React from "react";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";
import { Fade } from "react-reveal";

export function PortfolioJumbotron() {
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
        <div className="jumbotron__heading heading">PORTFOLIO</div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="jumbotron__info">
          DSME Global Links has successfully rendered digital solutions to every
          type and size of industries. We take up challenges not only to deliver
          impactful solutions but also to create avant-garde products. We not
          only provides customized services but also builds products to aid
          industry verticals. We accept challenges boldly to move a step forward
          in the innovative world.
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
  );
}
