import React from "react";
import { technologiesImg, technologiesSvg1, technologiesSvg2 } from "../assets";

export function HomeOurTechnologies() {
  return (
    <div className="home__techonologies">
      <img
        src={technologiesSvg1}
        alt="technologiesSvg1"
        className="home__techonologies__svg1"
      />
      <img
        src={technologiesSvg2}
        alt="technologiesSvg2"
        className="home__techonologies__svg2"
      />
      <div className="home__techonologies__content">
        <div className="home__techonologies__left">
          <div className="home__techonologies__content__left__heading heading">
            Our Technologies
          </div>
          <div className="home__techonologies__content__left__info">
            We solve business challenges with cutting-edge technology and
            data-driven research.
          </div>
        </div>
        <div className="home__techonologies__content__right">
          <div className="home__techonologies__content__img__wrapper">
            <img
              src={technologiesImg}
              alt="technologiesImg"
              className="home__techonologies__content__right__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
