import React, { useEffect, useState } from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { Link } from "react-router-dom";
import { fetcher } from "../utils/fetcher";
import { Fade } from "react-reveal";
import { workSvg } from "../assets";
import useSWR from "swr";

export function HomeWork() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_work`,
    fetcher
  );
  const [project, setProject] = useState([]);

  useEffect(() => {
    data
      ?.filter((_item, i) => i === 0)
      ?.map((item) => {
        setProject(item);
      });
  }, [data]);
  return (
    <div className="home__work">
      <img
        loading="lazy"
        src={workSvg}
        alt="workSvg"
        className="home__work__svg"
      />
      <Fade bottom distance="30%">
        <div className="home__work__heading heading">
          Flip through our latest projects
        </div>
      </Fade>
      <div className="home__work__item">
        <Fade bottom distance="30%">
          <img
            loading="lazy"
            src={
              data
                ? import.meta.env.VITE_CLOUDNAIRY_API_URL +
                  replacePngWithWebp(project.image)
                : ""
            }
            alt={project.title}
            className="home__work__item__img"
          />
        </Fade>
        <Fade bottom distance="30%">
          <div className="home__work__item__content">
            <div className="home__work__item__content__sub__heading">
              {project.company}
            </div>
            <div className="home__work__item__content__heading">
              {project.title}
            </div>
            <div className="home__work__item__content__info">
              {project.description}
            </div>
          </div>
        </Fade>
      </div>
      <div className="home__work__seletion">
        {data?.map((item, i) => (
          <div className="home__work__seletion__entry" key={item._id}>
            <input
              type="radio"
              name="home__work__seletion__entry"
              className="home__work__seletion__entry__input"
              title={item.title}
              onClick={() => {
                setProject(item);
              }}
              defaultChecked={i === 0 ? true : false}
            />
            <Fade up>
              <img
                loading="lazy"
                src={
                  import.meta.env.VITE_CLOUDNAIRY_API_URL +
                  replacePngWithWebp(item.logo)
                }
                width={200}
                alt={item.title}
                className="home__work__seletion__entry__img"
              />
            </Fade>
          </div>
        ))}
      </div>
      <Link
        to="/portfolio"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        title="View All Projects"
        className="home__work__button"
      >
        View All Projects
      </Link>
    </div>
  );
}
