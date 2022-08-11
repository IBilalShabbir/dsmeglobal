import React, { useEffect } from "react";
import { X, Menu } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import logo from "../assets/logoHeader.svg";
import { NavLink as Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  function changeOpenClose() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeOpenClose();
    window.addEventListener("resize", changeOpenClose);
    window.addEventListener("scroll", changeOpenClose);
  }, []);

  return (
    <div className="header">
      <div
        className="header__content"
        style={
          isOpen
            ? null
            : {
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              }
        }
      >
        <Link to="/" className="header__content__logo">
          <img src={logo} alt="logo" className="header__content__logo__img" />
          <div className="header__content__logo__brand">
            DSME <span>GLOBAL</span>
          </div>
        </Link>
        {isOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <Link
                to="/"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Portfolio
              </Link>
              <Link
                to="/industry"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Industries
              </Link>
              <Link
                to="/careers"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Blog
              </Link>
            </div>
          </OutsideClickHandler>
        ) : null}
        <div className="header__content__cta">
          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
          <Link
            to="/quote"
            onClick={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
            className="header__content__cta__button"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
