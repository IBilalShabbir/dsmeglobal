import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { AndroidFeatures } from "../components/AndroidFeatures";

export default function AndroidDevelopment() {
  return (
    <>
      <Jumbotron
        heading="FULL-SERVICE ANDROID APPLICATION DEVELOPMENT COMPANY"
        description="Choose an experienced partner to transform your business idea into a top-performing custom Android app"
      />
      <AndroidFeatures />
    </>
  );
}
