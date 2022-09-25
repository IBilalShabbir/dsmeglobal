import React, { lazy, Suspense, useState } from "react";
import { withStyles } from "react-critical-css";
import { Route, Routes } from "react-router";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Loader } from "./screens/Loader";

import stylesheet from "./App.scss";
import AgileDiscoveryWorkshop from "./screens/AgileDiscoveryWorkshop";

const Home = lazy(() => import("./screens/Home"));
const Blog = lazy(() => import("./screens/Blog"));
const About = lazy(() => import("./screens/About"));
const Quote = lazy(() => import("./screens/Quote"));
const MeetUs = lazy(() => import("./screens/MeetUs"));
const Careers = lazy(() => import("./screens/Careers"));
const NotFound = lazy(() => import("./screens/NotFound"));
const Services = lazy(() => import("./screens/Services"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const Ecommerce = lazy(() => import("./screens/Ecommerce"));
const UIUXDesign = lazy(() => import("./screens/UIUXDesign"));
const FixedPrice = lazy(() => import("./screens/FixedPrice"));
const Industries = lazy(() => import("./screens/Industries"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const WebScraping = lazy(() => import("./screens/WebScraping"));
const ApplyForJob = lazy(() => import("./screens/ApplyForJob"));
const GraphicDesign = lazy(() => import("./screens/GraphicDesign"));
const CareerDetails = lazy(() => import("./screens/CareerDetails"));
const CareersBanner = lazy(() => import("./screens/CareersBanner"));
const IOSDevelopment = lazy(() => import("./screens/IOSDevelopment"));
const DedicatedTeams = lazy(() => import("./screens/DedicatedTeams"));
const WebDevelopment = lazy(() => import("./screens/WebDevelopment"));
const CustomSoftware = lazy(() => import("./screens/CustomSoftware"));
const StartupServices = lazy(() => import("./screens/StartupServices"));
const PortfolioDetails = lazy(() => import("./screens/PortfolioDetails"));
const MobileDevelopment = lazy(() => import("./screens/MobileDevelopment"));
const AndroidDevelopment = lazy(() => import("./screens/AndroidDevelopment"));
const BlockchainConsulting = lazy(() =>
  import("./screens/BlockchainConsulting")
);

function App() {
  const [isContact, setIsContact] = useState(true);
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileDevelopment />}
        />
        <Route
          path="/services/web-app-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/services/custom-software-development"
          element={<CustomSoftware />}
        />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route
          path="/services/blockchain-consulting"
          element={<BlockchainConsulting />}
        />
        <Route
          path="/services/android-development"
          element={<AndroidDevelopment />}
        />
        <Route path="/services/ios-development" element={<IOSDevelopment />} />
        <Route path="/services/web-scraping" element={<WebScraping />} />
        <Route
          path="/services/startup-services"
          element={<StartupServices />}
        />
        <Route path="/services/graphic-designing" element={<GraphicDesign />} />
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
        <Route
          path="/agile-discovery-workshop"
          element={<AgileDiscoveryWorkshop />}
        />
        <Route path="/quote" element={<Quote setIsContact={setIsContact} />} />
        <Route
          path="/apply-for-job"
          element={<ApplyForJob setIsContact={setIsContact} />}
        />
        <Route path="*" element={<NotFound setIsContact={setIsContact} />} />
      </Routes>
      {isContact ? <Contact /> : null}
      <Footer />
    </Suspense>
  );
}
export default withStyles(stylesheet)(App);
