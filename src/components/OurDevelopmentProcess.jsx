import React, { useState } from "react";
import { OurDevelopmentProcessArray } from "../constants/data";
import { WebdevArrEntry } from "./WebdevArrEntry";

export function OurDevelopmentProcess() {
  const [selected, setSelected] = useState("Scoping & estimation");

  return (
    <div
      className="container__emerging__technologies"
      style={{
        paddingTop: "5em",
        paddingBottom: "5em",
        backgroundColor: "#242424",
        marginTop: "3em",
        marginBottom: "4em",
      }}
    >
      <div
        className="container__emerging__technologies__heading__main"
        style={{ color: "white" }}
      >
        Our Development<span> Process</span>
      </div>
      <div
        className="container__emerging__technologies__text__main"
        style={{ color: "white" }}
      >
        We understand the potential value of emerging technologies for both
        corporates and consumers and thus help you choose the right set of
        technologies.
      </div>
      <div className="container__emerging__technologies__section container__emerging__technologies__section__reverse">
        {OurDevelopmentProcessArray?.map((item, i) => (
          <WebdevArrEntry
            key={i}
            label={item.label}
            svg={item.svg}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      {OurDevelopmentProcessArray?.filter(
        (item) => item.label === selected
      )?.map((item, i) => (
        <div
          className="container__emerging__technologies__section__entry__data"
          key={i}
        >
          <div
            className="container__emerging__technologies__section__entry__data___heading"
            style={{ color: "white" }}
          >
            <div className="container__emerging__technologies__section__entry__data___heading__ico">
              {item.svg}
            </div>
            {item.label}
          </div>
          <div
            className="container__emerging__technologies__section__entry__data__text"
            style={{ color: "white" }}
          >
            {item.info}
          </div>
        </div>
      ))}
    </div>
  );
}
