import React from "react";
import { CareersMotivation } from "../components/CareersMotivation";
import { CareersVacancies } from "../components/CareersVacancies";
import { Jumbotron } from "../components/Jumbotron";

export default function Careers() {
  return (
    <>
      <Jumbotron
        heading="Good things should grow, and so do we"
        description={
          <>
            There are jobs and then there are careers. <br />
            We welcome you to find your best fit at DSME Global Links and become
            part of the fastest-growing technology leaders in the region. Join
            us to be surrounded by smart, ambitious, and motivated people at
            DSME Global Links.
          </>
        }
      />
      <CareersMotivation />
      <CareersVacancies />
    </>
  );
}
