import React, { lazy, Suspense, useState } from "react";
import { withStyles } from "react-critical-css";
import SwiperCore, { Autoplay } from "swiper";
import { Route, Routes } from "react-router";
import Loader from "./components/Loader";
import style from "./App.scss";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ContactUsBottom = lazy(() => import("./components/ContactUsBottom"));

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
  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <Header light={lightHeader} />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home setLightHeader={setLightHeader} />} />
        <Route path="/services" element={<Services />} />
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-dedicated-teams" element={<PricingDedicated />} />

        <Route
          path="/contact-us"
          element={<ContactUs setNoShowContactUs={setNoShowContactUs} />}
        />
        <Route
          path="/quote"
          element={<QuoteScreen setNoShowContactUs={setNoShowContactUs} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industry" element={<Industry />} />
        <Route
          path="/careers"
          element={<Careers setLightHeader={setLightHeader} />}
        />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
      {noShowContactUs ? <ContactUsBottom /> : null}
      <Footer />
    </Suspense>
  );
}

export default withStyles(style)(App);
