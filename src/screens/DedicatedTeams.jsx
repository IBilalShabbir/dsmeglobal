import React from "react";
import { DedicatedTeamsWhy } from "../components/DedicatedTeamsWhy";
import { DedicatedTeamsJumbotron } from "../components/DedicatedTeamsJumbotron";
import { DedicatedTeamsAbout } from "../components/DedicatedTeamsAbout";
import { DedicatedTeamsPlans } from "../components/DedicatedTeamsPlans";

export default function DedicatedTeams() {
  return (
    <>
      <DedicatedTeamsJumbotron />
      <DedicatedTeamsAbout />
      <DedicatedTeamsPlans />
      <DedicatedTeamsWhy />
    </>
  );
}
