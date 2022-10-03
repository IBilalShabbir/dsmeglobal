import React from "react";
import { identityOfBrand } from "../assets";

export function GraphicDesignBrandIdentity() {
  return (
    <div className="dedicated__best__fit">
      <div className="dedicated__best__fit__content dedicated__best__fit__content__reverse">
        <img
          loading="lazy"
          src={identityOfBrand}
          alt={identityOfBrand}
          className="dedicated__best__fit__content__img"
        />
        <div className="dedicated__best__fit__content__details">
          <div className="dedicated__best__fit__content__details__heading dedicated__best__fit__content__details__heading__reverse heading">
            LET THE IDENTITY OF YOUR BRAND MOLD ITSELF.
          </div>
          <div className="dedicated__best__fit__content__details__info">
            We offer an entire suite of solutions, bound by data, strategy,
            creativity, and pragmatism. Through impactful branding, impeccable
            advertising and marketing, effective innovative web sites,
            noticeably engaging content material and tactical distribution of
            content material on social media. Everything we will consider the
            mix of artwork and creativity can translate normal concepts into the
            entirety of modern. We work strategically with companies and many
            other brands to establish the new media roadmap for their future and
            implement it. Our Creative agency was laid on the founding vision
            and mission to deliver the best out of the rest: to be the right new
            media platform for both media companies and brands. It's working
            exceedingly well, and we're delivering some staggering.
          </div>
        </div>
      </div>
    </div>
  );
}
