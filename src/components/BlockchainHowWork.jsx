import React from "react";
import objectimgnew from "../assets/object.webp";
import blockdeskimg from "../assets/blockchaindesktop.png";

export function BlockchainHowWork() {
  return (
    <div className="blockchain__worksection">
      <div className="blockchain__worksection__heading">
        How Blockchain <span>Works?</span>
      </div>
      <div className="blockchain__worksection__detail">
        <div className="blockchain__worksection__text">
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">1</div>
            <div className="blockchain__worksection__text__subtext__detail">
              Transaction Request is Made
            </div>
          </div>
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">2</div>
            <div className="blockchain__worksection__text__subtext__detail">
              A Block representing the Transaction is created
            </div>
          </div>
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">3</div>
            <div className="blockchain__worksection__text__subtext__detail">
              The Block is sent to every Node on the Network.
            </div>
          </div>
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">4</div>
            <div className="blockchain__worksection__text__subtext__detail">
              The Block is added to the existing Blockchain.
            </div>
          </div>
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">5</div>
            <div className="blockchain__worksection__text__subtext__detail">
              Transaction is validated by every Node.
            </div>
          </div>
          <div className="blockchain__worksection__text__subtext">
            <div className="blockchain__worksection__text__subtext__no">6</div>
            <div className="blockchain__worksection__text__subtext__detail">
              Transaction is Completed.
            </div>
          </div>
        </div>
        <div className="blockchain__worksection__img">
          <img loading="lazy" src={objectimgnew} alt="objectimgnew" />
        </div>
      </div>
      <div className="">
        <div className="blockchain__worksection__heading__two">
          SMART CONTRACT <span>DEVELOPMENT</span>
        </div>
        <div className="blockchain__worksection__heading__text">
          We develop, deploy and debug smart contracts (Ethereum, BSC, Matic,
          Solana, Fantom) for businesses, ensuring a highly secured, verified,
          and frictionless exchange of digital assets and information in
          real-time.
        </div>
        <div className="blockchain__worksection__heading__two__desktop_main">
        <img
          className="blockchain__worksection__heading__two__desktopimg"
          src={blockdeskimg}
          alt="blockchaindesktop"
        />

        </div>
        
      </div>
    </div>
  );
}
