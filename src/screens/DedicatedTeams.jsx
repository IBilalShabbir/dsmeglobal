import React from "react";
import { DedicatedTeamsWhy } from "../components/DedicatedTeamsWhy";
import { DedicatedTeamsJumbotron } from "../components/DedicatedTeamsJumbotron";
import { DedicatedTeamsAbout } from "../components/DedicatedTeamsAbout";
import { DedicatedTeamsPlans } from "../components/DedicatedTeamsPlans";
import { DedicatedTeamsAdvantages } from "../components/DedicatedTeamsAdvantages";
import { DedicatedTeamsGetStarted } from "../components/DedicatedTeamsGetStarted";
import { DedicatedBestFit } from "../components//DedicatedBestFit";

export default function DedicatedTeams() {
  return (
    <>
      <DedicatedTeamsJumbotron />
      <DedicatedTeamsAbout />
      <DedicatedTeamsPlans />
      <DedicatedTeamsAdvantages />
      <DedicatedTeamsGetStarted />
      <DedicatedTeamsWhy />
      <DedicatedBestFit />
    </>
  );
}
