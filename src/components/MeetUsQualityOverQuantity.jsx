import React from "react";
import qualityOver from "../assets/qualityOver.svg";
import continuousChange from "../assets/continuousChange.svg";
import fouceOn from "../assets/fouceOn.svg";
import { Fade } from "react-reveal";

export function MeetUsQualityOverQuantity() {
  return (
    <div className="meetus__containerOf__sub">
      <div className="meetus__container__sub">
        <div className="meetus__container__sub__content">
          <div className="meetus__container__sub__left">
            <Fade up>
              <div className="meetus__container__sub__left__image">
                <img
                  loading="lazy"
                  src={qualityOver}
                  alt="Quality over quantity"
                />
              </div>
            </Fade>
          </div>
          <Fade up>
            <div className="meetus__container__sub__right">
              <div
                className="meetus__container__sub__right__heading"
                style={{ color: "black" }}
              >
                <span>Quality </span> over quantity
              </div>

              <div
                className="meetus__container__sub__right__para"
                style={{ color: "black" }}
              >
                When it comes to our job, it's quality that matters. UX
                research, code reviews, manual and automatic tests. No
                exceptions.
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="meetus__container__sub">
        <div className="meetus__container__sub__content">
          <Fade up>
            <div className="meetus__container__sub__left">
              <div
                className="meetus__container__sub__right__heading"
                style={{ color: "black" }}
              >
                <span style={{ paddingLeft: "5px" }}>Continuous </span>change
              </div>
              <div
                className="meetus__container__sub__right__para"
                style={{ color: "black" }}
              >
                Change is the only constant. We believe in that. Technology
                switch? Sure thing! New frameworks and tools? More than welcome.
              </div>
            </div>
          </Fade>
          <div className="meetus__container__sub__right">
            <Fade up>
              <div className="meetus__container__sub__left__image">
                <img
                  loading="lazy"
                  src={continuousChange}
                  alt="Continuous change"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="meetus__container__sub">
        <div className="meetus__container__sub__content">
          <div className="meetus__container__sub__left">
            <Fade up>
              <div className="meetus__container__sub__left__image">
                <img loading="lazy" src={fouceOn} alt="Fouce on people" />
              </div>
            </Fade>
          </div>
          <Fade up>
            <div className="meetus__container__sub__right">
              <div
                className="meetus__container__sub__right__heading"
                style={{ color: "black" }}
              >
                Focus on <span>people</span>
              </div>
              <div
                className="meetus__container__sub__right__para"
                style={{ color: "black" }}
              >
                “People matter”. Such a cliché, right? But at DSME Global Links,
                they really do. Family atmosphere and tons of laughs guaranteed.
                See for yourself.
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
