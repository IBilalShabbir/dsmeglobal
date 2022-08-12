import React, { useState } from "react";
import { Fade } from "react-reveal";
import testimonialBg from "../assets/testimonialBg.webp";
import { TestimonialsSectionArray } from "../constants/data";

export function TestimonialsSection() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="container__testimonials">
      <div className="container__testimonials__overlay__heading">
        Learn why more than 1000+ customers trust DSME
        <span>
          Innovation, ease of use, better results—those are just some of the
          reasons organizations in all industries and of all sizes rely on DSME
          to help them succeed. Hear from our customers to learn what makes DSME
          the right choice for them, and why we're the right partner for your
          business.
        </span>
      </div>

      <img
        loading="lazy"
        src={testimonialBg}
        alt="testimonialBg"
        className="container__testimonials__img"
        id="container__testimonials__img"
      />
      <div className="container__testimonials__overlay">
        <div
          className="container__testimonials__overlay__content"
          id="container__testimonials__overlay__content"
        >
          {TestimonialsSectionArray?.map((item, i) => (
            <Fade up key={JSON.stringify(item)}>
              <button
                className={
                  selected === i
                    ? "container__testimonials__overlay__content__entry container__testimonials__overlay__content__entry__active"
                    : "container__testimonials__overlay__content__entry"
                }
                onClick={() => {
                  setSelected(i);
                }}
              >
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                  className="container__testimonials__overlay__content__entry__img"
                />
              </button>
            </Fade>
          ))}
        </div>
      </div>
      {TestimonialsSectionArray?.filter((item, i) => i === selected)?.map(
        (item, i) => (
          <div className="container__testimonials__overlay__info" key={i}>
            <Fade up>
              <div className="container__testimonials__overlay__info__message">
                {item.message}
              </div>
              <div className="container__testimonials__overlay__info__heading">
                {item.name}
              </div>
              <div className="container__testimonials__overlay__info__sub__heading">
                {item.designation}
              </div>
            </Fade>
          </div>
        )
      )}
    </div>
  );
}
