import React from "react";

export function AboutTeamCard({ image, name, designation }) {
  return (
    <div className="about__team__content__entry">
      <img
        src={
          import.meta.env.VITE_CLOUDNAIRY_API_URL.replace("q_50", "q_20") +
          "/c_crop,g_custom/" +
          image
        }
        alt={name}
        className="about__team__content__entry__img"
      />
      <div className="about__team__content__entry__content">
        <div className="about__team__content__entry__content__heading heading">
          {name}
        </div>
        <div className="about__team__content__entry__content__info">
          {designation}
        </div>
      </div>
    </div>
  );
}
