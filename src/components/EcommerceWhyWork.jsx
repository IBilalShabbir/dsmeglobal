import React from "react";
import EcommerceWorkCodeCard from "../components/EcommerceWorkCodeCard";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import { IndustryCard } from "./IndustryCard";
import uxaudit from "../assets/uxaudit.svg";
import uiux from "../assets/uiux.svg";
import interaction from "../assets/interaction.svg";
import information from "../assets/information.svg";

export function EcommerceWhyWork({ role }) {
  const ecommerceWhyWorkdata = [
    {
      image: uiux,

      title: "   Top Shopify Developers",
      content:
        "  Our highly experienced development team who have been working with Shopify since its origin, thrive in providing top quality services to our clients.",
    },
    {
      image: uxaudit,
      title: " Mobile-First Approach",
      content:
        "Mobile devices play a major role in the outburst of e-commerce sales, we make sure to deliver the best Shopify experience which is appealing to consumers.",
    },
    {
      image: interaction,
      title: "Short Time to Market",
      content:
        "Our Shopify development team understands how important time is to you, to ensure you meet all your launch deadlines, we always go the extra mile.",
    },
    {
      image: information,
      title: "Shopify Design Expertise",
      content:
        "Our Shopify UI/UX engineers who specialize in e-commerce efficiency, help us develop Shopify products that are easy for the consumer to use.",
    },
    {
      image: information,
      title: "Technically Diverse Teams",
      content:
        "Our diverse technologies help us in developing Shopify stores that are fully integrated and work efficiently with all platforms.",
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
            Why Work With  <span> DSMEGlobals</span> 
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="services__main__container services__main__container__reverse"
        style={{ marginBottom: "5em" }}
      >
        <Scrollspy
          items={ecommerceWhyWorkdata?.map((item) =>
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
          {ecommerceWhyWorkdata?.map((item) => (
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
          {ecommerceWhyWorkdata?.map((item) => (
            <IndustryCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
      </div>

  </>
  );
}
