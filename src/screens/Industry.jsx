import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Fade } from "react-reveal";
import Scrollspy from "react-scrollspy";
import { IndustryCard } from "../components/IndustryCard";
import { industriesFeatures } from "../constants/data";
import industries from "../assets/industry.svg";

export default function Industry() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="From startup to enterprise, the full range of engineering services your company needs"
          info="Choose a software development partner that knows the realities of your business. We foster innovation across various industries, from healthcare, retail, insurance, e-commerce, recruitment, food, real estate, and travel to entertainment."
          img={industries}
          talk={true}
        />
      </div>
      <div
        className="container__web__dev__experties services__startup__second__expertise"
        style={{
          marginBottom: "0em",
          marginTop: "4em",
        }}
      >
        <div className="container__web__dev__experties__header services__startup__third__header">
          <Fade up>
            <div className="container__web__dev__experties__header__heading">
              Software solutions for
              <span> industry leaders</span>
            </div>
          </Fade>
          <Fade up>
            <div className="container__web__dev__experties__header__info">
              Need a software solution that’s right for you? Choose a digital
              product crafted to answer the challenges of your industry. Small
              or big, startup, or enterprise – we partner with companies of
              various sizes and profiles on their way to innovation and growth.
              Empower your business with a state-of-the-art digital solution,
              tailored to your needs and expectations. Revolutionizing the way
              business is conducted across industries with the latest technology
              introductions. Healthcare
            </div>
          </Fade>
        </div>
      </div>
      <div className="services__main__container services__main__container__reverse">
        <Scrollspy
          items={industriesFeatures?.map((item) =>
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
          {industriesFeatures?.map((item) => (
            <li className="services__main__container__right__link">
              <Fade up key={JSON.stringify(item)}>
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
          {industriesFeatures?.map((item) => (
            <IndustryCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(13, 110, 74, 0.1)", marginTop: "7em" }}>
        <div className="tangible_results">
          <div className="tangible_results_left">
            <div className="tangible_results_left_heading">
              Tangible results, <span>right on schedule</span>
            </div>
            <div className="tangible_results_left_para">
              Engineering teams today need to move and scale fast. DSME Global
              Links injects momentum into your engineering department with
              high-performing, and excellent teams of developers.
            </div>
          </div>
          <div className="tangible_results_right">
            <div className="tangible_results_right_contant">
              <div className="tangible_results_right_icon"></div>
              <div className="tangible_results_right_sub_heading">2</div>
              <div className="tangible_results_right_para">
                weeks for the prototype
              </div>
            </div>
            <div className="tangible_results_right_contant">
              <div className="tangible_results_right_icon"></div>
              <div className="tangible_results_right_sub_heading">3</div>
              <div className="tangible_results_right_para">
                months for the MVP
              </div>
            </div>
            <div className="tangible_results_right_contant">
              <div className="tangible_results_right_icon"></div>
              <div className="tangible_results_right_sub_heading">30%</div>
              <div className="tangible_results_right_para">
                More efficient staffing
              </div>
            </div>
            <div className="tangible_results_right_contant">
              <div className="tangible_results_right_icon"></div>
              <div className="tangible_results_right_sub_heading">60%</div>
              <div className="tangible_results_right_para">Lower risk</div>
            </div>
            <div className="tangible_results_right_contant">
              <div className="tangible_results_right_icon"></div>
              <div className="tangible_results_right_sub_heading">3.6x</div>
              <div className="tangible_results_right_para">
                Higher project Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
