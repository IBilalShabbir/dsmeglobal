import React from "react";
import { technologiesSvg } from "../assets";
import { Fade } from "react-reveal";
import { HomeTechnologiesCard } from "./HomeTechnologiesCard";

export function ServicesFeatureListing({ data, title, description }) {
  return (
    <div className="home__technologies">
      <img
        loading="lazy"
        src={technologiesSvg}
        alt="technologiesSvg"
        className="home__technologies__img"
      />
      <Fade bottom distance="30%">
        <div className="home__technologies__heading heading">{title}</div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__technologies__info">{description}</div>
      </Fade>
      <div className="home__technologies__content">
        {data.map((item, i) => (
          <HomeTechnologiesCard
            key={i}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}
