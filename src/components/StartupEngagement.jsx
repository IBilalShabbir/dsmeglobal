import React from "react";
import { StartupEngagementEntry } from "./StartupEngagementEntry";

export function StartupEngagement() {
  return (
    <div className="startup__engagement">
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
