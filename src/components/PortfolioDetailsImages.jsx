import React, { useEffect, useState } from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { Swiper, SwiperSlide } from "swiper/react";

export function PortfolioDetailsImages({ data }) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="portfolio__details__images">
      <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
        <SwiperSlide>
          <a
            href={
              import.meta.env.VITE_CLOUDNAIRY_API_URL +
              replacePngWithWebp(data.image)
            }
            className="portfolio__details__images__entry"
          >
            <img
              src={
                import.meta.env.VITE_CLOUDNAIRY_API_URL +
                replacePngWithWebp(data.image)
              }
              alt={data.title}
              className="portfolio__details__images__entry__img"
            />
          </a>
        </SwiperSlide>
        {data.sliderImage.map((item) => (
          <SwiperSlide>
            <a
              href={
                import.meta.env.VITE_CLOUDNAIRY_API_URL +
                replacePngWithWebp(item)
              }
              className="portfolio__details__images__entry"
            >
              <img
                src={
                  import.meta.env.VITE_CLOUDNAIRY_API_URL +
                  replacePngWithWebp(item)
                }
                alt={data.title}
                className="portfolio__details__images__entry__img"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
