import React from "react";
import { DedicatedTeamsWhy } from "../components/DedicatedTeamsWhy";
import { DedicatedTeamsAbout } from "../components/DedicatedTeamsAbout";
import { DedicatedTeamsPlans } from "../components/DedicatedTeamsPlans";
import { DedicatedTeamsAdvantages } from "../components/DedicatedTeamsAdvantages";
import { DedicatedTeamsGetStarted } from "../components/DedicatedTeamsGetStarted";
import { DedicatedBestFit } from "../components//DedicatedBestFit";
import { Jumbotron } from "../components/Jumbotron";

export default function DedicatedTeams() {
  return (
    <>
      <Jumbotron
        heading="FULLY MANAGED DEVELOPMENT TEAMS"
        subHeading="TO BUILD YOUR SOFTWARE"
      />
      <DedicatedTeamsAbout />
      <DedicatedTeamsPlans />
      <DedicatedTeamsAdvantages />
      <DedicatedTeamsGetStarted />
      <DedicatedTeamsWhy />
      <DedicatedBestFit />
    </>
  );
}
