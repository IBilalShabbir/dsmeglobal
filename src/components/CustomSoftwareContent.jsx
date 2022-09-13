import React from "react";
import {
  developmentProcessSvg,
  engagementSvg,
  mobileAppDevelopment,
  webAppDevelopment,
} from "../assets";
import { HomeEngagementCard } from "../components/HomeEngagementCard";

export function CustomSoftwareContent() {
  return (
    <div className="home__engagement">
      <img
        loading="lazy"
        src={engagementSvg}
        alt="engagementSvg"
        className="home__engagement__svg"
      />
      <img
        loading="lazy"
        src={developmentProcessSvg}
        alt="developmentProcessSvg"
        className="home__engagement__svg1"
      />

      <div className="home__engagement__content">
        <HomeEngagementCard
          to="/services/web-app-development"
          image={webAppDevelopment}
          title="Web Application Development"
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
                strokeWidth="33.9626"
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
                  <stop stopColor="#2ECC82" />
                  <stop offset="1" stopColor="#003A1F" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
        <HomeEngagementCard
          to="/services/mobile-app-development"
          image={mobileAppDevelopment}
          title="Mobile App Development"
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
                strokeWidth="33.8577"
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
                  <stop stopColor="#2ECC82" />
                  <stop offset="1" stopColor="#024A28" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
      </div>
    </div>
  );
}
