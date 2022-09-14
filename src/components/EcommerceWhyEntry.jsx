import React from "react";

export function EcommerceWhyEntry({ icon, heading, info }) {
  return (
    <div className="ecommerce__why__content__entry">
      <div className="ecommerce__why__content__entry__icon">{icon}</div>
      <div className="ecommerce__why__content__entry__heading heading">
        {heading}
      </div>
      <div className="ecommerce__why__content__entry__info">{info}</div>
    </div>
  );
}
