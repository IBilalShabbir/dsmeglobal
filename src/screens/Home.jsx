import React from "react";
import { HomeServices } from "./HomeServices";
import { HomeJumbtron } from "./HomeJumbtron";
import { HomeStats } from "./HomeStats";
import { HomeWork } from "./HomeWork";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
      <HomeWork />
    </>
  );
}
