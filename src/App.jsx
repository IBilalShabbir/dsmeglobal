import React from "react";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import "./App.scss";
import "swiper/scss";
import "swiper/scss/autoplay";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}
