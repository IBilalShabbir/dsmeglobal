import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { AndroidFeatures } from "../components/AndroidFeatures";
import { ServicesClients } from "../components/ServicesClients";

export default function AndroidDevelopment() {
  return (
    <>
      <Jumbotron
        heading="FULL-SERVICE ANDROID APPLICATION DEVELOPMENT COMPANY"
        description="Choose an experienced partner to transform your business idea into a top-performing custom Android app"
      />
      <ServicesClients
        isAndroid
        description="It takes lots of effort, planning and research to create an app that succeeds. We want to take the work off your shoulders. Our Android team rated number one on Clutch combines in-depth research, outstanding design and impeccable development to create applications that astound users and bring measurable business results. Focus on what’s important to your business, and let us do the rest."
      />
      <AndroidFeatures />
    </>
  );
}
