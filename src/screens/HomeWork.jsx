import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetcher } from "../utils/fetcher";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import useSWR from "swr";
import { Fade } from "react-reveal";
import { workSvg } from "../assets";

export function HomeWork() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_work`,
    fetcher
  );
  const [project, setProject] = useState([]);

  useEffect(() => {
    data
      ?.filter((item, i) => i === 0)
      ?.map((item) => {
        setProject(item);
      });
  }, [data]);
  return (
    <div className="home__work">
      <img src={workSvg} alt="workSvg" className="home__work__svg" />
      <div className="home__work__heading heading">
        Flip through our latest projects
      </div>
      <div className="home__work__item">
        <img
          src={
            import.meta.env.VITE_CLOUDNAIRY_API_URL +
            replacePngWithWebp(project.image)
          }
          alt={project.title}
          className="home__work__item__img"
        />
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
      </div>
      <div className="home__work__seletion">
        {data?.map((item, i) => (
          <div
            className="home__work__seletion__entry"
            key={JSON.stringify(item)}
          >
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
                src={import.meta.env.VITE_CLOUDNAIRY_API_URL + item.logo}
                width={200}
                alt={item.title}
                className="home__work__seletion__entry__img"
              />
            </Fade>
          </div>
        ))}
      </div>
      <NavLink to="/portfolio" className="home__work__button">
        View All Projects
      </NavLink>
    </div>
  );
}
