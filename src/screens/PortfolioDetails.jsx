import React, { useEffect } from "react";
import { PortfolioDetailsAbout } from "../components/PortfolioDetailsAbout";
import { PortfolioDetailsImages } from "../components/PortfolioDetailsImages";
import { PortfolioDetailsJumbotron } from "../components/PortfolioDetailsJumbotron";
import { PortfolioDetailsQuote } from "../components/PortfolioDetailsQuote";

export default function PortfolioDetails({ setIsContact }) {
  const data = JSON.parse(window.localStorage.getItem("portfolioData"));
  useEffect(() => {
    setIsContact(false);

    return () => {
      setIsContact(true);
    };
  }, []);

  return (
    <>
      <div style={{ height: "6em", background: "#181818" }} />
      <PortfolioDetailsJumbotron data={data} />
      <PortfolioDetailsAbout data={data} />
      <PortfolioDetailsQuote data={data} />
      <PortfolioDetailsImages data={data} />
    </>
  );
}
