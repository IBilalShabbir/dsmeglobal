import React from "react";
import { AndroidIosWhyChoose } from "./AndroidIosWhyChoose";

export function IOSWhyChoose({}) {
  return (
    <div
      className="androidios__why__choose androidios__why__choose__reverse"
      style={{ marginTop: "7em" }}
    >
      <div className="androidios__why__choose__content">
        <div className="androidios__why__choose__content__heading heading">
          Why choose native IOS app development?
        </div>
        <div className="androidios__why__choose__content__info">
          What are the pros of building a native application for iOS? See our
          list and make sure your choice is well-informed.
        </div>
        <div className="androidios__why__choose__content__details">
          <AndroidIosWhyChoose />
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
