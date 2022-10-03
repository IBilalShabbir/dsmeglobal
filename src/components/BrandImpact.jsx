import React from "react";
import { brandImpact } from "../assets";

export function BrandImpact() {
  return (
    <div className="dedicated__best__fit">
      <div className="dedicated__best__fit__heading heading">
        Want to create a lasting brand impact?
      </div>
      <div className="dedicated__best__fit__info">
        Get in touch with our graphic design services consultants.
      </div>
      <div className="dedicated__best__fit__content">
        <img
          loading="lazy"
          src={brandImpact}
          alt={brandImpact}
          className="dedicated__best__fit__content__img"
        />
        <div className="dedicated__best__fit__content__details">
          <div className="dedicated__best__fit__content__details__info dedicated__best__fit__content__details__info__reverse">
            {[
              "Corporate Identity Development",
              "Web Design & Development",
              "User Experience Design (UX)",
              "Interactive Design",
              "Rich Media Production",
              "Online Branding",
              "Campaign Microsites",
              "Video Content Creation",
              "Print, Packaging and POS",
              "2D / 3D Illustration and Visualization",
            ].map((item) => (
              <div className="dedicated__best__fit__content__details__info__entry">
                <div className="dedicated__best__fit__content__details__info__entry__dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
