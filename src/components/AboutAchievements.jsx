import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { endeavor } from "../assets";

export function AboutAchievements() {
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
        <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__achievements__awards__content__entry">
              <img src={endeavor} alt="endeavor" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
