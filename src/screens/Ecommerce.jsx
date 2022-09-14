import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { EcommerceAbout } from "./EcommerceAbout";
import { EcommerceService } from "./EcommerceService";

export default function UIUXDesign() {
  return (
    <>
      <Jumbotron
        heading="ECOMERECE APPLICATIONS"
        description="We build functional, state of the art, high-performing results-driven Shopify websites."
      />

      <EcommerceAbout />
      <EcommerceService />
    </>
  );
}
