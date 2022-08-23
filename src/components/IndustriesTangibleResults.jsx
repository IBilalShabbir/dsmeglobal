import React from "react";
import { Link } from "react-router-dom";
import { IndustriesTangibleResultsCard } from "./IndustriesTangibleResultsCard";

export function IndustriesTangibleResults({}) {
  return (
    <div className="industries__tengible__result">
      <div className="industries__tengible__result__heading heading">
        Tangible results, right on schedule
      </div>
      <div className="industries__tengible__result__info">
        Engineering teams today need to move and scale fast. DSME Global Links
        injects momentum into your engineering department with high-performing,
        and excellent teams of developers.
      </div>
      <div className="industries__tengible__result__content">
        <IndustriesTangibleResultsCard
          value="2"
          title="weeks for the prototype"
        />
        <IndustriesTangibleResultsCard value="3" title="months for the MVP" />
      </div>
      <div className="industries__tengible__result__content">
        <IndustriesTangibleResultsCard
          value="30%"
          title=" More efficient staffing"
        />
        <IndustriesTangibleResultsCard value="60%" title="Lower Risks" />
        <IndustriesTangibleResultsCard
          value="3.6x"
          title="Higher project Satisfaction"
        />
      </div>
      <div className="industries__tengible__result__content__info">
        Need your idea verified fast?
      </div>
      <Link
        to="/quote"
        className="industries__tengible__result__content__card__link"
      >
        Get a Quote
      </Link>
    </div>
  );
}
