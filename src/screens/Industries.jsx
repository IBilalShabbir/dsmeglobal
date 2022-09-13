import React from "react";
import { IndustriesTangibleResults } from "../components/IndustriesTangibleResults";
import { IndustriesSolution } from "../components/IndustriesSolution";
import { Jumbotron } from "../components/Jumbotron";

export default function Industries() {
  return (
    <>
      <Jumbotron
        heading="FROM STARTUP TO ENTERPRISE,"
        subHeading="THE FULL RANGE OF ENGINEERING SERVICES YOUR COMPANY NEEDS"
      />
      <IndustriesSolution />
      <IndustriesTangibleResults />
    </>
  );
}
