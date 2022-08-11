import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export function ServicesCard({ data }) {
  function onClick() {
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={onClick}
      to={
        "/services/" +
        data?.title
          .trim()
          .replaceAll(" ", "-")
          .replaceAll("-&-", "-")
          .replaceAll(".", "")
          .replaceAll("/", "-")
          .toLowerCase()
      }
      className="container__services__right__entry"
    >
      <Fade up>
        <div className="container__services__right__entry__icon">
          <img
            loading="lazy"
            src={import.meta.env.VITE_CLOUDNAIRY_API_URL + data.logo}
            width={70}
            height={70}
            alt={data.title}
          />
        </div>
        <div className="container__services__right__entry__heading">
          {data.title}
        </div>
        <div className="container__services__right__entry__info">
          {data.shortDescription.substring(0, 70) + "..."}
        </div>
      </Fade>
    </Link>
  );
}
