import React, { Suspense, useState } from "react";
import { withStyles } from "react-critical-css";
import SwiperCore, { Autoplay } from "swiper";
import { Route, Routes } from "react-router";
import { fetcher } from "./utils/functions";
import Loader from "./components/Loader";
import style from "./App.scss";
import useSWR from "swr";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUsBottom from "./components/ContactUsBottom";

import Home from "./screens/Home";
import Services from "./screens/Services";
import AboutUs from "./screens/AboutUs";
import Blogs from "./screens/Blogs";
import Careers from "./screens/Careers";
import Industry from "./screens/Industry";
import ServiceCustomSoft from "./screens/ServiceCustomSoft";
import ServiceBlockChain from "./screens/ServiceBlockChain";
import ServiceEcomerece from "./screens/ServiceEcomerece";
import ServicesWebDev from "./screens/ServicesWebDev";
import ServiceIos from "./screens/ServiceIos";
import ServiceStaff from "./screens/ServiceStaff";
import ServiceStartup from "./screens/ServiceStartup";
import ServiceAndroid from "./screens/ServiceAndroid";
import Portfolio from "./screens/Portfolio";
import PortfolioDetail from "./screens/PortfolioDetail";
import ServiceUIUX from "./screens/ServiceUIUX";
import ServiceMobDev from "./screens/ServiceMobDev";
import QuoteScreen from "./screens/QuoteScreen";
import MeetUs from "./screens/MeetUs";
import ContactUs from "./screens/ContactUs";
import Pricing from "./screens/Pricing";
import PricingDedicated from "./screens/PricingDedicated";
import BlogDetails from "./screens/BlogDetails";
import ServiceWebScraping from "./screens/ServiceWebScraping";
import DiscoveryWorkshop from "./screens/DiscoveryWorkshop";
import GraphicDesign from "./screens/GraphicDesign";

function App() {
  const [lightHeader, setLightHeader] = useState(false);
  const [noShowContactUs, setNoShowContactUs] = useState(true);
  SwiperCore.use([Autoplay]);

  const { data: ServiceData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  const { data: SuccessStoriesData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_success_stories`,
    fetcher,
    { suspense: true }
  );
  const { data: BlogData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher,
    { suspense: true }
  );

  const { data: CategoryData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_category`,
    fetcher,
    { suspense: true }
  );
  const { data: PortfolioData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_project`,
    fetcher,
    { suspense: true }
  );
  const { data: CareerData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_careers`,
    fetcher,
    { suspense: true }
  );
  const { data: WorkData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_work`,
    fetcher,
    { suspense: true }
  );
  const { data: TechnologiesData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_techonologies`,
    fetcher,
    { suspense: true }
  );

  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <Header light={lightHeader} />
      <Routes maxLoadingTime={500}>
        <Route
          path="/"
          element={
            <Home
              setLightHeader={setLightHeader}
              BlogData={BlogData}
              WorkData={WorkData}
              TechnologiesData={TechnologiesData}
            />
          }
        />
        <Route path="/services" element={<Services data={ServiceData} />} />
        <Route
          path="/services/web-app-development"
          element={<ServicesWebDev />}
        />
        <Route path="/services/ui-ux-design" element={<ServiceUIUX />} />
        <Route
          path="/services/mobile-app-development"
          element={<ServiceMobDev />}
        />
        <Route
          path="/services/blockchain-consulting"
          element={<ServiceBlockChain />}
        />
        <Route
          path="/services/custom-software-development"
          element={<ServiceCustomSoft />}
        />
        <Route path="/services/ios-development" element={<ServiceIos />} />
        <Route path="/services/web-scraping" element={<ServiceWebScraping />} />
        <Route
          path="/services/android-development"
          element={<ServiceAndroid />}
        />
        <Route path="/services/ecomerce" element={<ServiceEcomerece />} />
        <Route path="/services/startup-services" element={<ServiceStartup />} />
        <Route path="/services/staff-augmentation" element={<ServiceStaff />} />
        <Route
          path="/services/agile-discovery-workshop"
          element={<DiscoveryWorkshop />}
        />
        <Route path="/services/graphic-designing" element={<GraphicDesign />} />
        <Route path="/portfolio" element={<Portfolio data={PortfolioData} />} />
        <Route path="/blog" element={<Blogs data={BlogData} />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/pricing-dedicated-teams"
          element={
            <PricingDedicated
              data={SuccessStoriesData}
              TechnologiesData={TechnologiesData}
            />
          }
        />

        <Route
          path="/contact-us"
          element={<ContactUs setNoShowContactUs={setNoShowContactUs} />}
        />
        <Route
          path="/quote"
          element={
            <QuoteScreen
              setNoShowContactUs={setNoShowContactUs}
              data={CategoryData}
            />
          }
        />
        <Route
          path="/about-us"
          element={<AboutUs AboutSuccessStoriesData={SuccessStoriesData} />}
        />
        <Route path="/industry" element={<Industry />} />
        <Route
          path="/careers"
          element={
            <Careers
              setLightHeader={setLightHeader}
              data={CareerData}
              CategoryData={CategoryData}
            />
          }
        />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
      {noShowContactUs ? <ContactUsBottom /> : null}
      <Footer TechnologiesData={TechnologiesData} ServiceData={ServiceData} />
    </Suspense>
  );
}

export default withStyles(style)(App);
