import React from "react";
import {
  android,
  artificalIntellegence,
  backend,
  crossPlatform,
  frontend,
  apple,
  technologiesSvg,
} from "../assets";
import { HomeTechnologiesCard } from "./HomeTechnologiesCard";

export function HomeTechnologies({}) {
  const techData = [
    {
      image: android,
      title: "Andriod",
      info: "Create a seamless mobile experience with Android app development.Our software house has been recognized by Google for outstanding Android application quality.",
    },
    {
      image: apple,
      title: "IOS",
      info: "Stay ahead of the curve with a custom iOS app.We offer iOS application development services for startups, enterprises, and unicorns around the globe.",
    },
    {
      image: crossPlatform,
      title: "Cross-Platform",
      info: "Cut your time-to-market with cross-platform application development.We help you save time and resources thanks to our development services.",
    },
    {
      image: frontend,
      title: "Frontend",
      info: "Take your app to the next level with our front-end app development.We build user-oriented intuitive web applications that highlight your brand image.",
    },
    {
      image: backend,
      title: "Backend",
      info: "We support the most complex app idea with powerful backend architecture.Our team supports the most demanding application ideas with experiences in backend development.",
    },
    {
      image: artificalIntellegence,
      title: "Artificial Intelligence",
      info: "Reach new business opportunities with our Artificial Intelligence services.We help you boost your product and get in-depth business insights with Data Science and Machine Learning.",
    },
  ];
  return (
    <div className="home__technologies">
      <img
        src={technologiesSvg}
        alt="technologiesSvg"
        className="home__technologies__img"
      />
      <div className="home__technologies__heading heading">
        Where Business meets cutting-edge Technology
      </div>
      <div className="home__technologies__info">
        Choose the tech stack for your next application, or let us pick the best
        solution for you
      </div>
      <div className="home__technologies__content">
        {techData.map((item, i) => (
          <HomeTechnologiesCard
            key={i}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}
