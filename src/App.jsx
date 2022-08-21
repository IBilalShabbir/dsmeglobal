import React from "react";
import { Route, Routes, topbar } from "react-router-loading";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import "./App.scss";
import "swiper/scss";
import "swiper/scss/autoplay";

topbar.config({
  autoRun: false,
  barThickness: 3,
  barColors: {
    0: "#2ecc82",
    0.3: "#2ecc82",
    1.0: "#2ecc82",
  },
  shadowBlur: 5,
  shadowColor: "transparent",
  className: "topbar",
});

export default function App() {
  return (
    <>
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} loading />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}
