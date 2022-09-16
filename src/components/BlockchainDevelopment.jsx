import React from "react";
import { smartContract, smartContractSvg } from "../assets";

export function BlockchainDevelopment() {
  return (
    <div className="blockchain__development">
      <img
        src={smartContractSvg}
        alt="smartContractSvg"
        className="blockchain__development__svg"
      />
      <div className="blockchain__development__content">
        <div className="blockchain__development__content__left">
          <img
            src={smartContract}
            alt="smartContract"
            className="blockchain__development__content__left__img"
          />
        </div>
        <div className="blockchain__development__content__right">
          <div className="blockchain__development__content__right__heading heading">
            Smart Contract Development
          </div>
          <div className="blockchain__development__content__right__info">
            We develop, deploy and debug smart contracts (Ethereum, BSC, Matic,
            Solana, Fantom) for businesses, ensuring a highly secured, verified,
            and frictionless exchange of digital assets and information in
            real-time.
          </div>
        </div>
      </div>
    </div>
  );
}
