import React from "react";
import { IndustriesTangibleResults } from "../components/IndustriesTangibleResults";
import { IndustriesJumbotron } from "../components/IndustriesJumbotron";
import { IndustriesSolution } from "../components/IndustriesSolution";

export default function Industries() {
  return (
    <>
      <IndustriesJumbotron />
      <IndustriesSolution />
      <IndustriesTangibleResults />
    </>
  );
}
