import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { WhychoosenativeiOSappdevelopment } from "../components/WhychoosenativeiOSappdevelopment";
import { Tangibleresultsrightonschedule } from "../components/Tangibleresultsrightonschedule";
import { Youshareyourideawegetitdone } from "../components/Youshareyourideawegetitdone";

export default function ServicesIos() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Industry-leading iOS app development company"
          info="Explore new business destinations, accelerate growth, and captivate your customers with a custom iOS application"
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <div className="ios__mobile__page__section">
        <Youshareyourideawegetitdone />
        <Tangibleresultsrightonschedule />
        <WhychoosenativeiOSappdevelopment />
      </div>
    </>
  );
}
