import React from "react";
import { IndustriesJumbotron } from "../components/IndustriesJumbotron";
import { IndustriesSolution } from "../components/IndustriesSolution";
import { IndustriesTangibleResults } from "../components/IndustriesTangibleResults";

export default function Industries() {
  return (
    <>
      <IndustriesJumbotron />
      <IndustriesSolution />
      <IndustriesTangibleResults />
    </>
  );
}
