import React, { lazy, Suspense, useState } from "react";
import { withStyles } from "react-critical-css";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import stylesheet from "./App.scss";

const MeetUs = lazy(() => import("./screens/MeetUs"));
const NotFound = lazy(() => import("./screens/NotFound"));
const Quote = lazy(() => import("./screens/Quote"));
const Services = lazy(() => import("./screens/Services"));
const Industries = lazy(() => import("./screens/Industries"));
const Careers = lazy(() => import("./screens/Careers"));
const CareersBanner = lazy(() => import("./screens/CareersBanner"));
const Blog = lazy(() => import("./screens/Blog"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const About = lazy(() => import("./screens/About"));

function App() {
  const [isContact, setIsContact] = useState(true);
  return (
    <Suspense
      fallback={
        <div
          style={{
            backgroundColor: "#181818",
            height: "100vh",
            width: "100vw",
          }}
        />
      }
    >
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route
          path="/career"
          element={<CareersBanner setIsContact={setIsContact} />}
        />
        <Route path="/vacancies" element={<Careers />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/quote" element={<Quote setIsContact={setIsContact} />} />
        <Route path="*" element={<NotFound setIsContact={setIsContact} />} />
      </Routes>
      {isContact ? <Contact /> : null}
      <Footer />
    </Suspense>
  );
}
export default withStyles(stylesheet)(App);
