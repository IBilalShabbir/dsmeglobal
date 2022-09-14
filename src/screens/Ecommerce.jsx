import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { EcommerceAbout } from "../components/EcommerceAbout";
import { EcommerceGetStarted } from "../components/EcommerceGetStarted";
import { EcommerceService } from "../components/EcommerceService";
import { EcommerceWhy } from "../components/EcommerceWhy";

export default function UIUXDesign() {
  return (
    <>
      <Jumbotron
        heading="ECOMERECE APPLICATIONS"
        description="We build functional, state of the art, high-performing results-driven Shopify websites."
      />

      <EcommerceAbout />
      <EcommerceService />
      <EcommerceGetStarted />
      <EcommerceWhy />
    </>
  );
}
