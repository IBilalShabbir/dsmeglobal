import React from "react";
import { engagementBgSvg } from "../assets";
import { StartupEngagementEntry } from "./StartupEngagementEntry";

export function StartupEngagement() {
  return (
    <div className="startup__engagement">
      <img
        src={engagementBgSvg}
        alt="engagementBgSvg"
        className="startup__engagement__bg"
      />
      <div className="startup__engagement__heading heading">
        Our Engagement Models
      </div>
      <div className="startup__engagement__content">
        <StartupEngagementEntry
          heading="Dedicated Development Team"
          info="Our blockchain developers are hands-on the cognitive technologies to deliver high-quality services and solutions to clients."
        />
        <StartupEngagementEntry
          heading="Dedicated Development Team"
          info="Our blockchain developers are hands-on the cognitive technologies to deliver high-quality services and solutions to clients."
        />
        <StartupEngagementEntry
          heading="Dedicated Development Team"
          info="Our blockchain developers are hands-on the cognitive technologies to deliver high-quality services and solutions to clients."
        />
      </div>
    </div>
  );
}
