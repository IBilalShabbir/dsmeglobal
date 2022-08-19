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
          <Link to="/" className="footer__content__col__logo">
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
            <a href="#" className="footer__content__col__socials__link">
              <Facebook size={20} color="currentColor" />
            </a>
            <a href="#" className="footer__content__col__socials__link">
              <Twitter size={20} color="currentColor" />
            </a>
            <a href="#" className="footer__content__col__socials__link">
              <Instagram size={20} color="currentColor" />
            </a>
            <a href="#" className="footer__content__col__socials__link">
              <Linkedin size={20} color="currentColor" />
            </a>
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Industries</div>
          <Link to="/" className="footer__content__col__link">
            Healthcare
          </Link>
          <Link to="/" className="footer__content__col__link">
            Real Estate
          </Link>
          <Link to="/" className="footer__content__col__link">
            Retail
          </Link>
          <Link to="/" className="footer__content__col__link">
            FinTech
          </Link>
          <Link to="/" className="footer__content__col__link">
            Logistics & Transport
          </Link>
          <Link to="/" className="footer__content__col__link">
            Insurance
          </Link>
          <Link to="/" className="footer__content__col__link">
            Food & Entertainment
          </Link>
          <Link to="/" className="footer__content__col__link">
            Ecommerce
          </Link>
          <Link to="/" className="footer__content__col__link">
            Other
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">QuickLinks</div>
          <Link to="/" className="footer__content__col__link">
            Home
          </Link>
          <Link to="/" className="footer__content__col__link">
            About Us
          </Link>
          <Link to="/" className="footer__content__col__link">
            Portfolio
          </Link>
          <Link to="/" className="footer__content__col__link">
            Services
          </Link>
          <Link to="/" className="footer__content__col__link">
            Industries
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Contact</div>
          <div className="footer__content__col__row">
            <a href="#" className="footer__content__col__row__link">
              354 454 5344 343
            </a>
            <a href="#" className="footer__content__col__row__link">
              354 454 5344 343
            </a>
          </div>
          <div className="footer__content__col__row">
            <a href="#" className="footer__content__col__row__link">
              hello@dsme.com
            </a>
            <a href="#" className="footer__content__col__row__link">
              info@dsme.com
            </a>
          </div>
          <div className="footer__content__col__row">
            1st floor, DHA - Z Block, Plot # 33, Lahore, 54000, Pakistan
          </div>
        </div>
      </div>
    </div>
  );
}
