import React from "react";

export function IndustriesTangibleResultsCard({ value, title }) {
  return (
    <div className="industries__tengible__result__content__card">
      <div className="industries__tengible__result__content__card__value heading">
        {value}
      </div>
      <div className="industries__tengible__result__content__card__heading heading">
        {title}
      </div>
    </div>
  );
}
