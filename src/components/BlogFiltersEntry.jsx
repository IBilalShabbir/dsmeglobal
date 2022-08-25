import React from "react";

export function BlogFiltersEntry({ label, filter, setFiter }) {
  return (
    <div className="blog__filters__entry">
      <input
        type="radio"
        className="blog__filters__entry__input"
        name="blog__filters__entry"
        checked={filter === label}
        onClick={() => {
          filter === label ? setFiter("") : setFiter(label);
        }}
        readOnly
      />
      <div className="blog__filters__entry__content">
        <div className="blog__filters__entry__content__icon">
          {label.substring("", 1)}
        </div>
        {label}
      </div>
    </div>
  );
}
