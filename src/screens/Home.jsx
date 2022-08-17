import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  homeBannerImage,
  homeBannerSvg1,
  homeBannerSvg2,
  homeBannerSvg3,
  homeBannerSvg4,
  webDevServiceImage,
  staffAugmentationServiceImage,
  startUpServiceImage,
  mobDevServiceImage,
  servicesSvg1,
  servicesSvg2,
  statsSvg,
} from "../assets";
import useScrollSnap from "react-use-scroll-snap";
import { HomeServicesCard } from "../components/HomeServicesCard";
import { useIsInViewport } from "../utils/useIsInViewport";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
    </>
  );
}

function HomeJumbtron() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef });
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
            Quality <span>Products</span> <br /> You Really <span>Need</span>
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
            src={homeBannerImage}
            alt="homeBannerImage"
            className="home__jumbotron__content__right__img"
          />
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef });
  const data = [
    {
      image: webDevServiceImage,
      title: "Web App Development",
      info: "Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet.",
    },
    {
      image: mobDevServiceImage,
      title: "Mobile App Development",
      info: "Custom built mobile applications with amazing experiences that help support your business goals.",
    },
    {
      image: staffAugmentationServiceImage,
      title: "Staff Augmentation",
      info: "Get The Best IT Talent Under One Roof. Leverage our IT staff augmentation services to access certified IT professionals, including skilled software developers, business analysts, Scrum Masters, and QA specialists. We can help you scale up on demand with the right pool of talented individuals without stretching your budget.",
    },
    {
      image: startUpServiceImage,
      title: "Startup Services",
      info: "Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet.",
    },
  ];
  return (
    <section ref={scrollRef} className="home__services">
      <img
        src={servicesSvg1}
        alt="servicesSvg1"
        className="home__services__svg1"
      />
      <img
        src={servicesSvg2}
        alt="servicesSvg2"
        className="home__services__svg2"
      />
      <div className="home__services__heading heading">
        A complete enterprise designed
      </div>
      <div className="home__services__sub__heading heading">
        to modernize your business
      </div>
      <div className="home__services__info">
        We excel in providing cutting-edge solutions and development services
        that drive business performance, cultivate startups, and accelerate
        growth.
      </div>
      <div className="home__services__content">
        {data?.map((item, index) => (
          <HomeServicesCard
            key={index}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
      <NavLink to="/services" className="home__services__button">
        View all services
      </NavLink>
    </section>
  );
}

function HomeStats() {
  const ref = useRef(null);
  useIsInViewport(ref);
  return (
    <section className="home__stats" ref={ref}>
      <img src={statsSvg} alt="statsSvg" className="home__stats__svg" />
      <div className="home__stats__content">
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={10} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Years In Remote Software Development
          </div>
        </div>
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={150} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Digital Solutions Delivered
          </div>
        </div>
        <div className="home__stats__content__entry">
          <div className="home__stats__content__entry__heading">
            <CountUp end={200} redraw={true} duration={1} />+
          </div>
          <div className="home__stats__content__entry__content">
            Experts On Board
          </div>
        </div>
      </div>
    </section>
  );
}
