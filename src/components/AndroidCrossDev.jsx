import React from "react";
import { Link } from "react-router-dom";

export function AndroidCrossDev({}) {
  return (
    <div className="android__cross__dev">
      <div className="android__cross__dev__content">
        <div className="android__cross__dev__content__heading heading">
          Cross-platform development
        </div>
        <div className="android__cross__dev__content__info">
          Cross-platform application development allows you to create apps that
          run across multiple device platforms, using just one codebase. If you…
        </div>
        <div className="android__cross__dev__content__details">
          <div className="android__cross__dev__content__details__entry">
            <div className="android__cross__dev__content__details__entry__value heading">
              1
            </div>
            <div className="android__cross__dev__content__details__entry__heading">
              want to build a uniform application
            </div>
          </div>
          <div className="android__cross__dev__content__details__entry">
            <div className="android__cross__dev__content__details__entry__value heading">
              2
            </div>
            <div className="android__cross__dev__content__details__entry__heading">
              have a limited project budget
            </div>
          </div>
          <div className="android__cross__dev__content__details__entry">
            <div className="android__cross__dev__content__details__entry__value heading">
              3
            </div>
            <div className="android__cross__dev__content__details__entry__heading">
              wish to enter the market fast
            </div>
          </div>
        </div>
        <div className="android__cross__dev__content__info">
          You should consider our cross-platform development services.
        </div>
        <Link to="/" className="android__cross__dev__content__link">
          Learn about Cross-platform development
        </Link>
      </div>
    </div>
  );
}
