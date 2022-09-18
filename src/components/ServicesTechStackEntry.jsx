import React from "react";

export function ServicesTechStackEntry({ icon, heading, list }) {
  return (
    <div className="android__tech__stack__content__entry">
      <div className="android__tech__stack__content__entry__icon">{icon}</div>
      <div className="android__tech__stack__content__entry__heading heading">
        {heading}
      </div>
      {list.map((item, index) => (
        <div
          className="android__tech__stack__content__entry__entry"
          key={index}
        >
          <div className="android__tech__stack__content__entry__entry__dot" />
          {item}
        </div>
      ))}
    </div>
  );
}
