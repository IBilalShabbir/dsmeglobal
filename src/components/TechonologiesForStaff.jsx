import React, { useState } from "react";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import reactlogo from "../assets/technologies/react.webp";

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
      {/* <div className="container__emerging__technologies__text__main">
        We constantly push our limits and explore emerging technologies to build
        a solution that you help our clients stay ahead of the game.
      </div> */}
      <div className="container__emerging__technologies__section">
        {array.map((item) => (
          <WebdevArrEntry
            label={item.label}
            svg={item.svg}
            selected={selected}
            setSelected={setSelected}
            key={JSON.stringify(item)}
          />
        ))}
      </div>
      {array
        .filter((item) => item.label === selected)
        .map((item) => (
          <div className="container__emerging__technologies__section__entry__data">
            {item.techIcons.map((icon) => {
              return (
                <div
                  key={JSON.stringify(icon)}
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
