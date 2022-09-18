import React from "react";
import { StartupProcessEntry } from "./StartupProcessEntry";

export function StartupProcess() {
  return (
    <div
      className="startup__process"
      style={{
        marginTop: "-2em",
      }}
    >
      <div className="startup__process__heading heading">
        Our Process for Startup Product Development
      </div>
      <div className="startup__process__content">
        <StartupProcessEntry
          heading="End-to-End Mobile App Development"
          info="We offer end-to-end development services for all things mobile - covering everything from initial concepts to design, development & support."
        />
        <StartupProcessEntry
          heading="End-to-End Mobile App Development"
          info="We offer end-to-end development services for all things mobile - covering everything from initial concepts to design, development & support."
        />
        <StartupProcessEntry
          heading="End-to-End Mobile App Development"
          info="We offer end-to-end development services for all things mobile - covering everything from initial concepts to design, development & support."
        />
        <StartupProcessEntry
          heading="End-to-End Mobile App Development"
          info="We offer end-to-end development services for all things mobile - covering everything from initial concepts to design, development & support."
        />
      </div>
    </div>
  );
}
