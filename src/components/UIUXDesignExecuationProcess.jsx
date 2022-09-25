import React from "react";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export function UIUXDesignExecuationProcess({}) {
  return (
    <div className="services__how__we__do__it services__how__we__do__it__reverse">
      <div className="services__how__we__do__it__heading heading">
        Execution Process
      </div>
      <div className="services__how__we__do__it__info">
        We work with you to make appealing sites, impactful applications, and
        modern enterprise systems individuals love. Through your vision and our
        expertise, our team of business analysts, designers, and developers will
        build experiences that keep your customers coming back.
      </div>
      <div className="services__how__we__do__it__content">
        <ServicesHowWeDoItEntry
          icon="1"
          title="Requirements Gathering"
          list={[
            "Work Breakdown Structure",
            "Project Plan",
            "Project Budget",
            "Requirements Docs",
            "Use Cases",
            "User Stories",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="2"
          title="Development & Testing"
          list={[
            "Frontend & backend development",
            "Weekly Client Feedback (SCRUM)",
            "QA Testing",
            "Deployment",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="3"
          title="Support & Maintenance"
          list={[
            "SLA Based Support",
            "L3 and Production Support Services",
            "Operational support where needed",
            "On-going Support",
          ]}
        />
      </div>
    </div>
  );
}
