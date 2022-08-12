import React from "react";
import { Fade } from "react-reveal";

import { useNavigate } from "react-router-dom";
import { getText } from "../utils/functions";

export default function BlogsCardContent({ data }) {
  const navigate = useNavigate();

  return (
    <Fade up InUp>
      <button
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 300);
          navigate("/blog-details");
          window.localStorage.setItem("blogsData", JSON.stringify(data));
        }}
        className="blog__card "
      >
        <img
          loading="lazy"
          src={import.meta.env.VITE_CLOUDNAIRY_API_URL + data.image}
          alt={data.title}
          width={200}
          className="blog__card__img"
        />

        <div className="blog__card__content">
          <div className="blog__card__content__heading">{data.title}</div>
          <div className="blog__card__content__info">
            {getText(data.content)?.length < 200
              ? getText(data.content)
              : getText(data.content).substring(0, 200) + "..."}
          </div>
        </div>
      </button>
    </Fade>
  );
}
