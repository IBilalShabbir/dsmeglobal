import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesHowWorks } from "../components/ServicesHowWorks";

export default function AgileDiscoveryWorkshop() {
  return (
    <>
      <Jumbotron
        heading="Less Execution Risk, More Trust"
        description="We plan and deliver your product over multiple milestones, leveraging a transparent working methodology."
      />
      <ServicesHowWorks />
    </>
  );
}
