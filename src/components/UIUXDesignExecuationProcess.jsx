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
          title="Discovery"
          list={[
            "Understand business pain points",
            "Interviews & observations",
            "Functional requirements",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="2"
          title="Wireframes"
          list={[
            "Concept sketching",
            "System/Process flow",
            "Information architecture",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="3"
          title="Build & Iterate"
          list={[
            "Interaction design",
            "High-fidelity mockups",
            "Interactive prototypes",
            "UI Style guide/brand identity",
          ]}
        />
      </div>
    </div>
  );
}
