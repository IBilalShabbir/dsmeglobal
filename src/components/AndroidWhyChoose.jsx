import React from "react";
import { AndroidIosWhyChoose } from "./AndroidIosWhyChoose";

export function AndroidWhyChoose({}) {
  return (
    <div className="androidios__why__choose">
      <div className="androidios__why__choose__content">
        <div className="androidios__why__choose__content__heading heading">
          Why choose native Android app development?
        </div>
        <div className="androidios__why__choose__content__info">
          Why is it worth building a native application for Android? See our
          reasons to make a well-informed choice.
        </div>
        <div className="androidios__why__choose__content__details">
          <AndroidIosWhyChoose />
          <AndroidIosWhyChoose />
          <AndroidIosWhyChoose />
          <AndroidIosWhyChoose />
          <AndroidIosWhyChoose />
        </div>
      </div>
    </div>
  );
}
