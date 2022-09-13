import React from "react";
import { ServicesContent } from "../components/ServicesContent";
import { Jumbotron } from "../components/Jumbotron";

export default function Services() {
  return (
    <>
      <Jumbotron
        heading="FROM STARTUP TO ENTERPRISE"
        subHeading="THE FULL RANGE OF ENGINEERING SERVICES YOUR COMPANY NEEDS"
      />
      <ServicesContent />
    </>
  );
}
