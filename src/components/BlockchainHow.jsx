import React from "react";
import { howBlockchain, howBlockchainSvg } from "../assets";

export function BlockchainHow() {
  return (
    <div className="blockchain__how">
      <img
        src={howBlockchainSvg}
        alt="howBlockchainSvg"
        className="blockchain__how__svg"
      />
      <div className="blockchain__how__content">
        <div className="blockchain__how__content__left">
          <div className="blockchain__how__content__left__heading heading">
            How Blockchain Works?
          </div>
          {[
            "Transaction Request is Made.",
            "A Block representing the Transaction is created",
            "The Block is sent to every Node on the Network.",
            "The Block is added to the existing Blockchain.",
            "Transaction is validated by every Node.",
            "Transaction is Completed.",
          ].map((item, i) => (
            <div className="blockchain__how__content__left__list">
              <span>{i + 1}</span>
              {item}
            </div>
          ))}
        </div>
        <div className="blockchain__how__content__right">
          <img
            src={howBlockchain}
            alt="howBlockchain"
            className="blockchain__how__content__right__img"
          />
        </div>
      </div>
    </div>
  );
}
