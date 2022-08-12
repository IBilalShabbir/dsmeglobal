import React from "react";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import { blockChainServicesData } from "../constants/data";
import { IndustryCard } from "./IndustryCard";

export function BlockchainServices() {
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
