import React from "react";

export default function ProjectCardContent({
  image,
  url,
  title,
  setShowImage,
  setShowImageData,
}) {
  return (
    <div className="service__details__projects__entry animate__animated animate__zoomIn">
      <img
        src={"https://res.cloudinary.com/mehfoozurrehman/image/upload/" + image}
        alt="projectImg"
        className="service__details__projects__entry__img"
      />
      <div className="service__details__projects__entry__content">
        <div className="service__details__projects__entry__content__heading">
          {title}
        </div>
        <div
          className="service__details__projects__entry__content__button__row"
          style={url === "" ? { justifyContent: "center" } : null}
        >
          <button
            className="service__details__projects__entry__content__button"
            onClick={() => {
              setShowImage(true);
              setShowImageData({
                image:
                  "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                  image,
                title: title,
              });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-maximize-2"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          {url !== "" ? (
            <a
              href={url}
              className="service__details__projects__entry__content__button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
