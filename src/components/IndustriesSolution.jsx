import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ecommerce,
  entertainment,
  finTech,
  healthcare,
  insurance,
  others,
  realEstate,
  retail,
  transport,
} from "../assets";
import { IndustrySolutionCard } from "./IndustrySolutionCard";

export function IndustriesSolution() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1.2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2.5);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(3.5);
    } else {
      setSlidesPerView(4.5);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="industries__solutions">
      <div className="industries__solutions__heading heading">
        Software solutions for industry leaders
      </div>
      <div className="industries__solutions__info">
        Need a software solution that’s right for you? Choose a digital product
        crafted to answer the challenges of your industry. Small or big,
        startup, or enterprise – we partner with companies of various sizes and
        profiles on their way to innovation and growth. Empower your business
        with a state-of-the-art digital solution, tailored to your needs and
        expectations. Revolutionizing the way business is conducted across
        industries with the latest technology introductions. Healthcare
      </div>
      <div className="industries__solutions__content">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          style={{
            marginTop: "2em",
          }}
          loop
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          speed={2500}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <IndustrySolutionCard
              image={insurance}
              title="Insurance"
              info="We create personalized products for insurance companies to assist them with risk inspections, document/claim management, and retention."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={healthcare}
              title="Healthcare"
              info="We bring easy healthcare to the masses, by building tech solutions that enable practices, improve patient experiences, and streamline workflows."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={realEstate}
              title="Real Estate"
              info="Make real estate transactions more profitable with our fully automated sales process and property management solutions."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={retail}
              title="Retail"
              info="We build bespoke retail apps to better manage warehouse operations, ease the stock ordering process and enhance the consumer purchase experience."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={entertainment}
              title="Food & Entertainment"
              info="Stay ahead of market trends with our data-driven and analytics-powered food & entertainment applications and development services."
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          style={{
            marginTop: "2em",
          }}
          loop
          modules={[Autoplay, FreeMode]}
          speed={2500}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          <SwiperSlide>
            <IndustrySolutionCard
              image={insurance}
              title="Insurance"
              info="We create personalized products for insurance companies to assist them with risk inspections, document/claim management, and retention."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={transport}
              title="Logistics & Transport"
              info="Simplify complex and highly challenging logistics and transportation processes with our custom-designed apps and software integrations."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={finTech}
              title="FinTech"
              info="With the aim of making financial services more accessible, we provide Fintech services like mobile banking, investment banking, and BLE technology."
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={ecommerce}
              title="Ecommerce"
              info="Custom e-commerce solutions for businesses of all shapes and sizes Regardless of your industry or whether you want to target B2B or B2C customers, the software we create for you promises to benefit in its operations and delivery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySolutionCard
              image={others}
              title="Others"
              info="None of the above applies to you? We believe that the rules are simple when it comes to technology and business. No matter the industry, we focus on personalized, user-oriented solutions, crafted to help you reach your long-term goals."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
