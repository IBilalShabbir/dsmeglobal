import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Tangibleresultsrightonschedule } from "../components/Tangibleresultsrightonschedule";
import { Youshareyourideawegetitdone } from "../components/Youshareyourideawegetitdone";
import { IndustryCard } from "../components/IndustryCard";
import Scrollspy from "react-scrollspy";
import { Fade } from "react-reveal";
import { iosFeatures, whyChooseNative } from "../constants/data";

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
      </div>
      <div
        className="container__web__dev__experties services__startup__second__expertise"
        style={{
          marginBottom: "0em",
          marginTop: "4em",
        }}
      >
        <div
          className="container__web__dev__experties__header services__startup__third__header"
          style={{ marginBottom: "0em" }}
        >
          <Fade up>
            <div className="container__web__dev__experties__header__heading">
              What makes DSME Global Links a top{" "}
              <span>Android development company?</span>
            </div>
          </Fade>
        </div>
      </div>
      <div className="services__main__container services__main__container__reverse">
        <Scrollspy
          items={iosFeatures?.map((item) =>
            item.title
              .trim()
              .replaceAll(" ", "-")
              .replaceAll("-&-", "-")
              .replaceAll(".", "")
              .replaceAll("/", "-")
              .toLowerCase()
          )}
          offset={-100}
          currentClassName="active"
          className="services__main__container__right"
        >
          {iosFeatures?.map((item, i) => (
            <li className="services__main__container__right__link">
              <Fade up key={i}>
                <a
                  href={
                    "#" +
                    item.title
                      .trim()
                      .replaceAll(" ", "-")
                      .replaceAll("-&-", "-")
                      .replaceAll(".", "")
                      .replaceAll("/", "-")
                      .toLowerCase()
                  }
                >
                  {item.title}
                </a>
              </Fade>
            </li>
          ))}
        </Scrollspy>
        <div className="services__main__container__left">
          {iosFeatures?.map((item, i) => (
            <IndustryCard data={item} key={i} />
          ))}
        </div>
      </div>

      <div className="ios__mobile__page__section">
        <Tangibleresultsrightonschedule />
      </div>
      <div
        className="container__web__dev__experties"
        style={{
          marginBottom: "0em",
          marginTop: "4em",
        }}
      >
        <div
          className="container__web__dev__experties__header services__startup__third__header"
          style={{ marginBottom: "-4em" }}
        >
          <Fade up>
            <div className="container__web__dev__experties__header__heading">
              Why choose native <span>iOS app development?</span>
            </div>
          </Fade>
          <Fade up>
            <div className="container__web__dev__experties__header__info">
              What are the pros of building a native application for iOS? See
              our list and make sure your choice is well-informed.
            </div>
          </Fade>
        </div>
      </div>
      <div className="services__main__container">
        <div className="services__main__container__left">
          {whyChooseNative?.map((item, i) => (
            <IndustryCard data={item} key={i} />
          ))}
        </div>
        <Scrollspy
          items={whyChooseNative?.map((item) =>
            item.title
              .trim()
              .replaceAll(" ", "-")
              .replaceAll("-&-", "-")
              .replaceAll(".", "")
              .replaceAll("/", "-")
              .toLowerCase()
          )}
          offset={-100}
          currentClassName="active"
          className="services__main__container__right"
        >
          {whyChooseNative?.map((item, i) => (
            <li className="services__main__container__right__link">
              <Fade up key={i}>
                <a
                  href={
                    "#" +
                    item.title
                      .trim()
                      .replaceAll(" ", "-")
                      .replaceAll("-&-", "-")
                      .replaceAll(".", "")
                      .replaceAll("/", "-")
                      .toLowerCase()
                  }
                >
                  {item.title}
                </a>
              </Fade>
            </li>
          ))}
        </Scrollspy>
      </div>
      <div
        className="ios__mobile__page__section"
        style={{
          backgroundColor: "#242424",
          padding: "3em 0em",
          marginTop: "4em",
        }}
      >
        <div className="ios__development__native__ios">
          <div className="ios__development__native__sound__promising">
            <div
              className="ios__development__native__sound__promising__heading"
              style={{ color: "white" }}
            >
              Sound promising? Let’s talk about your idea!
            </div>
            <div className="ios__development__native__sound__promising__button">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
