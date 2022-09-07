import React, { useEffect } from "react";
import { homeBannerSvg1, homeBannerSvg3, jobs, meetUs } from "../assets";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function CareersBanner({ setIsContact }) {
  useEffect(() => {
    setIsContact(false);
    document.querySelector("body").style.backgroundColor = "#131313";
    return () => {
      setIsContact(true);
      document.querySelector("body").style.backgroundColor = "white";
    };
  }, []);
  return (
    <>
      <div
        className="jumbotron"
        style={{
          justifyContent: "center",
          backgroundColor: "transparent",
          paddingTop: window.innerWidth < 600 ? "8em" : "6em",
          minHeight: "100vh",
        }}
      >
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
          <div className="jumbotron__sub__heading heading">
            Be a Part of Our Team
          </div>
        </Fade>
        <Fade bottom distance="30%">
          <div className="jumbotron__heading heading">Career</div>
        </Fade>
        <div className="career__bannner">
          <Fade left distance="30%">
            <Link
              to="/meet-us"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="career__bannner__entry"
            >
              <img
                src={meetUs}
                alt="meetUs"
                className="career__bannner__entry__img"
              />
              <div className="career__bannner__entry__heading">Meet Us</div>
            </Link>
          </Fade>
          <div className="career__bannner__divider"></div>
          <Fade right distance="30%">
            <Link
              to="/vacancies"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="career__bannner__entry"
            >
              <img
                src={jobs}
                alt="jobs"
                className="career__bannner__entry__img"
              />
              <div className="career__bannner__entry__heading">Search Jobs</div>
            </Link>
          </Fade>
        </div>
      </div>
    </>
  );
}
