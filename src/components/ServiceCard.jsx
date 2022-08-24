import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export function ServiceCard({ item }) {
  function onClick() {
    window.localStorage.setItem(
      "servicesData",
      JSON.stringify(import.meta.env.VITE_CLOUDNAIRY_API_URL + item.image)
    );
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <section
      className="services__content__main__card__wrapper"
      id={item.title
        .trim()
        .replaceAll(" ", "-")
        .replaceAll("-&-", "-")
        .replaceAll(".", "")
        .replaceAll("/", "-")
        .toLowerCase()}
    >
      <Fade up>
        <div className="services__content__main__card">
          <img
            src={
              import.meta.env.VITE_CLOUDNAIRY_API_URL.replace("q_50", "q_100") +
              item.image
            }
            alt={item.title}
            className="services__content__main__card__img"
          />
          <div className="services__content__main__card__content">
            <div className="services__content__main__card__content__heading heading">
              {item.title}
            </div>
            <div className="services__content__main__card__content__info">
              {item.description.length > 150
                ? item.description.substring(0, 150) + "..."
                : item.description}
            </div>
            <Link
              onClick={onClick}
              to={item.title
                .trim()
                .replaceAll(" ", "-")
                .replaceAll("-&-", "-")
                .replaceAll(".", "")
                .replaceAll("/", "-")
                .toLowerCase()}
              className="services__content__main__card__content__link"
            >
              Learn more
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  );
}
