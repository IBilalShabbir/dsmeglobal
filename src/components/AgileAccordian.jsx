import React from "react";

export function AgileAccordian({
  heading,
  info,
  selected,
  setSelected,
  index,
}) {
  return (
    <div className="freequetly__ask__question__accordian__entry">
      <button
        className="freequetly__ask__question__accordian__entry__button"
        onClick={() => {
          selected === index ? setSelected(false) : setSelected(index);
        }}
      >
        <div className="accordian__entry__button__heading heading">
          {heading}
        </div>
      </button>
      {selected === index ? (
        <div className="accordian__entry__button__heading__contet__text">
          {info}
        </div>
      ) : null}
    </div>
  );
}
