import React from "react";

export function PricingFeatureEntry({ title, content, icon }) {
  return (
    <div className="Idustry__revolution__entry">
      <div className="Idustry__revolution__section__top">
        {icon ? (
          <div className="Idustry__revolution__section__icon">{icon}</div>
        ) : null}
        <div className="Idustry__revolution__section__entry__heading">
          {title}
        </div>
      </div>
      <div className="Idustry__revolution__section__info">{content}</div>
    </div>
  );
}
