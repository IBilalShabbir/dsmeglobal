import React from "react";
import { useNavigate } from "react-router-dom";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";

export function BlogCard({ item, filter }) {
  const navigate = useNavigate();
  let category;
  item.categories.map((item) => {
    category = item.label;
  });
  let isAnyMatch = category?.includes(filter);
  return isAnyMatch ? (
    <button
      className="home__blog__content__entry"
      onClick={() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
        navigate("/blog-details");
        window.localStorage.setItem("blogsData", JSON.stringify(item));
      }}
      title={item.title}
    >
      <img
        src={
          import.meta.env.VITE_CLOUDNAIRY_API_URL +
          replacePngWithWebp(item.image)
        }
        alt={item.title}
        className="home__blog__content__entry__img"
      />
      <div className="home__blog__content__entry__content">
        <div className="home__blog__content__entry__content__heading">
          {item.title}
        </div>
      </div>
    </button>
  ) : null;
}
