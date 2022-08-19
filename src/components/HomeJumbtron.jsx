import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import {
  homeBannerImage,
  homeBannerImage1,
  homeBannerSvg1,
  homeBannerSvg2,
  homeBannerSvg3,
  homeBannerSvg4,
} from "../assets";

export function HomeJumbtron() {
  const scrollRef = useRef(null);
  const data = [
    {
      image: homeBannerImage,
    },
    {
      image: homeBannerImage1,
    },
    {
      image: homeBannerImage1,
    },
  ];
  // useScrollSnap({ ref: scrollRef });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1 < data.length ? index + 1 : 0);
    }, 4800);
  }, [index]);

  return (
    <section ref={scrollRef} className="home__jumbotron">
      <img
        src={homeBannerSvg1}
        alt="homeBannerSvg1"
        className="home__jumbotron__svg1"
      />
      <img
        src={homeBannerSvg2}
        alt="homeBannerSvg2"
        className="home__jumbotron__svg2"
      />
      <img
        src={homeBannerSvg3}
        alt="homeBannerSvg3"
        className="home__jumbotron__svg3"
      />
      <img
        src={homeBannerSvg4}
        alt="homeBannerSvg4"
        className="home__jumbotron__svg4"
      />

      <div className="home__jumbotron__content">
        <div className="home__jumbotron__content__left">
          <div className="home__jumbotron__content__left__heading heading">
            Quality{" "}
            <span>
              <Typewriter
                loop
                cursor
                words={["Products", "Customizations", "Services"]}
              />
            </span>{" "}
            <br /> You Really{" "}
            <span>
              <Typewriter loop cursor words={["Need", "Deserve", "Want"]} />
            </span>
          </div>
          <div className="home__jumbotron__content__left__info">
            Whether you want to modernize your application portfolio broadly,
            pursue specific opportunities in your industry, or optimize a single
            technology, DSME brings together all the services with leading
            back-office and industry-specific SaaS.
          </div>
          <NavLink
            to="/quote"
            className="home__jumbotron__content__left__button"
          >
            Get a quote
          </NavLink>
        </div>
        <div className="home__jumbotron__content__right">
          <img
            src={data
              .filter((item, i) => i === index)
              .map((item, index) => item.image)}
            alt="homeBannerImage"
            className="home__jumbotron__content__right__img"
          />
        </div>
      </div>
    </section>
  );
}
