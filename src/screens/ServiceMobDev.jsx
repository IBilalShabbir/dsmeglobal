import React, { useEffect, useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { HowSection } from "../components/HowSection";
import { WhyDSMEGlobalLinksMobDev } from "../components/WhyDSMEGlobalLinksMobDev";
import { EmergingTechnologiesKnowHowMobDev } from "../components/EmergingTechnologiesKnowHowMobDev";
import { ExceptionalDomainExpertiseMobDev } from "../components/ExceptionalDomainExpertiseMobDev";
import { OurExpertiseMobDev } from "../components/OurExpertiseMobDev";
import { AboutSuccessStories } from "../components/AboutSuccessStories";

export default function ServicesMobDev() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 500) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 750) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }
  useEffect(() => {
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);

    return () => {
      window.removeEventListener("resize", getSlidesPerView);
    };
  }, []);
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Mobile Application Development"
          info="Custom built mobile applications with amazing experiences that help support your business goals."
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <OurExpertiseMobDev />
      <ExceptionalDomainExpertiseMobDev />
      <EmergingTechnologiesKnowHowMobDev />
      <HowSection />
      <WhyDSMEGlobalLinksMobDev />
      <AboutSuccessStories slidesPerView={slidesPerView} />
    </>
  );
}
