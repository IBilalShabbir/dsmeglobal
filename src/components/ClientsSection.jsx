import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { replacePngWithWebp } from "../utils/functions";
import { Fade, Reveal } from "react-reveal";

export function ClientsSection({ data }) {
  const [slidesPerView, setSlidesPerView] = useState(4);

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
      <Fade up>
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
      </div>
    </div>
  );
}
