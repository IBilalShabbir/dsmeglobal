import React, { useEffect, useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { HowSection } from "../components/HowSection";
import { FromMVPtoEnterpriseSolution } from "../components/FromMVPtoEnterpriseSolution";
import { ExperienceInDevelopingDiverseSolutions } from "../components/ExperienceInDevelopingDiverseSolutions";
import { EmergingTechnologiesWebDev } from "../components/EmergingTechnologiesWebDev";
import { WhyWorkwithDSMEGlobalLinks } from "../components/WhyWorkwithDSMEGlobalLinks";
import { OurExpertise } from "../components/OurExpertise";
import { AboutSuccessStories } from "../components/AboutSuccessStories";

export default function ServicesWebDev() {
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
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <OurExpertise />
      <ExperienceInDevelopingDiverseSolutions />
      <FromMVPtoEnterpriseSolution />
      <EmergingTechnologiesWebDev />
      <WhyWorkwithDSMEGlobalLinks />
      <HowSection />

      <AboutSuccessStories slidesPerView={slidesPerView} />
    </>
  );
}
