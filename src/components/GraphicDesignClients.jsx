import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { startupPackages } from "../assets";

export function GraphicDesignClients() {
  const [slidesPerView, setSlidesPerView] = useState(7);
  function changeSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 600) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 800) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(5);
    } else if (window.innerWidth < 1400) {
      setSlidesPerView(6);
    } else {
      setSlidesPerView(7);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="androidios__clients__content">
      <img
        src={startupPackages}
        alt="startupPackages"
        className="androidios__clients__content__img"
      />
      <div className="androidios__clients__content__heading androidios__clients__content__heading__reverse heading">
        SMALL BUSINESS START-UP PACKAGES
      </div>
      <div className="androidios__clients__content__info">
        If you have a brand new business these are the best options for you. We
        know you’re excited to present yourself in a professional way so we’ve
        put these packages to give you just what you need AND save your money.
      </div>
      <div className="androidios__clients__content__logos">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          style={{
            marginTop: "2em",
          }}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            reverseDirection: true,
            waitForTransition: true,
          }}
        >
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/210483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/310483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/110483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/410483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/110483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/610483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://dsmeglobals.web.app/610483.webp"
              alt="logo"
              className="androidios__clients__content__logos__logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
