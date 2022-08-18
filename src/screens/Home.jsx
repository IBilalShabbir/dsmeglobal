import React from "react";
import { HomeServices } from "./HomeServices";
import { HomeJumbtron } from "./HomeJumbtron";
import { HomeStats } from "./HomeStats";
import { HomeWork } from "./HomeWork";
import { HomeTechnologies } from "./HomeTechnologies";
import { HomeEngagement } from "./HomeEngagement";
import { HomeDevelopmentProcess } from "./HomeDevelopmentProcess";
import { HomeOurTechnologies } from "./HomeOurTechnologies";
import { HomeTestimonials } from "./HomeTestimonials";
import { HomeHelp } from "./HomeHelp";
import { HomeBlog } from "./HomeBlog";

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
    </>
  );
}
