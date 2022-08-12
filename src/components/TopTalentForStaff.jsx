import React from "react";
import { Check } from "react-feather";
import { talentFeatures } from "../constants/data";

export function TopTalentForStaff() {
  return (
    <div className="staff__talent">
      <div className="staff__talent__heading">
        IT Staff Augmentation to <span>Extend Your Team</span> with Top Class
        Tech Talent
      </div>
      <div className="staff__talent__sub__heading">
        Upscale and Up Skill Your Enterprise with our Staff Augmentation
        Services
      </div>
      <div className="staff__talent__info">
        Looking for an extended arm to augment your existing team as per the
        evolving project needs? We are considered as one of the best staff
        augmentation forms offering staff augmentation and managed services to
        scale your internal development teams quickly in minimal time,
        fulfilling your unique business requirements. Being the most prominent
        IT staff augmentation company in India, we ensure to offer 100% "Peace
        of mind with our top-notch team augmentation solutions.
      </div>
      <div className="staff__talent__info__heading">
        We have experts of various IT professionals for your specific project
        needs.
      </div>
      <div className="staff__talent__features">
        {talentFeatures?.map((feature) => (
          <div
            className="staff__talent__features__entry"
            key={JSON.stringify(feature)}
          >
            <Check size={20} color="#189366" />
            {feature}
          </div>
        ))}
      </div>
      <div className="staff__talent__buttons">
        <button>SCHEDULE A DEVELOPER INTERVIEW</button>
      </div>
    </div>
  );
}
