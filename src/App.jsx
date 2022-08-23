import React from "react";
import { withStyles } from "react-critical-css";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import stylesheet from "./App.scss";
import MeetUs from "./screens/MeetUs";
import NotFound from "./screens/NotFound";
import Quote from "./screens/Quote";
import Services from "./screens/Services";
import Industries from "./screens/Industries";
import Careers from "./screens/Careers";

// topbar.config({
//   autoRun: false,
//   barThickness: 3,
//   barColors: {
//     0: "#2ecc82",
//     0.3: "#2ecc82",
//     1.0: "#2ecc82",
//   },
//   shadowBlur: 5,
//   shadowColor: "transparent",
//   className: "topbar",
// });

function App() {
  const [isHeader, setIsHeader] = React.useState(true);
  const [isContact, setIsContact] = React.useState(true);
  const [isFooter, setIsFooter] = React.useState(true);
  return (
    <>
      {isHeader ? <Header /> : null}
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route path="/quote" element={<Quote setIsContact={setIsContact} />} />
        <Route path="*" element={<NotFound setIsContact={setIsContact} />} />
      </Routes>
      {isContact ? <Contact /> : null}
      {isFooter ? <Footer /> : null}
    </>
  );
}
export default withStyles(stylesheet)(App);
