import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { endeavor } from "../assets";

export function AboutEndeavors() {
  return (
    <div className="about__endeavors">
      <div className="about__endeavors__heading heading">Our Endeavors</div>
      <div className="about__endeavors__content">
        <Swiper>
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
