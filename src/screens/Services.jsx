import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesSectionCard";
import servicesbanner from "../assets/servicesbanner.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";

export default function Services({ data }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="From startup to enterprise, the full range of engineering services your company needs"
          info="We provide you end to end software development and consultancy services resulting in extraordinary digital experiences."
          img={servicesbanner}
          talk={true}
        />
      </div>
      <div className="services__main__container">
        <div className="services__main__container__left">
          {data?.map((item) => (
            <ServicesCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>

        <Scrollspy
          items={data?.map((item) =>
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
          {data?.map((item) => (
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
      </div>
    </>
  );
}
