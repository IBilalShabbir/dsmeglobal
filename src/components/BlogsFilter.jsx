import React from "react";
import { Fade } from "react-reveal";
export default function BlogsFilter({ title, onChange, defaultChecked }) {
  return (
    <Fade>
      <div className="blog__page__filter__entry">
        <input
          type="radio"
          className="blog__page__filter__entry__input"
          name="blog__page__filter__entry"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <div className="blog__page__filter__entry__content">{title}</div>
      </div>
    </Fade>
  );
}
