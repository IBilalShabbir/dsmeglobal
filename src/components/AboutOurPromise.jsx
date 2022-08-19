import React from "react";
import { AboutOurPromiseCard } from "./AboutOurPromiseCard";

export function AboutOurPromise({}) {
  return (
    <div className="about__our__promise">
      <div className="about__our__promise__heading heading">Our Promise</div>
      <div className="about__our__promise__info">
        The values which we live by
      </div>
      <div className="about__our__promise__content">
        <AboutOurPromiseCard
          number="1."
          title="Empathy"
          info="Bringing the power of empathy to the table"
        />
        <AboutOurPromiseCard
          number="2."
          title="High Performance"
          info="Punch above your weight class"
        />
        <AboutOurPromiseCard
          number="3."
          title="Together"
          info="Teamwork makes the dream work"
        />
        <AboutOurPromiseCard
          number="4."
          title="Transparency"
          info="Authenticity is everything"
        />
      </div>
    </div>
  );
}
