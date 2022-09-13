import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { CustomSoftwareContent } from "../components/CustomSoftwareContent";

export default function CustomSoftware() {
  return (
    <>
      <Jumbotron
        heading="Custom Software Development"
        description="Our dynamic team members experienced across multiple tech stacks can help you to rapidly build or maintain your applications/enterprise systems."
      />
      <CustomSoftwareContent />
    </>
  );
}
