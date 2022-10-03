import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesHowWorks } from "../components/ServicesHowWorks";
import { FixedPriceAllInclusivePricing } from "../components/FixedPriceAllInclusivePricing";
import { FixedPriceWhyWork } from "../components/FixedPriceWhyWork";
import { FixedPriceLinks } from "../components/FixedPriceLinks";
import { blockChainGetStarted } from "../assets";
import { FixedPriceProcess } from "../components/FixedPriceProcess";

export default function FixedPrice() {
  return (
    <>
      <Jumbotron
        heading="Less Execution Risk, More Trust"
        description="We plan and deliver your product over multiple milestones, leveraging a transparent working methodology."
      />
      <ServicesHowWorks />
      <FixedPriceLinks />
      <div className="blockchain__get__started" style={{ marginBottom: "0em" }}>
        <img
          src={blockChainGetStarted}
          alt="blockChainGetStarted"
          className="blockchain__get__started__svg"
        />
        <div className="blockchain__get__started__heading heading">
          This process offers minimum risk and a transparent approach since you
          only pay on the completion of defined deliverables.
        </div>
      </div>
      <FixedPriceWhyWork />
      <FixedPriceAllInclusivePricing />
      <FixedPriceProcess />
      <div className="ready__to__get__started__section">
        <div className="ready__to__get__started">
          <div className="ready__to__get__started__heading__container">
            <svg
              width="420"
              height="467"
              viewBox="0 0 467 467"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M428.629 37.5429V428.629L37.5426 428.629V37.5429L428.629 37.5429Z"
                stroke="url(#paint0_linear_68_1534)"
                stroke-width="75"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_68_1534"
                  x1="244"
                  y1="456"
                  x2="214.5"
                  y2="98.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ECC82" />
                  <stop
                    offset="0.552083"
                    stop-color="#2ECC82"
                    stop-opacity="0.26"
                  />
                  <stop offset="1" stop-color="#2ECC82" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ready__to__get__started__heading__container__overlay">
              <div className="ready__to__get__started__heading heading">
                Ready To Get Started?
              </div>
              <div className="ready__to__get__started__heading__two heading">
                Let's talk
              </div>
              <button className="ready__to__get__started__overlay__lets__talk__btn">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
        <div className="fixed__price__discovery">
          <div className="fixed__price__discovery__container">
            <svg
              width="537"
              height="537"
              viewBox="0 0 537 537"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="268.638"
                cy="268.639"
                r="233.646"
                transform="rotate(78.6594 268.638 268.639)"
                stroke="url(#paint0_linear_68_1552)"
                stroke-opacity="0.1"
                stroke-width="69"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_68_1552"
                  x1="268.638"
                  y1="0.493103"
                  x2="268.638"
                  y2="536.785"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B6B6B6" />
                  <stop offset="1" stop-color="#020202" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="fixed__price__discovery__container__overlay">
              <div className="fixed__price__discovery__container__overlay__heading heading">
                Discovery Workshop
              </div>
              <div className="fixed__price__discovery__container__overlay__subheadings">
                <div className="fixed__price__discovery__container__overlay__subheadings__one">
                  2-Week Process
                </div>
                <div className="fixed__price__discovery__container__overlay__subheadings__two">
                  To Ensure On-Time & On-Budget Delivery
                </div>
                <div className="fixed__price__discovery__container__overlay__text">
                  During this workshop, our Product Strategists, Technical &
                  UI/UX Experts collaborate with our clients, to
                </div>
                <div className="fixed__price__discovery__container__overlay__bottom__content">
                  <div className="fixed__price__discovery__container__overlay__bottom__content__left">
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Map & understand client vision
                    </div>
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Visualize the idea-
                    </div>
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Quantify business value (ROI)
                    </div>
                  </div>
                  <div className="fixed__price__discovery__container__overlay__bottom__content__right">
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Assess technical viability
                    </div>
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Define the scope for budgeting
                    </div>
                    <div className="fixed__price__discovery__container__overlay__bottom__content__left__entry">
                      Develop a comprehensive plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
