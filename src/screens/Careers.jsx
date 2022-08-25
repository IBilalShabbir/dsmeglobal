import React from "react";
import { CareersJumbotron } from "../components/CareersJumbotron";
import { CareersMotivation } from "../components/CareersMotivation";
import { CareersVacancies } from "../components/CareersVacancies";

export default function Careers() {
  return (
    <>
      <CareersJumbotron />
      <CareersMotivation />
      <CareersVacancies />
    </>
  );
}
