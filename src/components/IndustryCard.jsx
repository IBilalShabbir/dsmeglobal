import React from "react";
import industries from "../assets/industry.svg";
import { Fade } from "react-reveal";

export function IndustryCard({ data }) {
  return (
    <Fade up>
      <section
        id={data.title
          .trim()
          .replaceAll(" ", "-")
          .replaceAll("-&-", "-")
          .replaceAll(".", "")
          .replaceAll("/", "-")
          .toLowerCase()}
        className="services__main__container__content__wrapper__card"
      >
        <img
          loading="lazy"
          src={data.image ? data.image : industries}
          alt={data.title}
          className="services__main__container__content__wrapper__card__svg"
        />

        <div className="services__main__container__content__wrapper__card__content">
          <div className="services__main__container__content__wrapper__card__heading">
            {data.title
              .trim()
              .split(" ")
              ?.map((word, i) =>
                i == 1 ? <span key={JSON.stringify(word)}>{word}</span> : word
              )}
          </div>
          <div className="services__main__container__content__wrapper__card__info">
            {data.content}
          </div>
        </div>
      </section>
    </Fade>
  );
}
