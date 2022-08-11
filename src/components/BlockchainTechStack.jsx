import React from "react";

export function BlockchainTechStack() {
  const data = ["", "", ""];
  return (
    <div className="blockchain__techstack">
      <div className="blockchain__techstack__container">
        <div className="blockchain__techstack__container__heading">
          Tech<span> Stacks</span>
        </div>

        <div className="blockchain__techstack__container__tags">
          {data.map((item, i) => (
            <img src={item} alt={item} />
          ))}
        </div>
        <div className="blockchain__techstack__container__tags__button__div">
          <button className="blockchain__techstack__container__tags__button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
