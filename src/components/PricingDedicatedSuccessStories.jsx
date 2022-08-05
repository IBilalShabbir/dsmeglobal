import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { replacePngWithWebp } from "../utils/functions";

export function PricingDedicatedSuccessStories({ slidesPerView, data }) {
  return (
    <div className="pricing__fitted__team">
      <div
        className="pricing__fitted__team__header"
        id="pricing__success__stories__team__header"
      >
        <div className="pricing__fitted__team__header__heading">
          Success <span>Stories</span>
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper slidesPerView={slidesPerView} autoplay>
          {data.map((item) => (
            <SwiperSlide key={JSON.stringify(item)}>
              <div className="pricing__success__stories__slide">
                <div className="pricing__success__stories__slide__image">
                  <img
                    loading="lazy"
                    src={
                      import.meta.env.VITE_CLOUDNAIRY_API_URL +
                      replacePngWithWebp(item.image)
                    }
                    alt="Story"
                  />
                </div>
                <div className="pricing__success__stories__slide__logo">
                  <img
                    loading="lazy"
                    src={
                      import.meta.env.VITE_CLOUDNAIRY_API_URL +
                      replacePngWithWebp(item.logo)
                    }
                    alt="Brand Logo"
                  />
                </div>
                <div className="pricing__success__stories__slide__info">
                  {item.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
