import React from "react";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import { IndustryCard } from "./IndustryCard";
import uxaudit from "../assets/uxaudit.svg";
import uiux from "../assets/uiux.svg";
import interaction from "../assets/interaction.svg";
import information from "../assets/information.svg";


export function BlockchainServices() {
  const blockChainServicesData = [
    {
      image: uiux,

      title: "   User Research",
      content:
        "  For clients in the design and prospecting phase of a new product we offer in-depth user research, mockups, user personadevelopment, and thorough UI/UX testing to ensure your app is human-friendly from the start.",
    },
    {
      image: uxaudit,
      title: " UX Audit",
      content:
        "We offer UX auditing services for products that are already in the hands of users so you can see what’s working and what isn’t.",
    },
    {
      image: interaction,
      title: "Interaction Design",
      content:
        "We combine the five dimensions of interaction design—words, visuals, spatial layouts, time, and object behavior—into one smooth experience to help you create the best possible user experience.",
    },
    {
      image: information,
      title: "Information Architecture",
      content:
        "We build the blueprints for your information systems—whether it’s your website, application database, or internal systems. We optimize your information systems for ease of navigation, usefulness, and findability so you and your users can focus more on benefiting from that information, not grappling with it.",
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
            We create apps  <span> your users</span> will love.
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
