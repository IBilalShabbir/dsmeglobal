import React from "react";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import { IndustryCard } from "./IndustryCard";
import industries from "../assets/industry.svg";
import publicprivate from "../assets/publicprivate.svg";


export function BlockchainServices() {
  const blockChainServicesData = [
    {
      image: publicprivate,

      title: "Public and Private Blockchains",
      content:
        "With Public and Private Blockchain options, you get to control who has access to specific information.",
    },
    {
      image: industries,
      title: "Wallets and Exchanges",
      content:
        "We help you build safe Cryptocurrency wallets and exchanges to conduct trade seamlessly without hurdles.",
    },
    {
      image: industries,
      title: "Distributed Applications",
      content:
        "Our Decentralized Applications development service helps keep records tamper-proof and free of intrusions.",
    },
    {
      image: industries,
      title: "Testing & Migration",
      content:
        "We help you migrate your existing business into Blockchain and define a testing and migration roadmap.",
    },
    {
      image: industries,
      title: "Smart Contracts",
      content:
        "We use Blockchain platforms like Etherium to deliver highly secure, and competitive Smart Contracts.",
    },
    {
      image: industries,
      title: "Blockchain Consultancy",
      content:
        "By analyzing your business infrastructure, we identify threats Blockchain can counter and opportunities it can address.",
    },
  ];
  return (
    <>
      <div
        className="container__web__dev__experties services__startup__second__expertise"
        style={{
          marginBottom: "0em",
          marginTop: "-2em",
        }}
      >
        <div className="container__web__dev__experties__header services__startup__third__header">
          <Fade up>
            <div className="container__web__dev__experties__header__heading">
              Services <span> We Offer</span>
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="services__main__container services__main__container__reverse"
        style={{ marginBottom: "5em" }}
      >
        <Scrollspy
          items={blockChainServicesData?.map((item) =>
            item.title
              .trim()
              .replaceAll(" ", "-")
              .replaceAll("-&-", "-")
              .replaceAll(".", "")
              .replaceAll("/", "-")
              .toLowerCase()
          )}
          offset={-100}
          currentClassName="active"
          className="services__main__container__right"
        >
          {blockChainServicesData?.map((item) => (
            <li className="services__main__container__right__link">
              <Fade up key={JSON.stringify(item)}>
                <a
                  href={
                    "#" +
                    item.title
                      .trim()
                      .replaceAll(" ", "-")
                      .replaceAll("-&-", "-")
                      .replaceAll(".", "")
                      .replaceAll("/", "-")
                      .toLowerCase()
                  }
                >
                  {item.title}
                </a>
              </Fade>
            </li>
          ))}
        </Scrollspy>
        <div className="services__main__container__left">
          {blockChainServicesData?.map((item) => (
            <IndustryCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
      </div>
    </>
   
  );
}
