import React from "react";
import { AboutCeoMessage } from "../components/AboutCeoMessage";
import { AboutJumbotron } from "../components/AboutJumbotron";
import { AboutOur } from "../components/AboutOur";
import { AboutTeam } from "../components/AboutTeam";
import { AboutDevelopmentProcess } from "../components/AboutDevelopmentProcess";
import { AboutCoreValues } from "../components/AboutCoreValues";
import { AboutOurPromise } from "../components/AboutOurPromise";
import { AboutKeyDifferences } from "../components/AboutKeyDifferences";
import { AboutEndeavors } from "../components/AboutEndeavors";
import { AboutPressRelease } from "../components/AboutPressRelease";
import { AboutAchievements } from "../components/AboutAchievements";

export default function About() {
  return (
    <>
      <AboutJumbotron />
      <AboutCeoMessage />
      <AboutOur />
      <AboutTeam />
      <AboutDevelopmentProcess />
      <AboutCoreValues />
      <AboutOurPromise />
      <AboutKeyDifferences />
      <AboutEndeavors />
      <AboutPressRelease />
      <AboutAchievements />
    </>
  );
}
