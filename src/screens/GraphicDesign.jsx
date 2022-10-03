import React from "react";
import { GraphicDesignClients } from "../components/GraphicDesignClients";
import { Jumbotron } from "../components/Jumbotron";
import { BrandImpact } from "../components/BrandImpact";
import { GraphicDesignBrandIdentity } from "../components/GraphicDesignBrandIdentity";
import { GraphicDesignSkills } from "../components/GraphicDesignSkills";

export default function GraphicDesign() {
  return (
    <>
      <Jumbotron
        heading="DESIGNING YOUR PRESENCE"
        description="Unleash and expand your brand with strategic art and design."
      />
      <GraphicDesignBrandIdentity />
      <BrandImpact />
      <GraphicDesignSkills />
      <GraphicDesignClients />
    </>
  );
}
