import React from "react";
import { ServicesDetalsJumbotron } from "../components/ServicesDetalsJumbotron";
import { ServicesFeatureListing } from "../components/ServicesFeatureListing";
import { ServicesExperties } from "../components/ServicesExperties";

export default function MobileDevelopment() {
  return (
    <>
      <ServicesDetalsJumbotron title="Mobile Application Development" />
      <ServicesExperties />
      <ServicesFeatureListing
        title="Exceptional Domain Expertise"
        description="Phenomenal domain expertise to help you build and deliver mobile applications that can increase productivity, improve engagement and boost customer loyalty."
        data={[
          {
            image: "",
            title: "",
            info: "",
          },
        ]}
      />
    </>
  );
}
