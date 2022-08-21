import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { testimonialSvg } from "../assets";
import { fetcher } from "../utils/fetcher";

export function HomeTestimonials() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_testimonial`,
    fetcher
  );
  const [seletedData, setSelectedData] = useState([]);

  useEffect(() => {
    data
      ?.filter((item, i) => i === 0)
      ?.map((item) => {
        setSelectedData(item);
      });
  }, [data]);

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
          {data?.map((item, i) => (
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
                defaultChecked={i === 0}
                title={item.image}
                className="home__testmonials__content__users__entry__input"
              />
              <img
                src={import.meta.env.VITE_CLOUDNAIRY_API_URL + item.image}
                alt="user"
                width={100}
                height={100}
                className="home__testmonials__content__users__entry__img"
              />
            </div>
          ))}
        </div>
        <div className="home__testmonials__content__details">
          <div className="home__testmonials__content__details__info">
            {seletedData.content}
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
