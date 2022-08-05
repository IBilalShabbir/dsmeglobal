import React from "react";
import HotOfferJobCard from "../components/HotOfferJobCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";

export function CareersViewOpenings({
  slidesPerPage,
  data,
  setIsApplyOpen,
  setSelectedItem,
}) {
  return (
    <div className="hot__offers__section__wrapper">
      <section id="job__section" className="hot__offers__section">
        <Fade up>
          <div className="hot__offers__section__header"> View Openings </div>
        </Fade>
        <div className="hot__offers__section__content">
          {
            <Swiper slidesPerView={slidesPerPage} spaceBetween={30}>
              {data?.map((item) => (
                <SwiperSlide key={JSON.stringify(item)}>
                  <HotOfferJobCard
                    item={item}
                    onApply={() => {
                      setIsApplyOpen(true);
                      setSelectedItem(item);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      </section>
    </div>
  );
}
