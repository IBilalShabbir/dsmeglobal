import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useNavigate } from "react-router-dom";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";

export function HomeBlog({}) {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher
  );
  const navigate = useNavigate();
  return (
    <div className="home__blog">
      <div className="home__blog__heading heading">
        Thirsty for tech & business tips? Check out our blog!
      </div>
      <div className="home__blog__content">
        {data
          ?.filter((blog, i) => i < 3)
          ?.map((item) => (
            <button
              className="home__blog__content__entry"
              key={item._id}
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
          ))}
      </div>
    </div>
  );
}
