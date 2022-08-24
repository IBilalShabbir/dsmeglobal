import React from "react";
import Scrollspy from "react-scrollspy";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import { Fade } from "react-reveal";
import { serviceSidebarSvg } from "../assets";
import { ServiceCard } from "./ServiceCard";

export function ServicesContent() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher
  );
  return (
    <>
      <div className="services__heading heading">Our Services</div>
      <div className="services__content">
        {data?.length > 0 ? (
          <Scrollspy
            items={data?.map((item) =>
              item.title
                .trim()
                .replaceAll(" ", "-")
                .replaceAll("-&-", "-")
                .replaceAll(".", "")
                .replaceAll("/", "-")
                .toLowerCase()
            )}
            offset={-200}
            currentClassName="active"
            className="services__content__sidebar"
          >
            {data?.map((item) => (
              <li
                className="services__content__sidebar__link"
                key={JSON.stringify(item)}
              >
                <Fade up>
                  <a
                    href={
                      "#" +
                      item.title
                        .trim()
                        .replaceAll(" ", "-")
                        .replaceAll("-&-", "-")
                        .replaceAll(".", "")
                        .replaceAll("/", "-")
                        .toLowerCase()
                    }
                  >
                    {item.title}
                  </a>
                </Fade>
              </li>
            ))}
            <img
              src={serviceSidebarSvg}
              alt="serviceSidebarSvg"
              className="services__content__sidebar__svg"
            />
          </Scrollspy>
        ) : null}
        <div className="services__content__main">
          {data?.map((item, i) => (
            <ServiceCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
}
