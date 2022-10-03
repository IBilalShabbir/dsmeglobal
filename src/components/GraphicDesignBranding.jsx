import React from "react";
import { degreeBranding } from "../assets";

export function GraphicDesignBranding() {
  return (
    <div className="graphic__design__branding">
      <div className="graphic__design__branding__content">
        <div className="graphic__design__branding__content__left">
          <div className="graphic__design__branding__content__left__heading heading">
            The essence of 360 degree branding
          </div>
          <div className="graphic__design__branding__content__left__info">
            A belief that permeates the way we do business One brand – One voice
            Every point of contact matters Emanating from a single, focused
            brand strategy OUR graphic design services surround the brand,
            making important brand equity deposits into the brand.
          </div>
        </div>
        <img
          src={degreeBranding}
          alt="degreeBranding"
          className="graphic__design__branding__content__img"
        />
      </div>
    </div>
  );
}
