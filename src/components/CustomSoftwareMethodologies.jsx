import React from "react";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export function CustomSoftwareMethodologies() {
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
          title="Design & Development"
          list={[
            "Low-Fi Design",
            "Hi-FI Design",
            "User Experience Design",
            "Source Code",
            "Compiled Code",
            "Code Documentation",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="3"
          title="Delivery & Support"
          list={[
            "Release Management",
            "Change Management",
            "User Docs and Training",
            "Scheduled Maintenance",
            "Adaptive Maintenance",
            "Software Roadmap",
          ]}
        />
      </div>
    </div>
  );
}
