import React from "react";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export function CustomSoftwareMethodologies({}) {
  return (
    <div className="services__how__we__do__it services__how__we__do__it__reverse">
      <div
        className="services__how__we__do__it__heading heading"
        style={{
          marginBottom: "1em",
        }}
      >
        End-to-End Software Development Methodologies
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
