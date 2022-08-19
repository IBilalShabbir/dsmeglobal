import React from "react";
import { HomeServices } from "../components/HomeServices";
import { HomeJumbtron } from "../components/HomeJumbtron";
import { HomeStats } from "../components/HomeStats";
import { HomeWork } from "../components/HomeWork";
import { HomeTechnologies } from "../components/HomeTechnologies";
import { HomeEngagement } from "../components/HomeEngagement";
import { HomeDevelopmentProcess } from "../components/HomeDevelopmentProcess";
import { HomeOurTechnologies } from "../components/HomeOurTechnologies";
import { HomeTestimonials } from "../components/HomeTestimonials";
import { HomeHelp } from "../components/HomeHelp";
import { HomeBlog } from "../components/HomeBlog";
import { HomeNewsletter } from "../components/HomeNewsletter";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
      <HomeWork />
      <HomeTechnologies />
      <HomeEngagement />
      <HomeDevelopmentProcess />
      <HomeOurTechnologies />
      <HomeTestimonials />
      <HomeHelp />
      <HomeBlog />
      <HomeNewsletter />
    </>
  );
}
