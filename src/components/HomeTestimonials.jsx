import React, { useEffect, useState } from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { testimonialSvg } from "../assets";
import { fetcher } from "../utils/fetcher";
import { Fade } from "react-reveal";
import useSWR from "swr";

export function HomeTestimonials() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_testimonial`,
    fetcher
  );
  const [seletedData, setSelectedData] = useState([]);

  useEffect(() => {
    data
      ?.filter((_item, i) => i === 0)
      ?.map((item) => {
        setSelectedData(item);
      });
  }, [data]);

  return (
    <div className="home__testmonials">
      <img
        loading="lazy"
        src={testimonialSvg}
        alt="testimonialSvg"
        className="home__testmonials__svg"
      />
      <Fade bottom distance="30%">
        <div className="home__testmonials__heading heading">
          Learn why 1000+ customers trust DSME
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__testmonials__info">
          Hear from our customers to learn what makes DSME the right choice for
          them, and why we're the right partner for your business.
        </div>
      </Fade>
      <div className="home__testmonials__content">
        <div className="home__testmonials__content__users">
          {data?.map((item, i) => (
            <div
              className="home__testmonials__content__users__entry"
              key={item._id}
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
              <Fade bottom distance="30%">
                <img
                  loading="lazy"
                  src={
                    import.meta.env.VITE_CLOUDNAIRY_API_URL +
                    replacePngWithWebp(item.image)
                  }
                  alt="user"
                  width={100}
                  height={100}
                  className="home__testmonials__content__users__entry__img"
                />
              </Fade>
            </div>
          ))}
        </div>
        <div className="home__testmonials__content__details">
          <Fade bottom distance="30%">
            <div className="home__testmonials__content__details__info">
              {seletedData.content}
            </div>
          </Fade>
          <Fade bottom distance="30%">
            <div className="home__testmonials__content__details__heading">
              {seletedData.name}
            </div>
          </Fade>
          <Fade bottom distance="30%">
            <div className="home__testmonials__content__details__sub__heading">
              {seletedData.designation}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
