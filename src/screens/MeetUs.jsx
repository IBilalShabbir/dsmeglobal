import React from "react";
import { MeetUsContent } from "../components/MeetUsContent";
import { AboutTeam } from "../components/AboutTeam";
import { Jumbotron } from "../components/Jumbotron";

export default function MeetUs() {
  return (
    <>
      <Jumbotron
        heading="MEET US"
        description="Diverse personalities, Geeks, Individualists, and Team players Making
          kick-ass apps together."
      />
      <MeetUsContent />
      <AboutTeam style={{ marginBottom: "-2em" }} />
    </>
  );
}
