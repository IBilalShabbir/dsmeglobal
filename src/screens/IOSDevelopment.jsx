import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { IOSFeatures } from "../components/IOSFeatures";
import { ServicesClients } from "../components/ServicesClients";
import { blockChainGetStarted, servicesGetQuoteSvg } from "../assets";
import { Link } from "react-router-dom";
import { IOSWhyChoose } from "../components/IOSWhyChoose";

export default function IOSDevelopment() {
  return (
    <>
      <Jumbotron
        heading="INDUSTRY-LEADING IOS APP DEVELOPMENT COMPANY"
        description="Explore new business destinations, accelerate growth, and captivate your customers with a custom iOS application"
      />
      <ServicesClients description="How can you ensure your iOS app turns into a great success? Trust an experienced partner that takes the development effort off your hands, and let us create a solution that will astound your users and bring measurable business results. While you can focus on your business, we combine in-depth research, outstanding design, and impeccable development to create an exceptional iOS application that fits your needs." />
      <IOSFeatures />
      <div className="services__get__quote">
        <img
          src={servicesGetQuoteSvg}
          alt="servicesGetQuoteSvg"
          className="services__get__quote__svg"
        />
        <div className="services__get__quote__content">
          <div className="services__get__quote__content__heading heading">
            Tangible results, right on schedule
          </div>
          <Link to="/quote" className="services__get__quote__content__link">
            Get a quote
          </Link>
        </div>
      </div>
      <IOSWhyChoose />
      <div
        className="blockchain__get__started"
        style={{ margin: "5em 0em", marginTop: "12em", marginBottom: "0em" }}
      >
        <img
          src={blockChainGetStarted}
          alt="blockChainGetStarted"
          className="blockchain__get__started__svg"
        />
        <div className="blockchain__get__started__heading heading">
          Sounds promising? Let’s discuss your idea!
        </div>
        <Link to="/quote" className="blockchain__get__started__link">
          Let’s work together
        </Link>
      </div>
    </>
  );
}
