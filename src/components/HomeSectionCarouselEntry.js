import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import LightSpeed from "react-reveal/LightSpeed";

export default function HomeSectionCarouselEntry({
  subHeading,
  heading,
  buttonLabel,
  toPath,
  isRight,
  noBtn,
  videoSrc,
  onClick,
}) {
  return (
    <div
      className={
        isRight
          ? "home__section__carousel__entry home__section__carousel__entry__right"
          : "home__section__carousel__entry"
      }
    >
      <video
        src={videoSrc ? videoSrc : video}
        autoPlay={"autoplay"}
        muted={true}
        loop={true}
      />
      <div className="home__section__carousel__entry__overlay">
        <div
          className={
            isRight
              ? "home__section__carousel__entry__overlay__content home__section__carousel__entry__overlay__content__right"
              : "home__section__carousel__entry__overlay__content"
          }
        >
          <div className="home__section__carousel__entry__overlay__content__sub__heading">
            {subHeading}
          </div>

          <div className="home__section__carousel__entry__overlay__content__heading">
            {heading}
          </div>
          {noBtn ? null : (
            <Link
              to={toPath ? toPath : "/"}
              onClick={onClick}
              className="button"
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
