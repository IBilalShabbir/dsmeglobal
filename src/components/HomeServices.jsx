import React from "react";
import { HomeServicesCard } from "./HomeServicesCard";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  webDevServiceImage,
  staffAugmentationServiceImage,
  startUpServiceImage,
  mobDevServiceImage,
  servicesSvg1,
  servicesSvg2,
} from "../assets";

export function HomeServices() {
  const data = [
    {
      image: webDevServiceImage,
      title: "Web App Development",
      info: "Leveraging the latest technological tools & industry practices, we build high-performance apps to scale your business. Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end-user experience.",
    },
    {
      image: mobDevServiceImage,
      title: "Mobile App Development",
      info: "We believe in developing interactive web applications, to create experiences beyond our clients’ expectations. We create beautifully designed web apps precisely tailored to your situation. From providing Software as a Service to creating custom software to support your customers, our Web App team will get you up and running.",
    },
    {
      image: staffAugmentationServiceImage,
      title: "Staff Augmentation",
      info: "Looking for an extended arm to augment your existing team as per the evolving project needs? We are considered as one of the best staff augmentation firms offering staff augmentation and managed services to scale your internal development teams quickly in minimal time, fulfilling your unique business requirements. Being the most prominent IT staff augmentation company in Pakistan, we ensure to offer 100% 'Peace of Mind' with our top-notch team augmentation solutions.",
    },
    {
      image: startUpServiceImage,
      title: "Startup Services",
      info: "With years of experience, we can help you build things that have never been built before. The launchpad to your rocket fuel. We help entrepreneurs reach new heights.",
    },
  ];
  return (
    <section className="home__services">
      <img
        loading="lazy"
        src={servicesSvg1}
        alt="servicesSvg1"
        className="home__services__svg1"
      />
      <img
        loading="lazy"
        src={servicesSvg2}
        alt="servicesSvg2"
        className="home__services__svg2"
      />
      <Fade bottom distance="30%">
        <div className="home__services__heading heading">
          A complete enterprise designed
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__services__sub__heading heading">
          to modernize your business
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__services__info">
          We excel in providing cutting-edge solutions and development services
          that drive business performance, cultivate startups, and accelerate
          growth.
        </div>
      </Fade>
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
      <Fade bottom distance="30%">
        <Link
          to="/services"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          title="View All Projects"
          className="home__work__button"
        >
          View All Services
        </Link>
      </Fade>
    </section>
  );
}
