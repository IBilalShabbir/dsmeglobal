import React from "react";
import { NavLink } from "./NavLink";

export function Nav({ navigate, setIsNavOpen }) {
  return (
    <div className="header__content__nav">
      <NavLink setIsNavOpen={setIsNavOpen} to="/" navigate={navigate}>
        Home
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/about-us" navigate={navigate}>
        About Us
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/services" navigate={navigate}>
        Services
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/portfolio" navigate={navigate}>
        Portfolio
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/industry" navigate={navigate}>
        Industry
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/careers" navigate={navigate}>
        Careers
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/blog" navigate={navigate}>
        Blog
      </NavLink>
    </div>
  );
}
