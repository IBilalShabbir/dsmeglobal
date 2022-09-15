import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function PortfolioDetailsImages({ data, setShowCarousel }) {
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
        {data.map((item) => (
          <SwiperSlide>
            <div
              className="portfolio__details__images__entry"
              onClick={() => {
                setShowCarousel(true);
              }}
            >
              <img
                loading="lazy"
                src={item.src}
                alt={data.title}
                className="portfolio__details__images__entry__img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
