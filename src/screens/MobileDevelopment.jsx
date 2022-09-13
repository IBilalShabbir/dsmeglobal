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

function ServicesHowWeDoItEntry({ icon, title, list }) {
  return (
    <div className="services__how__we__do__it__content__entry">
      <div className="services__how__we__do__it__content__entry__icon heading">
        {icon}
      </div>
      <div className="services__how__we__do__it__content__entry__card">
        <div className="services__how__we__do__it__content__entry__card__heading heading">
          {title}
        </div>
        <div className="services__how__we__do__it__content__entry__card__content">
          {list.map((item) => (
            <div className="services__how__we__do__it__content__entry__card__content__entry">
              <div className="services__how__we__do__it__content__entry__card__content__entry__dot" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
