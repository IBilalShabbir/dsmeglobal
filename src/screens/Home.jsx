import React from "react";
import { HomeServices } from "./HomeServices";
import { HomeJumbtron } from "./HomeJumbtron";
import { HomeStats } from "./HomeStats";
import { HomeWork } from "./HomeWork";
import { HomeTechnologies } from "./HomeTechnologies";
import { HomeEngagement } from "./HomeEngagement";
import { HomeDevelopmentProcess } from "./HomeDevelopmentProcess";
import { HomeOurTechnologies } from "./HomeOurTechnologies";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
      <HomeWork />
      <HomeTechnologies />
      <HomeEngagement />
      <HomeDevelopmentProcess />
      <HomeOurTechnologies />
      <div className="home__testmonials">
        <div className="home__testmonials__heading">
          Learn why 1000+ customers trust DSME
        </div>
        <div className="home__testmonials__info">
          Hear from our customers to learn what makes DSME the right choice for
          them, and why we're the right partner for your business.
        </div>
        <div className="home__testmonials__content">
          <div className="home__testmonials__content__users">
            <button className="home__testmonials__content__users__entry">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="user"
                className="home__testmonials__content__users__entry__img"
              />
            </button>
          </div>
          <div className="home__testmonials__content__details">
            <div className="home__testmonials__content__details__info"></div>
            <div className="home__testmonials__content__details__heading"></div>
            <div className="home__testmonials__content__details__sub__heading"></div>
          </div>
        </div>
      </div>
    </>
  );
}
