import React from "react";
import { MeetUsJumbotron } from "../components/MeetUsJumbotron";
import { MeetUsContent } from "../components/MeetUsContent";
import { AboutTeam } from "../components/AboutTeam";

export default function MeetUs() {
  return (
    <>
      <MeetUsJumbotron />
      <MeetUsContent />
      <AboutTeam style={{ marginBottom: "-2em" }} />
    </>
  );
}
