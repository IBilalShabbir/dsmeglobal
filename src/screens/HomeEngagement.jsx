import React from "react";
import {
  dedicatedTeams,
  developmentProcessSvg,
  engagementSvg,
  fixedPrice,
} from "../assets";
import { HomeEngagementCard } from "./HomeEngagementCard";

export function HomeEngagement() {
  return (
    <div className="home__engagement">
      <img
        src={engagementSvg}
        alt="engagementSvg"
        className="home__engagement__svg"
      />
      <img
        src={developmentProcessSvg}
        alt="developmentProcessSvg"
        className="home__engagement__svg1"
      />
      <div className="home__engagement__heading heading">Engagement Models</div>
      <div className="home__engagement__info">
        Depending on your project specifics and needs, you can choose method of
        your own choice.
      </div>
      <div className="home__engagement__content">
        <HomeEngagementCard
          image={dedicatedTeams}
          title="Build your Dedicated Teams"
          info="Get your projects fast-tracked with the best technical and management talent. Increase quality and efficiency, and retain complete control of teams."
          svg={
            <svg
              width="341"
              height="342"
              viewBox="0 0 341 342"
              fill="none"
              className="home__engagement__content__card__svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M317.066 191.53L150.23 317.231L24.529 150.394L191.366 24.6931L317.066 191.53Z"
                stroke="url(#paint0_linear_77_26)"
                stroke-width="33.9626"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_77_26"
                  x1="146.886"
                  y1="341.012"
                  x2="194.71"
                  y2="0.911867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ECC82" />
                  <stop offset="1" stop-color="#003A1F" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
        <HomeEngagementCard
          image={fixedPrice}
          title="Fixed Price Project"
          info="Get a comprehensive product development experience from design to delivery with reduced development costs."
          svg={
            <svg
              width="269"
              height="269"
              viewBox="0 0 269 269"
              fill="none"
              className="home__engagement__content__card__svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="134.651"
                cy="134.799"
                r="117.13"
                transform="rotate(-115.578 134.651 134.799)"
                stroke="url(#paint0_linear_77_28)"
                stroke-width="33.8577"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_77_28"
                  x1="134.651"
                  y1="0.740829"
                  x2="134.651"
                  y2="268.858"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ECC82" />
                  <stop offset="1" stop-color="#024A28" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
      </div>
    </div>
  );
}
