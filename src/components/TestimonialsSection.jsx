import React, { useState } from "react";
import { Fade } from "react-reveal";
import testimonialBg from "../assets/testimonialBg.webp";

export function TestimonialsSection() {
  const array = [
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Fahad Ayyaz",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Bilal Shabbir",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Mehfooz",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Asim Rasheed",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Arslan",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
  ];
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
          {array?.map((item, i) => (
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
      {array
        ?.filter((item, i) => i === selected)
        ?.map((item) => (
          <div
            className="container__testimonials__overlay__info"
            key={JSON.stringify(item)}
          >
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
        ))}
    </div>
  );
}
