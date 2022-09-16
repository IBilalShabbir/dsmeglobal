import React from "react";
import { Link } from "react-router-dom";
import { blockChainGetStarted } from "../assets";
import { Jumbotron } from "../components/Jumbotron";
import { WebScrapingFeatures } from "../components/WebScrapingFeatures";

export default function WebScraping() {
  return (
    <>
      <Jumbotron
        heading="WEB SCRAPING"
        description="Our engineers create custom web scraping solutions that quickly and efficiently gather the data you need and provide it to you in an elegant structure. Our web scrapers sift through the web’s maze of data to find precisely what you need."
      />
      <WebScrapingFeatures />
      <div className="blockchain__get__started">
        <img
          src={blockChainGetStarted}
          alt="blockChainGetStarted"
          className="blockchain__get__started__svg"
        />
        <div className="blockchain__get__started__heading heading">
          Sounds promising? Let’s discuss your idea!
        </div>
        <Link to="/quote" className="blockchain__get__started__link">
          Let’s work together
        </Link>
      </div>
    </>
  );
}
