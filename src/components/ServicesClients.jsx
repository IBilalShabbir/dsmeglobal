import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export function ServicesClients({ isAndroid, description }) {
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
    <div className="androidios__clients">
      <div className="androidios__clients__content">
        <div className="androidios__clients__content__heading heading">
          You share your idea, we get it done
        </div>
        <div className="androidios__clients__content__info">{description}</div>
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
        {isAndroid ? (
          <div className="androidios__clients__content__slogan">
            <div className="androidios__clients__content__slogan__left heading">
              <svg
                width="123"
                height="145"
                viewBox="0 0 123 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1766 126.191C13.7395 117.999 12.64 109.077 16.1229 99.3205C18.9093 91.4798 23.5601 84.7897 29.0304 78.7059C42.2383 64.0304 57.939 53.172 76.9178 47.4672C77.9436 47.0807 79.0123 46.8216 80.1002 46.6955C81.1647 46.5975 82.2331 46.8334 83.1597 47.3711C84.0862 47.9088 84.8256 48.7219 85.2769 49.6995C86.3969 52.0007 85.9598 54.1917 84.43 56.1553C83.1256 57.8571 81.1861 58.5047 79.2739 59.2144C59.8785 66.4694 43.4062 77.817 31.2431 94.8902C24.8645 103.847 20.6303 113.679 21.402 125.089C21.3565 125.462 21.2812 125.83 21.1766 126.191Z"
                  fill="#2ECC82"
                />
                <path
                  d="M40.1879 138.836C31.1322 133.324 28.3526 123.361 32.8668 112.93C36.5683 104.379 42.6806 97.7031 49.5373 91.6813C62.7384 80.0994 77.5854 71.5698 94.7066 67.3945C97.4793 66.7055 100.17 67.8906 101.058 70.1504C101.946 72.4103 100.996 75.0905 98.1007 76.3513C94.8022 77.7707 91.2714 78.6319 87.9182 79.941C71.0497 86.5002 56.5032 96.2976 45.8699 111.324C41.5674 117.415 38.4942 124.071 38.6308 131.836C38.6718 134.233 39.505 136.431 40.1879 138.836Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M5.49749 102.621C2.12379 93.8016 2.69746 85.6371 6.24189 77.6035C10.4283 68.0954 17.3601 60.7989 25.0089 54.1089C29.5844 50.195 34.4045 46.5818 39.4393 43.2918C41.3033 41.9346 43.57 41.259 45.8657 41.3763C46.5878 41.3875 47.2946 41.5876 47.917 41.9568C48.5395 42.3261 49.0563 42.852 49.4169 43.4832C49.7775 44.1143 49.9696 44.8291 49.9745 45.5576C49.9793 46.286 49.7966 47.0034 49.4443 47.6393C48.5975 49.41 47.1087 50.4986 45.5311 51.532C33.7846 59.2005 23.4382 68.3848 15.482 80.0769C11.0907 86.5052 7.58727 93.3606 6.13262 101.139C5.95707 101.648 5.74479 102.143 5.49749 102.621Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M81.8369 143.499C77.8554 144.629 73.8807 144.987 69.9197 143.602C65.6923 142.121 63.9167 138.993 64.9274 134.645C66.3616 128.444 70.4455 123.945 74.9256 119.901C83.6193 112.067 93.5902 106.472 105.009 103.758C109.141 102.773 113.327 102.332 117.527 103.413C118.106 103.519 118.667 103.707 119.193 103.971C120.887 104.991 122.731 106.128 122.137 108.484C121.563 110.724 119.617 111.523 117.541 111.185C112.048 110.193 106.393 110.685 101.15 112.611C90.9062 116.463 81.83 121.968 75.1987 130.966C74.5551 131.859 74.0101 132.82 73.5734 133.832C71.2309 139.151 73.2729 142.713 78.9959 143.34C79.911 143.45 80.8808 143.45 81.8369 143.499Z"
                  fill="#2ECC82"
                />
                <path
                  d="M63.0106 144.957C59.9636 145.087 56.9161 144.712 53.9891 143.848C50.0417 142.684 47.9519 139.714 47.6514 135.539C47.2963 130.592 48.7305 126.114 51.0661 121.883C56.6115 111.858 64.8614 104.521 74.2517 98.3817C77.0586 96.5421 79.7767 97.0037 81.204 99.2084C82.6313 101.413 81.9552 104.404 79.2235 106.236C72.2097 110.956 65.7902 116.289 60.8594 123.282C59.3659 125.346 58.1532 127.603 57.2535 129.993C54.7266 136.869 56.2564 141.147 63.0106 144.957Z"
                  fill="#2ECC82"
                />
                <path
                  d="M83.4943 132.303C83.2212 135.218 84.9763 135.39 86.9636 135.197C89.3842 134.885 91.7337 134.156 93.9091 133.04C98.8877 130.684 103.62 127.914 107.247 123.601C109.507 120.914 109.152 119.833 105.512 118.978C107.438 118.847 108.927 118.386 110.552 118.668C113.202 119.137 113.967 120.473 112.861 123.009C111.754 125.544 109.897 127.356 107.896 129.044C101.817 134.163 95.0906 138.049 87.2095 139.579C86.7168 139.693 86.2172 139.773 85.7139 139.82C84.1636 139.882 82.5724 139.82 81.6163 138.394C80.5714 136.851 81.6163 135.486 82.2992 134.163C82.668 133.516 83.1119 132.916 83.4943 132.303Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M14.5195 37.3807C19.0022 30.5539 24.9317 24.8166 31.8797 20.5831C32.394 20.2949 32.9491 20.0881 33.5256 19.9699C34.0037 19.8597 34.6183 19.7632 34.9461 20.2041C35.1129 20.4543 35.1782 20.7596 35.1287 21.057C35.0791 21.3543 34.9185 21.6212 34.6798 21.8026C34.0089 22.5659 33.263 23.2585 32.4534 23.8696C26.394 27.7186 20.6626 32.0697 15.3186 36.8777C15.0682 37.0699 14.8007 37.2383 14.5195 37.3807Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M0.820312 76.7769C1.22324 74.9993 3.16278 69.4874 12.5668 58.567C14.479 56.2703 16.4709 54.077 18.5425 51.9871C28.1514 42.3412 39.4266 34.8382 51.8219 28.7613C53.0742 28.2605 54.2299 27.5422 55.2365 26.6391C56.8551 24.9649 57.5995 23.0702 56.4248 20.8723C55.3731 18.8811 53.2355 18.2335 50.6745 19.4254C36.4149 26.0397 22.8791 33.8254 12.2731 45.8138C6.88477 51.8975 3.21741 58.9045 1.8652 66.9519C1.71496 68.0198 1.18226 72.0367 0.922749 74.9925C0.919916 75.5887 0.885725 76.1843 0.820312 76.7769Z"
                  fill="#2ECC82"
                />
                <path
                  d="M0 58.6173C0.0409761 58.406 0.075129 58.1924 0.102446 57.9766C0.0510159 58.187 0.0167484 58.4012 0 58.6173Z"
                  fill="white"
                />
              </svg>
              What makes DSME Global Links a top Android development company?
            </div>
            <div className="androidios__clients__content__slogan__right">
              Are you struggling to find a solution that fits your expectations
              perfectly? Choose our custom app development services and build
              your app with an Android team rated number one on Clutch. We
              create digital products from scratch, starting with deep market
              research, and studying your needs and business goals carefully to
              offer you a solution that fits like a glove. What is there to
              gain? Excellent design to help you stand out from the competition
              and build a strong brand. Scalability and flexibility that lets
              you adjust your product as your business grows. No all-fits-one
              features, but a product that is tailor-made for you. Development
              schedule and budget adjusted to your business plan. Full
              application support and maintenance. And that’s just to name a
              few!
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
