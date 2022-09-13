import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesFeatureListing } from "../components/ServicesFeatureListing";
import { ServicesExperties } from "../components/ServicesExperties";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export default function MobileDevelopment() {
  return (
    <>
      <Jumbotron heading="Mobile Application Development" />
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
      <div className="services__how__we__do__it">
        <div className="services__how__we__do__it__heading heading">
          How we do it?
        </div>
        <div className="services__how__we__do__it__info">
          Fast-track your project's delivery using our simple three-step
          application development process.
        </div>
        <div className="services__how__we__do__it__content">
          <ServicesHowWeDoItEntry
            icon="1"
            title="Requirements Gathering"
            list={[
              "Requirements Definition",
              "Analyzing the requirements",
              "Documenting the process",
              "Provide initial design",
            ]}
          />
          <ServicesHowWeDoItEntry
            icon="2"
            title="Development & Testing"
            list={[
              "Requirements Definition",
              "Analyzing the requirements",
              "Documenting the process",
              "Provide initial design",
            ]}
          />
          <ServicesHowWeDoItEntry
            icon="3"
            title="Support & Maintenance"
            list={[
              "Requirements Definition",
              "Analyzing the requirements",
              "Documenting the process",
              "Provide initial design",
            ]}
          />
        </div>
      </div>
    </>
  );
}
