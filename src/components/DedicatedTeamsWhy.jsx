import React from "react";
import { technologiesSvg } from "../assets";
import { HomeTechnologiesCard } from "./HomeTechnologiesCard";

export function DedicatedTeamsWhy() {
  const data = [
    {
      image: <></>,
      title: "Perfect Match",
      info: (
        <>
          We perfectly match a dedicated agile team with your technology &
          product requirements. They can either work using your development
          processes with your existing in-house (or external) teams or work
          independently.
        </>
      ),
    },
    {
      image: <></>,
      title: "Test Before You Hire",
      info: (
        <>
          To establish confidence and demonstrate work quality, we offer a
          no-cost proof of concept to our clients whereby they test our
          resources with defined tasks We only move forward, if you like our
          work during the trial.
        </>
      ),
    },
    {
      image: <></>,
      title: "Immediate Starts",
      info: (
        <>
          You don’t need to go through the stress of recruitment, infrastructure
          setup, deal with various staffing risks & problems or lose focus on
          your existing projects. We help you ramp up and get started on your
          project immediately.
        </>
      ),
    },
    {
      image: <></>,
      title: "Flexible Team Size",
      info: (
        <>
          We provide easy scaling of resources hired based on your needs; thus
          aiding in cost effectiveness. You can start small with a few
          developers and scale up by hiring more as you and your needs grow and
          vice versa.
        </>
      ),
    },
    {
      image: <></>,
      title: "Skills & Expertise",
      info: (
        <>
          Our dedicated developers are the perfect blend of hard and soft skills
          with years of specialized domain expertise, even covering the latest
          emerging technologies like AR/VR, Blockchain, Big Data, IoT, etc.
        </>
      ),
    },
    {
      image: <></>,
      title: "Knowledge & Team Retention",
      info: (
        <>
          Due to our well-established development processes, product knowledge
          is accumulated and retained throughout the project. Proper transition
          plans are created for knowledge transfer to new team members when
          needed.
        </>
      ),
    },
    {
      image: <></>,
      title: "Managed Process",
      info: (
        <>
          All the heavy-lifting is done for you by your dedicated PM. DSME’s
          proven development methodologies provide the experience and full-stack
          managed services so you can focus on what’s important.
        </>
      ),
    },
    {
      image: <></>,
      title: "Supervisor-Level Reporting",
      info: (
        <>
          Due to our well-established development processes, product knowledge
          is accumulated and retained throughout the project. Proper transition
          plans are created for knowledge transfer to new team members when
          needed.
        </>
      ),
    },
    {
      image: <></>,
      title: "Project Specs and Scoping",
      info: (
        <>
          DSME’s technical writers will do all the work of gathering crucial
          project information from key stakeholders to deliver highly technical
          requirements that developers understand.
        </>
      ),
    },
    {
      image: <></>,
      title: "IP Security, Ownership, and Licensing",
      info: (
        <>
          You get complete ownership and licensing for the software built by
          DSME Global Links, so you’re free to use and commercialize it.
        </>
      ),
    },
    {
      image: <></>,
      title: "Code Documentation and Transition",
      info: (
        <>
          We’ll provide everything you need to seamlessly hand off new software
          and train your internal teams.
        </>
      ),
    },
    {
      image: <></>,
      title: "Testing, Support, and Maintenance",
      info: (
        <>
          End-to-end testing, round-the-clock support for bugs, and on-demand
          maintenance.
        </>
      ),
    },
  ];
  return (
    <div className="home__technologies">
      <img
        loading="lazy"
        src={technologiesSvg}
        alt="technologiesSvg"
        className="home__technologies__img"
      />
      <div className="home__technologies__heading heading">
        Why Dedicated Teams with DSMEGlobal?
      </div>
      <div className="home__technologies__info">
        Choose the tech stack for your next application, or let us pick the best
        solution for you
      </div>
      <div className="home__technologies__content">
        {data.map((item, i) => (
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
