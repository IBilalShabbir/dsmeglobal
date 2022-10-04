import React from "react";
import { useState } from "react";
import { AgileAccordian } from "../components/AgileAccordian";

export function AgileFreequentlyAskQuestion() {
  const [selected, setSelected] = useState(false);
  const FrequentlyQuestions = [
    {
      heading: "Why do you charge for the workshop?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "Who is part of the workshop?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "Why should I opt for the workshop?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
  ];
  return (
    <div className="frequently__asked__question">
      <div className="frequently__asked__question__conatiner">
        <div className="frequently__asked__question__conatiner__left">
          <div className="frequently__asked__question__conatiner__left__header">
            <div className="frequently__asked__question__conatiner__left__header__heading">
              Does the workshop commit me to development?
            </div>
            <div className="frequently__asked__question__conatiner__left__header__text">
              We provide Agile Discovery Workshop as an independent service.
              Although it’s a crucial first step for successful development, it
              doesn’t bind you to enter into development with us. However, we
              are confident that our great value addition during the workshop
              will compel you to take the development forward with us.
            </div>
          </div>
          <div className="frequently__asked__question__accordian">
            {FrequentlyQuestions.map((faq, i) => (
              <AgileAccordian
                key={JSON.stringify(faq)}
                index={i}
                heading={faq.heading}
                info={faq.info}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
        <div className="frequently__asked__question__conatiner__right">
          <svg
            width="537"
            height="537"
            viewBox="0 0 537 537"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="268.638"
              cy="268.639"
              r="233.646"
              transform="rotate(78.6594 268.638 268.639)"
              stroke="url(#paint0_linear_68_1552)"
              stroke-opacity="0.1"
              stroke-width="69"
            />
            <defs>
              <linearGradient
                id="paint0_linear_68_1552"
                x1="268.638"
                y1="0.493103"
                x2="268.638"
                y2="536.785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B6B6B6" />
                <stop offset="1" stop-color="#020202" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="frequently__asked__question__conatiner__right__overlay">
            <div className="frequently__asked__question__conatiner__right__overlay__heading">
              Frequently Asked Questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
