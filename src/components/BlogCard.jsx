import React from "react";
import { useNavigate } from "react-router-dom";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";

export function BlogCard({ item, filter, isPortfolio }) {
  const navigate = useNavigate();
  let category;
  item.categories.map((item) => {
    category = item.label;
  });
  let isAnyMatch = category?.includes(filter);
  return isAnyMatch ? (
    <button
      className="home__blog__content__entry"
      style={isPortfolio ? { height: 380 } : null}
      onClick={() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
        if (isPortfolio) {
          navigate("/portfolio-details");
          window.localStorage.setItem("portfolioData", JSON.stringify(item));
        } else {
          navigate("/blog-details");
          window.localStorage.setItem("blogsData", JSON.stringify(item));
        }
      }}
      title={item.title}
    >
      <img
        loading="lazy"
        src={
          import.meta.env.VITE_CLOUDNAIRY_API_URL +
          replacePngWithWebp(item.image)
        }
        alt={item.title}
        className="home__blog__content__entry__img"
      />
      <div
        className={
          isPortfolio
            ? "home__blog__content__entry__content home__blog__content__entry__content__reverse"
            : "home__blog__content__entry__content"
        }
      >
        <div className="home__blog__content__entry__content__heading">
          {item.title}
        </div>
        {isPortfolio ? (
          <div className="home__blog__content__entry__content__info">
            {item.description.length > 400
              ? item.description.substring(0, 400) + "..."
              : item.description}
          </div>
        ) : null}
      </div>
    </button>
  ) : null;
}
