import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { IndustryCard } from "../components/IndustryCard";
import Scrollspy from "react-scrollspy";
import { Fade } from "react-reveal";

function ServiceWebScraping() {
  const scrapingData = [
    {
      title: "Extraction",
      content:
        "Our web scraping tools scan the web and extract the information you need. We specialize in creating custom crawl clusters that crawl through large quantities of data from multiple sources in parallel, retrieving usable data faster while breaking free of scaling constraints.",
    },
    {
      title: "Cleaning",
      content:
        "Our data cleansing takes the raw data extracted by the web scraping tools and runs it through a processing platform to shake off old material, duplicates, incorrect details, and more. While data is valuable, ‘clean’ data is gold, enabling you to make the best possible decisions.",
    },
    {
      title: "Quality Assurance",
      content:
        "We have quality assurance checks built into every step of the process, ensuring your web scraping tools function well and work quickly.",
    },
    {
      title: "Verification & Validation",
      content:
        "We verify your data at every step of the process and check the integrity of the results created.",
    },
  ];
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
