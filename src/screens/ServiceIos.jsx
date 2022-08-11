import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Tangibleresultsrightonschedule } from "../components/Tangibleresultsrightonschedule";
import { Youshareyourideawegetitdone } from "../components/Youshareyourideawegetitdone";
import { IndustryCard } from "../components/IndustryCard";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import industries from "../assets/industry.svg";

export default function ServicesIos() {
  const iosFeatures = [
    {
      image: industries,
      title: "One-stop iOS development agency",
      content:
        "It takes lots of effort, planning, and research to create a mobile app that succeeds. Choose our all-in-one iOS services to make sure that both your strategy and your digital product are flawless. We take good care of your project from start to finish by beginning with in-depth research, a data-based strategy, and outstanding product design. Then, we combine foolproof development and maintenance for the excellent stability and performance of your app.",
    },
    {
      image: industries,
      title: "Swift dashboard",
      content:
        "If you are researching iPhone app development, you’ve probably heard of Swift. It’s a powerful, intuitive programming language, created and supported by Apple, and used to build applications for iOS. Although older applications were often written in ObjC, Swift is the go-to choice for new applications, as a faster, more secure, and future-proof choice. With each case, our developers choose the stack carefully to deliver top-notch applications, made to fit specific business needs.",
    },
    {
      image: industries,
      title: "iOS applications recognized worldwide",
      content:
        "With over 10 years of work in iOS application development, you can be sure that you are not putting your project in inexperienced hands. Working with world-renowned brands worldwide such as AIDApro, Vinvi, SeeVitals, Friendly Face, BFS, or Catering, we’ve gained hands-on experience in combining business objectives with cutting-edge mobile solutions.",
    },
    {
      image: industries,
      title: "Cross-platform options",
      content:
        "If you’re thinking about building an app for both Android and iOS, you will face a crucial decision. Should you develop two native apps, or just one that will work on both platforms? We’re here to make sure you choose the right approach! If you pick cross-platform over native Android application development, we can take care of that, too. Our team excels in building apps with the two most popular cross-platform frameworks: Flutter and React Native : Flutter and react Native",
    },
  ];
  const whyChooseNative = [
    {
      image: industries,
      title: "Impressive performance",
      content: (
        <>
          If application speed and top-notch performance are your priorities,
          you should go for native development. Native iOS apps tend to run
          faster than cross-platform ones, as they are written in Swift, which
          is supported by the platform’s ecosystem
        </>
      ),
    },
    {
      image: industries,
      title: "Platform-specific features",
      content: (
        <>
          Are you planning to equip your app with functions like biometrics,
          geolocation, or features based on a Bluetooth connection? If so, it’s
          better to develop a native iOS application. These are what we call
          native application features, and they usually are more difficult to
          develop for cross-platform. Even seemingly simple functionalities tend
          to perform better within native applications.
        </>
      ),
    },
    {
      image: industries,
      title: "Dependability and support",
      content: (
        <>
          As Swift is a more mature language than any of the cross-platform
          ones, it is more dependable when it comes to community support or
          available development resources. They are also less prone to dynamic
          changes. Also, note that Swift is officially supported by Apple. It is
          in their best interest to keep the language up-to-date and dependable
          in terms of maintenance and development.
        </>
      ),
    },
    {
      image: industries,
      title: "Future-proof and scalable",
      content: (
        <>
          Thinking about a product that you can expand over the years? Native
          iOS development will be a safe bet here. As a mature, well-supported
          language, Swift is less likely to change as dynamically as
          cross-platform frameworks. Also, note that native apps are faster to
          scale, implement changes, and add new features into, as there is only
          one platform that needs to be configured. Keep that in mind if you’re
          expecting your iOS app to grow rapidly or change in the future.
        </>
      ),
    },
    {
      image: industries,
      title: "In-house transfer options",
      content: (
        <>
          If you plan to transfer the project to in-house in the future, it’s a
          good idea to go for native iOS development. It might be more
          challenging to find skilled cross-platform developers, while building
          your own team of native iOS developers shouldn’t pose a big challenge.
        </>
      ),
    },
    {
      image: industries,
      title: "Excellent UX/UI",
      content: (
        <>
          Native iOS development results in a better app experience for your
          users. As native applications are written with only one platform in
          mind, there is no need to compromise on the user interface to work
          well on both platforms. Remember that when it comes to iOS native
          development, it’s easier and faster to develop certain
          platform-specific features that may affect the UX, such as widgets or
          app clips. Also, keep in mind that smooth and fast performance of a
          native application makes the user experience more satisfying.
        </>
      ),
    },
  ];
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
