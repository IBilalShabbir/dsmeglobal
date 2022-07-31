import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronsRight } from "react-feather";
export default function ServicesSectionCard({ data }) {
  function onClick() {
    window.localStorage.setItem(
      "servicesData",
      JSON.stringify(
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/" + data.image
      )
    );
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  console.log();
  return (
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
        src={
          "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
          data.image
        }
        alt={data.title}
        className="services__main__container__content__wrapper__card__svg"
      />

      <div className="services__main__container__content__wrapper__card__content">
        <div className="services__main__container__content__wrapper__card__heading">
          {data.title
            .trim()
            .split(" ")
            .map((word, i) => (i == 1 ? <span>{word}</span> : word))}
        </div>
        <div className="services__main__container__content__wrapper__card__info">
          {data.description}
        </div>
        <Link
          onClick={onClick}
          to={data.title
            .trim()
            .replaceAll(" ", "-")
            .replaceAll("-&-", "-")
            .replaceAll(".", "")
            .replaceAll("/", "-")
            .toLowerCase()}
          className="services__main__container__content__wrapper__card__link"
        >
          Learn more <ChevronRight size={20} color="currentColor" />
        </Link>
      </div>
    </section>
  );
}
