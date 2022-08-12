import React, { useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import { IndustryCard } from "../components/IndustryCard";
import Scrollspy from "react-scrollspy";
import { Fade } from "react-reveal";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img8 from "../assets/iosswift.jpg";
import {
  androidFeatures,
  ServicesAndroidArray,
  whyChooseNativeAndroid,
} from "../constants/data";

export default function ServicesAndroid() {
  const [selected, setSelected] = useState("AR VR");

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Full-service Android application development company"
          info="Choose an experienced partner to transform your business idea into a top-performing custom Android app"
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <div className="ios__mobile__page__section">
        <div className="ios__mobile__page__container">
          <div className="ios__mobile__share__your__idea__section">
            <div className="ios__mobile__share__your__idea__section__left">
              <div className="ios__mobile__share__your__idea__section__left__heading">
                You share your idea, <span> we get it done</span>
              </div>
            </div>
            <div className="ios__mobile__share__your__idea__section__right">
              <div className="ios__mobile__share__your__idea__section__right__text">
                It takes lots of effort, planning and research to create an app
                that succeeds. We want to take the work off your shoulders. Our
                Android team rated number one on Clutch combines in-depth
                research, outstanding design and impeccable development to
                create applications that astound users and bring measurable
                business results. Focus on what’s important to your business,
                and let us do the rest.
              </div>
            </div>
          </div>
          <div className="ios__mobile__share__your__idea__section__buttons__section">
            <div className="ios__mobile__share__your__idea__section__buttons__section__awards">
              <img loading="lazy" src={img1} alt="imgmunber" />
              <img loading="lazy" src={img2} alt="imgmunber" />
              <img loading="lazy" src={img3} alt="imgmunber" />
              <img loading="lazy" src={img4} alt="imgmunber" />
              <img loading="lazy" src={img5} alt="imgmunber" />
              <img loading="lazy" src={img6} alt="imgmunber" />
            </div>
          </div>
        </div>
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
          <Fade up>
            <div className="container__web__dev__experties__header__info">
              Are you struggling to find a solution that fits your expectations
              perfectly? Choose our custom app development services and build
              your app with an Android team rated number one on Clutch. We
              create digital products from scratch, starting with deep market
              research, and studying your needs and business goals carefully to
              offer you a solution that fits like a glove. What is there to
              gain? Excellent design to help you stand out from the competition
              and build a strong brand. Scalability and flexibility that lets
              you adjust your product as your business grows. No all-fits-one
              features, but a product that is tailor-made for you. Development
              schedule and budget adjusted to your business plan. Full
              application support and maintenance. And that’s just to name a
              few!
            </div>
          </Fade>
        </div>
      </div>
      <div className="services__main__container services__main__container__reverse">
        <Scrollspy
          items={androidFeatures?.map((item) =>
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
          {androidFeatures?.map((item, i) => (
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
          {androidFeatures?.map((item, i) => (
            <IndustryCard data={item} key={i} />
          ))}
        </div>
      </div>
      <div className="ios__mobile__page__section">
        <div className="ios__development__tangible">
          <div className="ios__development__tangible__col__one__heading">
            Tangible results, <span>right on schedule</span>
          </div>
          <div className="ios__development__tangible__col__two">
            <button className="ios__development__tangible__col__two__header__middle__button">
              Get a quote
            </button>
          </div>
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
                Why choose native <span>Android app development?</span>
              </div>
            </Fade>
            <Fade up>
              <div className="container__web__dev__experties__header__info">
                Why is it worth building a native application for Android? See
                our reasons to make a well-informed choice.
              </div>
            </Fade>
          </div>
        </div>
        <div className="services__main__container">
          <div className="services__main__container__left">
            {whyChooseNativeAndroid?.map((item, i) => (
              <IndustryCard data={item} key={i} />
            ))}
          </div>
          <Scrollspy
            items={whyChooseNativeAndroid?.map((item) =>
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
            {whyChooseNativeAndroid?.map((item, i) => (
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
        <div className="ios__development__native__ios">
          <div className="ios__development__native__sound__promising">
            <div className="ios__development__native__sound__promising__heading">
              Sounds promising? <span>Let’s discuss your idea! !</span>
            </div>
            <div className="ios__development__native__sound__promising__button">
              Get in Touch
            </div>
          </div>
          <div className="ios__development__native__cross__plat__development">
            <div className="ios__development__native__cross__plat__development__container">
              <div className="ios__development__native__cross__plat__development__container__left">
                <div className="ios__development__native__cross__plat__development__container__heading">
                  Cross-platform <span>development</span>
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Cross-platform application development allows you to create
                  apps that run across multiple device platforms, using just one
                  codebase. If you…
                </div>
                <div className="ios__development__native__cross__plat__development__container__text__li">
                  <li>want to build a uniform application</li>
                  <li>have a limited project budget</li>
                  <li>wish to enter the market fast</li>
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  You should consider our cross-platform development services.
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Learn about Cross-platform development
                </div>
              </div>
              <div className="ios__development__native__cross__plat__development__container__right">
                <img
                  loading="lazy"
                  className="ios__development__native__cross__plat__development__img"
                  src={img8}
                  alt="img8"
                />
              </div>
            </div>
          </div>

          <div className="android__development__our__stack">
            <div className="android__development__our__stack__all">
              <div className="android__development__our__stack__container">
                <div className="android__development__our__stack__container__heading">
                  Our tech <span>stack</span>
                </div>
                <div className="android__development__our__stack__container__col__row">
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Core
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>MVP or MVVM</li>
                      <li>RxJava 3 or Kotlin Coroutines</li>
                      <li>Dagger 2 or Koin</li>
                      <li>Retrofit and Room</li>
                      <li>Glide or Picasso</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      CI/CD
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Fastlane</li>
                      <li>Docker</li>
                      <li>TeamCity</li>
                      <li>Gitlab</li>
                      <li>AWS</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Testing
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Testing</li>
                      <li>Espresso</li>
                      <li>Charles</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Debugging
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>LeakCanary</li>
                      <li>Firebase Crashlytics</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Design
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Sketch</li>
                      <li>InVision</li>
                      <li>InVision</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__emerging__technologies">
            <div className="container__emerging__technologies__heading__main">
              Emerging <span>Technologies</span>
            </div>
            <div className="container__emerging__technologies__text__main">
              We constantly push our limits and explore emerging technologies to
              build a solution that you help our clients stay ahead of the game.
            </div>
            <div className="container__emerging__technologies__section">
              {ServicesAndroidArray?.map((item, i) => (
                <WebdevArrEntry
                  label={item.label}
                  svg={item.svg}
                  selected={selected}
                  setSelected={setSelected}
                  key={i}
                />
              ))}
            </div>
            {ServicesAndroidArray?.filter(
              (item) => item.label === selected
            )?.map((item, i) => (
              <div
                className="container__emerging__technologies__section__entry__data"
                key={i}
              >
                <div className="container__emerging__technologies__section__entry__data___heading">
                  <div className="container__emerging__technologies__section__entry__data___heading__ico">
                    {item.svg}
                  </div>
                  {item.label}
                </div>
                <div className="container__emerging__technologies__section__entry__data__text">
                  {item.info}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
