import React, { lazy, Suspense, useState } from "react";
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

const Home = lazy(() => import("./screens/Home"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Blogs = lazy(() => import("./screens/Blogs"));
const Careers = lazy(() => import("./screens/Careers"));
const Industry = lazy(() => import("./screens/Industry"));
const Services = lazy(() => import("./screens/Services"));
const ServiceCustomSoft = lazy(() => import("./screens/ServiceCustomSoft"));
const ServiceBlockChain = lazy(() => import("./screens/ServiceBlockChain"));
const ServiceEcomerece = lazy(() => import("./screens/ServiceEcomerece"));
const ServiceIos = lazy(() => import("./screens/ServiceIos"));
const ServiceStaff = lazy(() => import("./screens/ServiceStaff"));
const ServiceStartup = lazy(() => import("./screens/ServiceStartup"));
const ServiceAndroid = lazy(() => import("./screens/ServiceAndroid"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const PortfolioDetail = lazy(() => import("./screens/PortfolioDetail"));
const ServicesWebDev = lazy(() => import("./screens/ServicesWebDev"));
const ServiceUIUX = lazy(() => import("./screens/ServiceUIUX"));
const ServiceMobDev = lazy(() => import("./screens/ServiceMobDev"));
const QuoteScreen = lazy(() => import("./screens/QuoteScreen"));
const MeetUs = lazy(() => import("./screens/MeetUs"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const Pricing = lazy(() => import("./screens/Pricing"));
const PricingDedicated = lazy(() => import("./screens/PricingDedicated"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const ServiceWebScraping = lazy(() => import("./screens/ServiceWebScraping"));
const DiscoveryWorkshop = lazy(() => import("./screens/DiscoveryWorkshop"));
const GraphicDesign = lazy(() => import("./screens/GraphicDesign"));

function App() {
  const [lightHeader, setLightHeader] = useState(false);
  const [noShowContactUs, setNoShowContactUs] = useState(true);
  SwiperCore.use([Autoplay]);

  const { data: ServiceData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher
  );
  const { data: SuccessStoriesData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_success_stories`,
    fetcher
  );
  const { data: BlogData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher
  );

  const { data: CategoryData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_category`,
    fetcher
  );
  const { data: PortfolioData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_project`,
    fetcher
  );
  const { data: CareerData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_careers`,
    fetcher
  );
  const { data: WorkData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_work`,
    fetcher
  );
  const { data: TechnologiesData } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_techonologies`,
    fetcher
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
        <Route
          path="/services"
          element={<Services data={ServiceData} />}
          loading
        />
        <Route
          path="/services/web-app-development"
          element={<ServicesWebDev />}
          loading
        />
        <Route
          path="/services/ui-ux-design"
          element={<ServiceUIUX />}
          loading
        />
        <Route
          path="/services/mobile-app-development"
          element={<ServiceMobDev data={SuccessStoriesData} />}
          loading
        />
        <Route
          path="/services/blockchain-consulting"
          element={<ServiceBlockChain />}
          loading
        />
        <Route
          path="/services/custom-software-development"
          element={<ServiceCustomSoft />}
          loading
        />
        <Route
          path="/services/ios-development"
          element={<ServiceIos />}
          loading
        />
        <Route
          path="/services/web-scraping"
          element={<ServiceWebScraping />}
          loading
        />
        <Route
          path="/services/android-development"
          element={<ServiceAndroid />}
          loading
        />
        <Route
          path="/services/ecommerce"
          element={<ServiceEcomerece />}
          loading
        />
        <Route
          path="/services/startup-services"
          element={<ServiceStartup />}
          loading
        />
        <Route
          path="/services/staff-augmentation"
          element={<ServiceStaff />}
          loading
        />
        <Route
          path="/services/agile-discovery-workshop"
          element={<DiscoveryWorkshop />}
          loading
        />
        <Route
          path="/services/graphic-designing"
          element={<GraphicDesign />}
          loading
        />
        <Route
          path="/portfolio"
          element={<Portfolio data={PortfolioData} />}
          loading
        />
        <Route path="/blog" element={<Blogs data={BlogData} />} loading />
        <Route
          path="/blog-details"
          element={<BlogDetails setLightHeader={setLightHeader} />}
          loading
        />
        <Route path="/pricing" element={<Pricing />} loading />
        <Route
          path="/pricing-dedicated-teams"
          element={
            <PricingDedicated
              data={SuccessStoriesData}
              TechnologiesData={TechnologiesData}
            />
          }
          loading
        />

        <Route
          path="/contact-us"
          element={<ContactUs setNoShowContactUs={setNoShowContactUs} />}
          loading
        />
        <Route
          path="/quote"
          element={
            <QuoteScreen
              setNoShowContactUs={setNoShowContactUs}
              data={CategoryData}
            />
          }
          loading
        />
        <Route
          path="/about-us"
          element={<AboutUs AboutSuccessStoriesData={SuccessStoriesData} />}
          loading
        />
        <Route path="/industry" element={<Industry />} loading />
        <Route
          path="/careers"
          element={
            <Careers
              setLightHeader={setLightHeader}
              data={CareerData}
              CategoryData={CategoryData}
              loading
            />
          }
        />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} loading />
        <Route path="/meet-us" element={<MeetUs />} loading />
      </Routes>
      {noShowContactUs ? <ContactUsBottom /> : null}
      <Footer TechnologiesData={TechnologiesData} ServiceData={ServiceData} />
    </Suspense>
  );
}

export default withStyles(style)(App);
