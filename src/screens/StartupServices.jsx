import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { StartupGrowth } from "../components/StartupGrowth";

export default function StartupServices() {
  return (
    <>
      <Jumbotron
        heading="STARTUP SERVICES"
        description="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
      />
      <StartupGrowth />
    </>
  );
}
