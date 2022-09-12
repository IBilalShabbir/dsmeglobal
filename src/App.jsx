import React, { useState } from "react";
import { withStyles } from "react-critical-css";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import stylesheet from "./App.scss";
import MeetUs from "./screens/MeetUs";
import NotFound from "./screens/NotFound";
import Quote from "./screens/Quote";
import Services from "./screens/Services";
import Industries from "./screens/Industries";
import Careers from "./screens/Careers";
import CareersBanner from "./screens/CareersBanner";
import Blog from "./screens/Blog";
import About from "./screens/About";
import BlogDetails from "./screens/BlogDetails";
import Portfolio from "./screens/Portfolio";
import PortfolioDetails from "./screens/PortfolioDetails";
import DedicatedTeams from "./screens/DedicatedTeams";
import FixedPrice from "./screens/FixedPrice";
import CareerDetails from "./screens/CareerDetails";
import MobileDevelopment from "./screens/MobileDevelopment";

function App() {
  const [isContact, setIsContact] = useState(true);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileDevelopment />}
        />
        <Route path="/industries" element={<Industries />} />
        <Route
          path="/career"
          element={<CareersBanner setIsContact={setIsContact} />}
        />
        <Route path="/vacancies" element={<Careers />} />
        <Route path="/vacancies-details" element={<CareerDetails />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route path="/dedicated-teams" element={<DedicatedTeams />} />
        <Route path="/fixed-price" element={<FixedPrice />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio-details"
          element={<PortfolioDetails setIsContact={setIsContact} />}
        />
        <Route path="/quote" element={<Quote setIsContact={setIsContact} />} />
        <Route path="*" element={<NotFound setIsContact={setIsContact} />} />
      </Routes>
      {isContact ? <Contact /> : null}
      <Footer />
    </>
  );
}
export default withStyles(stylesheet)(App);
