import React, { useState } from "react";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import { TechonologiesForStaffArray } from "../constants/data";

export function TechonologiesForStaff() {
  const [selected, setSelected] = useState("Web Developers");

  return (
    <div className="container__emerging__technologies">
      <div className="container__emerging__technologies__heading__main">
        Technologies<span>We Use</span>
      </div>
      <div className="container__emerging__technologies__section">
        {TechonologiesForStaffArray?.map((item, i) => (
          <WebdevArrEntry
            label={item.label}
            svg={item.svg}
            selected={selected}
            setSelected={setSelected}
            key={i}
          />
        ))}
      </div>
      {TechonologiesForStaffArray?.filter(
        (item) => item.label === selected
      )?.map((item) => (
        <div className="container__emerging__technologies__section__entry__data">
          {item.techIcons?.map((icon, i) => {
            return (
              <div
                key={i}
                className="container__emerging__technologies__section__entry__data__img"
              >
                <img src={icon} alt="icon" />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
