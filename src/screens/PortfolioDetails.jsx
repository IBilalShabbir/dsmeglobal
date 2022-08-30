import React, { useEffect } from "react";
import { PortfolioDetailsAbout } from "../components/PortfolioDetailsAbout";
import { PortfolioDetailsImages } from "../components/PortfolioDetailsImages";
import { PortfolioDetailsJumbotron } from "../components/PortfolioDetailsJumbotron";
import { PortfolioDetailsQuote } from "../components/PortfolioDetailsQuote";

export default function PortfolioDetails({ setIsContact }) {
  const data = JSON.parse(window.localStorage.getItem("portfolioData"));
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
      <div style={{ height: "6em" }} />
      <PortfolioDetailsJumbotron data={data} />
      <PortfolioDetailsAbout data={data} />
      <PortfolioDetailsQuote data={data} />
      <PortfolioDetailsImages data={data} />
    </>
  );
}
