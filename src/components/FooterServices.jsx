import React from "react";
import { Link } from "react-router-dom";

export function FooterServices({ data }) {
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">Services</div>
      {data?.map((item) => (
        <Link
          onClick={() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }}
          to={
            "/services/" +
            item?.title
              .trim()
              .replaceAll(" ", "-")
              .replaceAll("-&-", "-")
              .replaceAll(".", "")
              .replaceAll("/", "-")
              .toLowerCase()
          }
          key={JSON.stringify(item)}
          className="footer__container__content__col__link"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
