import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";
import { Fade } from "react-reveal";
import { logo } from "../assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
        <Fade left distance="30%">
          <NavLink to="/" className="header__content__logo">
            <img src={logo} alt="logo" className="header__content__logo__img" />
          </NavLink>
        </Fade>
        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <Fade top distance="30%">
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
              </Fade>
              <Fade top distance="30%">
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
              </Fade>
              <Fade top distance="30%">
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
              </Fade>
              <Fade top distance="30%">
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
              </Fade>
              <Fade top distance="30%">
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
              </Fade>
              {/* <Fade top distance="30%">
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
              </Fade> */}
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
        <Fade right distance="30%">
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
        </Fade>
      </div>
    </div>
  );
}
