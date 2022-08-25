import React from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import DOMPurify from "dompurify";
import { parseDate } from "../utils/parseDate";

export default function BlogDetails() {
  const data = JSON.parse(window.localStorage.getItem("blogsData"));
  return (
    <>
      <div
        style={{ width: "100%", height: "6em", backgroundColor: "#242424" }}
      />
      <div className="blog__details__banner">
        <img
          src={
            import.meta.env.VITE_CLOUDNAIRY_API_URL.replace("q_50", "q_150") +
            replacePngWithWebp(data.image)
          }
          alt={data.title}
          className="blog__details__banner__img"
        />
        <div className="blog__details__banner__overlay">
          <div className="blog__details__banner__overlay__heading heading">
            {data.title}
          </div>
          <div className="blog__details__banner__overlay__info">
            By {data.author} -{parseDate(data.createdAt)}
          </div>
        </div>
      </div>
      <div
        className="blog__details__content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.content),
        }}
      />
    </>
  );
}
