import React from "react";

export function GraphicDesignSkillsEntry({ heading, completed }) {
  return (
    <div className="graphic__design__skills__content__entry">
      <div className="graphic__design__skills__content__entry__header">
        <div className="graphic__design__skills__content__entry__header__heading">
          {heading}
        </div>
        <div className="graphic__design__skills__content__entry__header__completed">
          {completed}%
        </div>
      </div>
      <div className="graphic__design__skills__content__entry__content">
        <div
          className="graphic__design__skills__content__entry__content__filled"
          style={{ width: completed + "%" }}
        />
      </div>
    </div>
  );
}
