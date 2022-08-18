import React from "react";
import { HomeServices } from "./HomeServices";
import { HomeJumbtron } from "./HomeJumbtron";
import { HomeStats } from "./HomeStats";
import { HomeWork } from "./HomeWork";
import { HomeTechnologies } from "./HomeTechnologies";
import { HomeEngagement } from "./HomeEngagement";
import { HomeDevelopmentProcess } from "./HomeDevelopmentProcess";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
      <HomeWork />
      <HomeTechnologies />
      <HomeEngagement />
      <HomeDevelopmentProcess />\
      <div className="home__techonologies">
        <div className="home__techonologies__content">
          <div className="home__techonologies__left"></div>
          <div className="home__techonologies__right"></div>
        </div>
      </div>
    </>
  );
}
