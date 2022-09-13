import React, { useEffect, useState } from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../utils/fetcher";
import { Autoplay } from "swiper";
import useSWR from "swr";

export function AboutAchievements() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_award`,
    fetcher
  );
  const [slidesPerView, setSlidesPerView] = useState(3);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
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
            ?.filter((_item, i) => i % 2 !== 0)
            ?.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="about__achievements__awards__content__entry">
                  <img
                    loading="lazy"
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
            ?.filter((_item, i) => i % 2 === 0)
            ?.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="about__achievements__awards__content__entry">
                  <img
                    loading="lazy"
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
