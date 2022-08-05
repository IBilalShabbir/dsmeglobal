import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesSectionCard";
import servicesbanner from "../assets/servicesbanner.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Fade } from "react-reveal";

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
          {data.map((item) => (
            <ServicesCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
        <div className="services__main__container__right">
          {data.map((item) => (
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
                className="services__main__container__right__link"
              >
                {item.title}
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}
