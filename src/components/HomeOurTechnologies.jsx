import React from "react";
import { Fade } from "react-reveal";
import { technologiesImg, technologiesSvg1, technologiesSvg2 } from "../assets";

export function HomeOurTechnologies() {
  return (
    <div className="home__techonologies">
      <img
        loading="lazy"
        src={technologiesSvg1}
        alt="technologiesSvg1"
        className="home__techonologies__svg1"
      />
      <img
        loading="lazy"
        src={technologiesSvg2}
        alt="technologiesSvg2"
        className="home__techonologies__svg2"
      />
      <div className="home__techonologies__content">
        <div className="home__techonologies__left">
          <Fade bottom distance="30%">
            <div className="home__techonologies__content__left__heading heading">
              Our Technologies
            </div>
          </Fade>
          <Fade bottom distance="30%">
            <div className="home__techonologies__content__left__info">
              We solve business challenges with cutting-edge technology and
              data-driven research.
            </div>
          </Fade>
        </div>
        <div className="home__techonologies__content__right">
          <div className="home__techonologies__content__img__wrapper">
            <Fade bottom distance="30%">
              <img
                loading="lazy"
                src={technologiesImg}
                alt="technologiesImg"
                className="home__techonologies__content__right__img"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
