import React from "react";
import { AboutCeoMessage } from "../components/AboutCeoMessage";
import { AboutOur } from "../components/AboutOur";
import { AboutTeam } from "../components/AboutTeam";
import { AboutDevelopmentProcess } from "../components/AboutDevelopmentProcess";
import { AboutCoreValues } from "../components/AboutCoreValues";
import { AboutOurPromise } from "../components/AboutOurPromise";
import { AboutKeyDifferences } from "../components/AboutKeyDifferences";
import { AboutEndeavors } from "../components/AboutEndeavors";
import { AboutPressRelease } from "../components/AboutPressRelease";
import { AboutAchievements } from "../components/AboutAchievements";
import { AboutCustomerCentric } from "../components/AboutCustomerCentric";
import { Jumbotron } from "../components/Jumbotron";

export default function About() {
  return (
    <>
      <Jumbotron
        heading="LETS GET TO KNOW US"
        description={
          <>
            We are talented. We are experienced. <br />
            We are bold. We are DSME Global Links! <br />
            Get a behind-the-scenes glimpse of your new favorite software
            development company.
          </>
        }
      />
      <AboutCeoMessage />
      <AboutOur />
      <AboutTeam />
      <AboutDevelopmentProcess />
      <AboutCoreValues />
      <AboutOurPromise />
      <AboutKeyDifferences />
      <AboutCustomerCentric />
      <AboutEndeavors />
      <AboutPressRelease />
      <AboutAchievements />
    </>
  );
}
