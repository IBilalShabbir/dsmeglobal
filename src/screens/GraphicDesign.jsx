import React from "react";
import { GraphicDesignClients } from "../components/GraphicDesignClients";
import { Jumbotron } from "../components/Jumbotron";

export default function GraphicDesign() {
  return (
    <>
      <Jumbotron
        heading="DESIGNING YOUR PRESENCE"
        description="Unleash and expand your brand with strategic art and design."
      />
      <GraphicDesignClients />
    </>
  );
}
