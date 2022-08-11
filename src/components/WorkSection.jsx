import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { replacePngWithWebp } from "../utils/functions";
import { Fade } from "react-reveal";

export function WorkSection({ data }) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    data
      ?.filter((item, i) => i === 0)
      ?.map((item) => {
        setProject(item);
      });
  }, [data]);

  return (
    <>
      {
        <div className="work__section">
          <div className="work__section__header">
            Flip through our <span>latest projects</span>
          </div>
          <div className="work__section__content">
            <div className="work__section__content__project">
              <div className="work__section__content__project__image__wrapper">
                <Fade up>
                  <img
                    loading="lazy"
                    src={
                      import.meta.env.VITE_CLOUDNAIRY_API_URL +
                      replacePngWithWebp(project.image)
                    }
                    alt={project.title}
                    width={700}
                    className="work__section__content__project__image"
                  />
                </Fade>
              </div>
              <Fade up>
                <div className="work__section__content__project__about">
                  <div className="work__section__content__project__about__heading">
                    <div className="work__section__content__project__about__heading__top">
                      {project.company}
                    </div>
                    <div className="work__section__content__project__about__heading__bottom">
                      {project.title}
                    </div>
                  </div>
                  <div className="work__section__content__project__about__info">
                    {project.description}
                  </div>
                </div>
              </Fade>
            </div>
            <div className="work__section__content__selection">
              {data?.map((item, i) => (
                <div
                  className="work__section__content__selection__entry"
                  key={JSON.stringify(item)}
                >
                  <input
                    type="radio"
                    name="work__section__content__selection__entry__input"
                    className="work__section__content__selection__entry__input"
                    title={
                      "work__section__content__selection__entry__input" +
                      item.title
                    }
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
                      className="work__section__content__selection__entry__img"
                    />
                  </Fade>
                </div>
              ))}
            </div>
            <Link
              to="/portfolio"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
              className="work__section__content__button"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      }
    </>
  );
}
