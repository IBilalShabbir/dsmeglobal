import React from "react";
import { Link } from "react-router-dom";
import { blockChainGetStarted } from "../assets";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export default function UIUXDesign() {
  return (
    <>
      <Jumbotron
        heading="User Experience & Design Solutions"
        description="We design and launch digital products that deliver great user experiences. Good user experiences are very important to us for every software we create. By basing our software on human-centered design principles, we ensure your users get the best experience, and you get the best return on investment."
      />
      <div className="services__how__we__do__it services__how__we__do__it__reverse">
        <div className="services__how__we__do__it__heading heading">
          Execution Process
        </div>
        <div className="services__how__we__do__it__info">
          We work with you to make appealing sites, impactful applications, and
          modern enterprise systems individuals love. Through your vision and
          our expertise, our team of business analysts, designers, and
          developers will build experiences that keep your customers coming
          back.
        </div>
        <div className="services__how__we__do__it__content">
          <ServicesHowWeDoItEntry
            icon="1"
            title="Requirements Gathering"
            list={[
              "Work Breakdown Structure",
              "Project Plan",
              "Project Budget",
              "Requirements Docs",
              "Use Cases",
              "User Stories",
            ]}
          />
          <ServicesHowWeDoItEntry
            icon="2"
            title="Development & Testing"
            list={[
              "Frontend & backend development",
              "Weekly Client Feedback (SCRUM)",
              "QA Testing",
              "Deployment",
            ]}
          />
          <ServicesHowWeDoItEntry
            icon="3"
            title="Support & Maintenance"
            list={[
              "SLA Based Support",
              "L3 and Production Support Services",
              "Operational support where needed",
              "On-going Support",
            ]}
          />
        </div>
      </div>
      <div className="blockchain__get__started">
        <img
          src={blockChainGetStarted}
          alt="blockChainGetStarted"
          className="blockchain__get__started__svg"
        />
        <div className="blockchain__get__started__heading heading">
          Talk to us about your challenges and we will bring an incredible team.
        </div>
        <Link to="/quote" className="blockchain__get__started__link">
          Let’s work together
        </Link>
      </div>
    </>
  );
}
