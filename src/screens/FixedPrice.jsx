import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesHowWorks } from "../components/ServicesHowWorks";
import { FixedPriceAllInclusivePricing } from "../components/FixedPriceAllInclusivePricing";
import { FixedPriceWhyWork } from "../components/FixedPriceWhyWork";
import { FixedPriceLinks } from "../components/FixedPriceLinks";
import { blockChainGetStarted } from "../assets";
import { FixedPriceProcess } from "../components/FixedPriceProcess";
import { ReadyToGetStarted } from "../components/ReadyToGetStarted";
import { FixedPriceAtTheEnd } from "../components/FixedPriceAtTheEnd";

export default function FixedPrice() {
  return (
    <>
      <Jumbotron
        heading="Less Execution Risk, More Trust"
        description="We plan and deliver your product over multiple milestones, leveraging a transparent working methodology."
      />
      <ServicesHowWorks />
      <FixedPriceLinks />
      <div className="blockchain__get__started" style={{ marginBottom: "0em" }}>
        <img
          src={blockChainGetStarted}
          alt="blockChainGetStarted"
          className="blockchain__get__started__svg"
        />
        <div className="blockchain__get__started__heading heading">
          This process offers minimum risk and a transparent approach since you
          only pay on the completion of defined deliverables.
        </div>
      </div>
      <FixedPriceWhyWork />
      <FixedPriceAllInclusivePricing />
      <FixedPriceProcess />
      <ReadyToGetStarted />
      <FixedPriceAtTheEnd />
    </>
  );
}
