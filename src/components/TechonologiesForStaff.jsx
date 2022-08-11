import React, { useState } from "react";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import reactlogo from "../assets/react.webp";

export function TechonologiesForStaff() {
  const [selected, setSelected] = useState("Web Developers");
  const array = [
    {
      label: "Web Developers",
      svg: "",
      techIcons: [
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
      ],
    },
    {
      label: "DevOps Engineer",
      svg: "",
      techIcons: [reactlogo, reactlogo, reactlogo, reactlogo, reactlogo],
    },
    {
      label: "Movile App Developers",
      svg: "",
      techIcons: [
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
        reactlogo,
      ],
    },
    {
      label: "QA Engineer",
      svg: "",
      techIcons: [reactlogo, reactlogo, reactlogo, reactlogo, reactlogo],
    },
    {
      label: "UI/UX Designer",
      svg: "",
      techIcons: [reactlogo, reactlogo, reactlogo],
    },
  ];
  return (
    <div className="container__emerging__technologies">
      <div className="container__emerging__technologies__heading__main">
        Technologies<span>We Use</span>
      </div>
      <div className="container__emerging__technologies__section">
        {array?.map((item, i) => (
          <WebdevArrEntry
            label={item.label}
            svg={item.svg}
            selected={selected}
            setSelected={setSelected}
            key={i}
          />
        ))}
      </div>
      {array
        ?.filter((item) => item.label === selected)
        ?.map((item) => (
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
