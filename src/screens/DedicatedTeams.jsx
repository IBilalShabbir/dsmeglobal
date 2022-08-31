import React from "react";
import { DedicatedTeamsWhy } from "../components/DedicatedTeamsWhy";
import { DedicatedTeamsJumbotron } from "../components/DedicatedTeamsJumbotron";
import { DedicatedTeamsAbout } from "../components/DedicatedTeamsAbout";

export default function DedicatedTeams() {
  return (
    <>
      <DedicatedTeamsJumbotron />
      <DedicatedTeamsAbout />
      <DedicatedTeamsWhy />
    </>
  );
}
