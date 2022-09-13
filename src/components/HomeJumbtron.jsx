import React, { useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  homeBannerImage,
  homeBannerImage1,
  homeBannerSvg1,
  homeBannerSvg2,
  homeBannerSvg3,
  homeBannerSvg4,
} from "../assets";

export function HomeJumbtron() {
  const data = [homeBannerImage, homeBannerImage1];
  const [index, setIndex] = useState(0);
  useMemo(() => {
    setTimeout(() => {
      setIndex(index + 1 < data.length ? index + 1 : 0);
    }, 4000);
  }, [index]);

  return (
    <section className="home__jumbotron">
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
        <Fade bottom distance="30%">
          <div className="home__jumbotron__content__left">
            <div className="home__jumbotron__content__left__heading heading">
              Quality{" "}
              <span>
                <Typewriter loop cursor words={["Products", "Services"]} />
              </span>{" "}
              <br /> You Really{" "}
              <span>
                <Typewriter loop cursor words={["Need", "Want"]} />
              </span>
            </div>
            <div className="home__jumbotron__content__left__info">
              Whether you want to modernize your application portfolio broadly,
              pursue specific opportunities in your industry, or optimize a
              single technology, DSME brings together all the services with
              leading back-office and industry-specific SaaS.
            </div>
            <Link
              to="/quote"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              title="Get a quote"
              className="home__jumbotron__content__left__button"
            >
              Get a quote
            </Link>
          </div>
        </Fade>
        <div className="home__jumbotron__content__right">
          <Fade spy={index} duration={2000} appear>
            <img
              src={data.filter((_item, i) => i === index).map((item) => item)}
              alt="homeBannerImage"
              className="home__jumbotron__content__right__img"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}
