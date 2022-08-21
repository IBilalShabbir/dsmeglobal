import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";

export function AboutAchievements() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_award`,
    fetcher
  );
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1000) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1300) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    });
  }, []);
  return (
    <div className="about__achievements__awards">
      <div className="about__achievements__awards__heading heading">
        Awards & Achievements
      </div>
      <div className="about__achievements__awards__info">
        We are proud to be recognized as a top service provider by these
        platforms.
      </div>
      <div className="about__achievements__awards__content">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            waitForTransition: true,
          }}
        >
          {data
            ?.filter((item, i) => i % 2 !== 0)
            ?.map((item) => (
              <SwiperSlide>
                <div className="about__achievements__awards__content__entry">
                  <img
                    src={
                      import.meta.env.VITE_CLOUDNAIRY_API_URL +
                      replacePngWithWebp(item.image)
                    }
                    alt="endeavor"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          style={{ marginTop: "2em" }}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            reverseDirection: true,
            waitForTransition: true,
          }}
        >
          {data
            ?.filter((item, i) => i % 2 === 0)
            ?.map((item) => (
              <SwiperSlide>
                <div className="about__achievements__awards__content__entry">
                  <img
                    src={
                      import.meta.env.VITE_CLOUDNAIRY_API_URL +
                      replacePngWithWebp(item.image)
                    }
                    alt="endeavor"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
