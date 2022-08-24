import React from "react";
import { Link } from "react-router-dom";
import { footerSvg1, footerSvg2, logo } from "../assets";
import { Facebook, Linkedin, Twitter, Instagram } from "react-feather";

export default function Footer() {
  return (
    <div className="footer">
      <img src={footerSvg1} alt="footerSvg1" className="footer__svg1" />
      <img src={footerSvg2} alt="footerSvg2" className="footer__svg2" />
      <div className="footer__content">
        <div className="footer__content__col">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__logo"
          >
            <img
              src={logo}
              alt="logo"
              className="footer__content__col__logo__img"
            />
          </Link>
          <div className="footer__content__col__info">
            We are talented. We are experienced. We are bold. We are DSME Global
            Links! Get a behind-the-scenes glimpse of your new favorite software
            development company. Let’s work together
          </div>
          <div className="footer__content__col__socials">
            <a
              href="https://www.facebook.com/dsmeglobal"
              title="Facebook"
              target="_blank"
              className="footer__content__col__socials__link"
            >
              <Facebook size={20} color="currentColor" />
            </a>
            <a
              href="https://www.instagram.com/dsmeglobal/"
              title="Instagram"
              target="_blank"
              className="footer__content__col__socials__link"
            >
              <Instagram size={20} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsmegloballinks"
              title="Linkedin"
              target="_blank"
              className="footer__content__col__socials__link"
            >
              <Linkedin size={20} color="currentColor" />
            </a>
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Industries</div>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Healthcare
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Real Estate
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Retail
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            FinTech
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Logistics & Transport
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Insurance
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Food & Entertainment
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Ecommerce
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Other
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">QuickLinks</div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            About Us
          </Link>
          <Link
            to="/portfolio"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Services
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Industries
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Contact</div>
          <div className="footer__content__col__row">
            <a
              href="#"
              title="354 454 5344 343"
              className="footer__content__col__row__link"
            >
              +923219652222
            </a>
            <a
              href="#"
              title="354 454 5344 343"
              className="footer__content__col__row__link"
            >
              +923260466668
            </a>
          </div>
          <div className="footer__content__col__row">
            <a
              href="#"
              title="info@dsme.com"
              className="footer__content__col__row__link"
            >
              info@dsmeglobal.com
            </a>
          </div>
          <div className="footer__content__col__row">
            33-Z, 1st Floor Commercial Plaza, DHA Phase III, Lahore, Pakistan.
          </div>
        </div>
      </div>
    </div>
  );
}
