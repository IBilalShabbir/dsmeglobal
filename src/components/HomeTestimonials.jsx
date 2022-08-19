import React, { useEffect, useState } from "react";
import { testimonialSvg } from "../assets";

export function HomeTestimonials({}) {
  const [seletedData, setSelectedData] = useState([]);
  const data = [
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Fahad Ayyaz",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Bilal Shabbir",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Mehfooz",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Asim Rasheed",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Arslan",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
  ];
  useEffect(() => {
    data
      .filter((item, i) => i === 0)
      .map((item) => {
        setSelectedData(item);
      });
  }, []);

  return (
    <div className="home__testmonials">
      <img
        src={testimonialSvg}
        alt="testimonialSvg"
        className="home__testmonials__svg"
      />
      <div className="home__testmonials__heading heading">
        Learn why 1000+ customers trust DSME
      </div>
      <div className="home__testmonials__info">
        Hear from our customers to learn what makes DSME the right choice for
        them, and why we're the right partner for your business.
      </div>
      <div className="home__testmonials__content">
        <div className="home__testmonials__content__users">
          {data.map((item, i) => (
            <div
              className="home__testmonials__content__users__entry"
              key={i}
              onClick={() => {
                setSelectedData(item);
              }}
            >
              <input
                type="radio"
                name="home__testmonials__content__users"
                className="home__testmonials__content__users__entry__input"
              />
              <img
                src={item.img}
                alt="user"
                className="home__testmonials__content__users__entry__img"
              />
            </div>
          ))}
        </div>
        <div className="home__testmonials__content__details">
          <div className="home__testmonials__content__details__info">
            {seletedData.message}
          </div>
          <div className="home__testmonials__content__details__heading">
            {seletedData.name}
          </div>
          <div className="home__testmonials__content__details__sub__heading">
            {seletedData.designation}
          </div>
        </div>
      </div>
    </div>
  );
}
