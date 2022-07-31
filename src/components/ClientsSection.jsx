import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher, replacePngWithWebp } from "../utils/functions";
import useSWR from "swr";
import { Fade, Reveal } from "react-reveal";

export function ClientsSection() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_techonologies`,
    fetcher,
    { suspense: true }
  );
  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 500) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 750) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5);
    }
  }
  useEffect(() => {
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);
  }, []);
  return (
    <div className="container__clients">
      <Fade>
        <div className="container__clients__left">
          <div className="container__clients__left__heading">
            Our <span>Techonologies</span>
          </div>
          <div className="container__clients__left__info">
            We solve business challenges with cutting-edge technology and
            data-driven research.
          </div>
        </div>
      </Fade>
      <div className="container__clients__right">
        {error ? (
          <div>failed to load</div>
        ) : (
          <Swiper slidesPerView={slidesPerView} autoplay>
            {data.map((client) => (
              <SwiperSlide key={JSON.stringify(client)}>
                <div className="container__clients__right__entry">
                  <Reveal>
                    <img
                      loading="lazy"
                      src={
                        import.meta.env.VITE_CLOUDNAIRY_API_URL +
                        replacePngWithWebp(client.icon)
                      }
                      alt={client.icon}
                    />
                  </Reveal>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
