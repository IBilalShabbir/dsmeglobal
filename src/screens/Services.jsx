import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesSectionCard";
import servicesbanner from "../assets/servicesbanner.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import useSWR from "swr";
import { fetcher } from "../utils/functions";
import { Fade } from "react-reveal";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  console.log(data);
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="From startup to enterprise, the full range of engineering services your company needs"
          info="We provide you end to end software development and consultancy services resulting in extraordinary digital experiences."
          img={servicesbanner}
          talk={true}
        />
      </div>
      <div className="services__main__container">
        <div className="services__main__container__left">
          {data.map((item) => (
            <ServicesCard data={item} key={JSON.stringify(item)} />
          ))}
        </div>
        <div className="services__main__container__right">
          {data.map((item) => (
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
                className="services__main__container__right__link"
              >
                {item.title}
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}
