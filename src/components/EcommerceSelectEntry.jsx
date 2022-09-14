import React from "react";

export function EcommerceSelectEntry({ icon, heading, selected, setSelected }) {
  return (
    <div className="ecommerce__about__select__entry">
      <input
        type="radio"
        className="ecommerce__about__select__entry__input"
        name="ecommerce__about__select__entry"
        defaultChecked={selected === heading}
        onChange={() => setSelected(heading)}
      />
      <div className="ecommerce__about__select__entry__content">
        <div className="ecommerce__about__select__entry__content__icon">
          {icon}
        </div>
        <div className="ecommerce__about__select__entry__content__heading heading">
          {heading}
        </div>
      </div>
    </div>
  );
}
