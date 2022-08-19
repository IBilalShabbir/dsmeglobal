import React from "react";
import { AboutCeoMessage } from "../components/AboutCeoMessage";
import { AboutJumbotron } from "../components/AboutJumbotron";
import { AboutOur } from "./AboutOur";

export default function About() {
  return (
    <>
      <AboutJumbotron />
      <AboutCeoMessage />
      <AboutOur />
    </>
  );
}
