import React from "react";
import { EngagementModelCard } from "../components/EngagementModelCard";

export function ServiceStaffModernSolution() {
  return (
    <div>
      <div className="Staff__automation__a__modern__solution__to__scaling">
        <div className="Staff__automation__a__modern__solution__to__scaling__heading">
          <div className="Staff__automation__a__modern__solution__to__scaling__heading__one">
            A modern solution to
          </div>
          <div className="Staff__automation__a__modern__solution__to__scaling__heading__two">
            scaling
          </div>
        </div>
        <div className="Staff__automation__a__modern__solution__to__scaling__container__heading">
          Engineering teams today need to move and scale fast. DSME Global Links
          injects momentum into your engineering department with
          high-performing, on-demand teams of developers.
        </div>
        <div className="service__startup__main__container__second__cards__container">
          <EngagementModelCard
            label="Dedicated Teams."
            info="Get full-time, scalable teams of trusted developers.
            "
          />

          <EngagementModelCard
            label="Dedicated Support.
            "
            info="Get a dedicated account manager, available any time.

            "
          />

          <EngagementModelCard
            label="Flexible Project Management
            "
            info="Manage your team directly to maintain full control over your project. You can also assign a part-time or full-time project manager who will take over management tasks.

            "
          />
          <EngagementModelCard
            label="Motivated Developers.
            "
            info="Get motivated developers with an IT augmentation model. Although the developers provided by the vendor are not your direct employees, they seamlessly integrate into your project.

            "
          />
          <EngagementModelCard
            label="Flexible Contract.

            "
            info="Scalable contracts with simple monthly billing. You can extend your in-house IT department on a temporary or permanent basis within our flexible model. Whether it’s a short-term or a long-term project, we have a viable solution for all needs.
            "
          />
          <EngagementModelCard
            label="Simple Extension

            "
            info="Start your cooperation with DSME Global Links by hiring individual developers for a short period and ramp up your remote development team as you go. Scale down your outsourced team when the project is over.
            "
          />
        </div>
      </div>
    </div>
  );
}
