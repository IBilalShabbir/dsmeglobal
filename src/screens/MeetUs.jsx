import React from "react";
import { AboutTeam } from "../components/AboutTeam";
import { MeetUsJumbotron } from "../components/MeetUsJumbotron";
import { MeetUsContent } from "../components/MeetUsContent";

export default function MeetUs() {
  return (
    <>
      <MeetUsJumbotron />
      <MeetUsContent />
      <AboutTeam style={{ marginBottom: "-2em" }} />
    </>
  );
}
