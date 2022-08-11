import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";

export function Youshareyourideawegetitdone() {
  return (
    <div className="ios__mobile__page__container">
      <div className="ios__mobile__share__your__idea__section">
        <div className="ios__mobile__share__your__idea__section__left">
          <div className="ios__mobile__share__your__idea__section__left__heading">
            You share your idea, <span>we get it done</span>
          </div>
        </div>
        <div className="ios__mobile__share__your__idea__section__right">
          <div className="ios__mobile__share__your__idea__section__right__text">
            How can you ensure your iOS app turns into a great success? Trust an
            experienced partner that takes the development effort off your
            hands, and let us create a solution that will astound your users and
            bring measurable business results. While you can focus on your
            business, we combine in-depth research, outstanding design, and
            impeccable development to create an exceptional iOS application that
            fits your needs.
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
  );
}
