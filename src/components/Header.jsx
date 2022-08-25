import React, { useEffect } from "react";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import ClickAwayListener from "react-click-away-listener";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function changeNavState() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1000
          ? { backgroundColor: "#181818" }
          : null
      }
    >
      <div className="header__content">
        <NavLink to="/" className="header__content__logo">
          <img src={logo} alt="logo" className="header__content__logo__img" />
        </NavLink>
        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <NavLink
                to="/services"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                About Us
              </NavLink>
              <NavLink
                to="/industries"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Industries
              </NavLink>
              <NavLink
                to="/career"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Career
              </NavLink>
              <NavLink
                to="/blogs"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/quote"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__cta__button"
              >
                Get a quote
              </NavLink>
            </div>
          </ClickAwayListener>
        ) : null}
        <div className="header__content__cta">
          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Close" : "Open"}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
          <NavLink
            to="/quote"
            title="Get a quote"
            className="header__content__cta__button"
          >
            Get a quote
          </NavLink>
        </div>
      </div>
    </div>
  );
}
