import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { endeavor } from "../assets";

export function AboutPressRelease() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    });
  }, []);

  return (
    <div className="about__press__releases">
      <div className="about__press__releases__heading heading">
        Press Releases
      </div>
      <div className="about__press__releases__content">
        <Swiper slidesPerView={slidesPerView}>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={endeavor} alt="endeavor" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
