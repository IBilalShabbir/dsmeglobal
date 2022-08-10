import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { IndustryCard } from "../components/IndustryCard";
import { Fade } from "react-reveal";
import { scrapingData } from "../constants/data";

function ServiceWebScraping() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Scraping"
          info="Our engineers create custom web scraping solutions that quickly and efficiently gather the data you need and provide it to you in an elegant structure. Our web scrapers sift through the web’s maze of data to find precisely what you need."
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <div className="services__main__container services__main__container__reverse">
        <div
          className="services__main__container__right"
          style={{ padding: 0, border: "none" }}
        >
          <Fade up>
            <div
              className="container__web__dev__experties__header__heading"
              style={{ textAlign: "left", fontSize: 30 }}
            >
              Our web scrapers sift through the web’s maze of data to{" "}
              <span>find precisely what you need.</span>
            </div>
          </Fade>
        </div>
        <div className="services__main__container__left">
          {scrapingData?.map((item) => (
            <IndustryCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceWebScraping;
