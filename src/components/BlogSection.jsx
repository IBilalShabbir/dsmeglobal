import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getText, replacePngWithWebp } from "../utils/functions";
import { Fade } from "react-reveal";

export function BlogSection({ data }) {
  const navigate = useNavigate();

  return (
    <div className="blog__section">
      <div className="blog__section__heading">
        Thirsty for tech & business tips? <span> Check out our blog!</span>
      </div>
      <div className="blog__section__content">
        {data
          ?.filter((blog, i) => i < 3)
          ?.map((blog) => (
            <Fade up key={JSON.stringify(blog)}>
              <button
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                  navigate("/blog-details");
                  window.localStorage.setItem(
                    "blogsData",
                    JSON.stringify(blog)
                  );
                }}
                className="blog__card"
              >
                <img
                  loading="lazy"
                  src={
                    import.meta.env.VITE_CLOUDNAIRY_API_URL +
                    replacePngWithWebp(blog.image)
                  }
                  alt={blog.title}
                  width={200}
                  className="blog__card__img"
                />

                <div className="blog__card__content">
                  <Fade up>
                    <div className="blog__card__content__heading">
                      {blog.title}
                    </div>
                    <div className="blog__card__content__info">
                      {getText(blog.content).length < 260
                        ? getText(blog.content)
                        : getText(blog.content).substring(0, 260) + "..."}
                    </div>
                  </Fade>
                </div>
              </button>
            </Fade>
          ))}
      </div>
      <div className="blog__section__link__wrapper">
        <Link
          to="/blog"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="blog__section__link"
        >
          Load more
        </Link>
      </div>
    </div>
  );
}
