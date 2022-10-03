import React from "react";
import { whyCustomPrice } from "../assets";

export function GraphicDesignWhyCustomPricing() {
  return (
    <div className="graphic__design__why__custom__pricing">
      <div className="graphic__design__why__custom__pricing__content">
        <img
          src={whyCustomPrice}
          alt="whyCustomPrice"
          className="graphic__design__why__custom__pricing__content__left"
        />
        <div className="graphic__design__why__custom__pricing__content__right">
          <div className="graphic__design__why__custom__pricing__content__right__heading heading">
            WE OFFER CUSTOM PRICING BECAUSE EVERY GRAPHIC DESIGN SERVICE IS
            DIFFERENT
          </div>
          <div className="graphic__design__why__custom__pricing__content__right__info">
            Through our years of experience, we’ve learned it’s best to start by
            listening to your story. Then we review your existing brand and
            offer you options from there. Below we’ve listed our most requested
            packages, but each of these can be tweaked or we can give you a
            completely custom quote.
          </div>
        </div>
      </div>
    </div>
  );
}
