import React, { useEffect } from "react";
import { PortfolioDetailsAbout } from "../components/PortfolioDetailsAbout";
import { PortfolioDetailsImages } from "../components/PortfolioDetailsImages";
import { PortfolioDetailsJumbotron } from "../components/PortfolioDetailsJumbotron";
import { PortfolioDetailsQuote } from "../components/PortfolioDetailsQuote";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { X } from "react-feather";

export default function PortfolioDetails({ setIsContact }) {
  const [showCarousel, setShowCarousel] = React.useState(false);
  const data = JSON.parse(window.localStorage.getItem("portfolioData"));
  useEffect(() => {
    setIsContact(false);

    return () => {
      setIsContact(true);
    };
  }, []);

  let images = data.sliderImage.map((item) => ({
    src: import.meta.env.VITE_CLOUDNAIRY_API_URL + replacePngWithWebp(item),
  }));

  images.push({
    src:
      import.meta.env.VITE_CLOUDNAIRY_API_URL + replacePngWithWebp(data.image),
  });

  return (
    <>
      <div style={{ height: "6em", background: "#181818" }} />
      <PortfolioDetailsJumbotron data={data} />
      <PortfolioDetailsAbout data={data} />
      {/* <PortfolioDetailsQuote data={data} /> */}
      <PortfolioDetailsImages data={images} setShowCarousel={setShowCarousel} />
      {showCarousel ? (
        <>
          <button
            style={{
              position: "fixed",
              top: 10,
              right: 10,
              zIndex: 9999,
              backgroundColor: "rgba(255,255,255,.8)",
              width: 35,
              height: 35,
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setShowCarousel(false)}
          >
            <X size={20} color="currentColor" />
          </button>
          <Carousel
            images={images}
            style={{
              height: "100vh",
              width: "100%",
              zIndex: 9990,
              position: "fixed",
              top: 0,
              left: 0,
            }}
            canAutoPlay={false}
            maxIcon={() => null}
            shouldLazyLoad
            hasTransition
          />
        </>
      ) : null}
    </>
  );
}
