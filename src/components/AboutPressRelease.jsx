import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function AboutPressRelease() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_press_release`,
    fetcher
  );
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
          {data?.map((item) => (
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_CLOUDNAIRY_API_URL + item.image}
                alt="press"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
