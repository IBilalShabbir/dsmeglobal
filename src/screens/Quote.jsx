import React, { useEffect } from "react";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";
import QuoteJumbotron from "../components/QuoteJumbotron";

export default function Quote({ setIsContact }) {
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
          Tell us about your project
        </div>
        <div className="jumbotron__heading heading">GET A QUOTE</div>
      </div>
      <QuoteJumbotron />
    </>
  );
}
