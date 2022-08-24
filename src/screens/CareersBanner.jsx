import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3, jobs, meetUs } from "../assets";

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
          minHeight: 300,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          marginBottom: "-2em",
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
        <div className="jumbotron__sub__heading heading">
          Be a Part of Our Team
        </div>
        <div className="jumbotron__heading heading">Career</div>
      </div>
      <div className="career__bannner">
        <Link to="/meet-us" className="career__bannner__entry">
          <img
            src={meetUs}
            alt="meetUs"
            className="career__bannner__entry__img"
          />
          <div className="career__bannner__entry__heading">Meet Us</div>
        </Link>
        <div className="career__bannner__divider"></div>
        <Link to="/vacancies" className="career__bannner__entry">
          <img src={jobs} alt="jobs" className="career__bannner__entry__img" />
          <div className="career__bannner__entry__heading">Search Jobs</div>
        </Link>
      </div>
    </>
  );
}
