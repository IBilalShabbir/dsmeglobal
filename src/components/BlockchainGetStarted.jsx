import React from "react";
import { Link } from "react-router-dom";
import { blockChainGetStarted } from "../assets";

export function BlockchainGetStarted() {
  return (
    <div className="blockchain__get__started">
      <img
        src={blockChainGetStarted}
        alt="blockChainGetStarted"
        className="blockchain__get__started__svg"
      />
      <div className="blockchain__get__started__heading heading">
        Ready To Get Started?
      </div>
      <Link to="/quote" className="blockchain__get__started__link">
        Let’s work together
      </Link>
    </div>
  );
}
