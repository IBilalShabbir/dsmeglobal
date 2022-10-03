import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesHowWorks } from "../components/ServicesHowWorks";
import { AgileDiscoveryWorkshopWhatYouGet } from "../components/AgileDiscoveryWorkshopWhatYouGet";
import { AgileDiscoveryWhyRecommend } from "../components/AgileDiscoveryWhyRecommend";

export default function AgileDiscoveryWorkshop() {
  return (
    <>
      <Jumbotron
        heading="Agile Discovery Workshop (ADW)."
        description="Fastest way to engineer your requirements and take your product from concept to development."
      />
      <ServicesHowWorks />
      <AgileDiscoveryWhyRecommend />
      <AgileDiscoveryWorkshopWhatYouGet />
    </>
  );
}
