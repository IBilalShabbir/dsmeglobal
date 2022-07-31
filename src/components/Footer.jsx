import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo.svg";
import { Dribbble, Facebook, Instagram, Linkedin } from "react-feather";
import { FooterServices } from "./FooterServices";
import { FooterTopics } from "./FooterTopics";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__container__content__wrapper">
        <div className="footer__container__content">
          <div className="footer__container__content__col">
            <Link
              to="/"
              onClick={() => {
                document.getElementById("Home").checked = true;
              }}
              className="header__content__logo"
            >
              <img loading="lazy" src={logoDark} alt="logo" />
            </Link>
            <div className="footer__container__content__col__text">
              We are talented. We are experienced. We are bold. We are DSME
              Global Links! Get a behind-the-scenes glimpse of your new favorite
              software development company. Let’s work together
            </div>
          </div>
          <FooterServices />
          <FooterTopics />
          <div className="footer__container__content__col">
            <div className="footer__container__content__col__heading">
              Contact Us
            </div>
            <div className="footer__container__content__col__text">
              <div className="footer__container__content__col__text__heading">
                Phone
              </div>
              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  354 454 5344 343
                </div>
                <div className="footer__container__content__col__text__data__entry">
                  354 454 5344 343
                </div>
              </div>

              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  hello@J7.com
                </div>
                <div className="footer__container__content__col__text__data__entry">
                  hello@J7Group.com
                </div>
              </div>
              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  1st floor, DHA - Z Block, Plot # 33, Lahore, 54000, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container__awards">
          <img loading="lazy" src={img1} alt="img1" />
          <img loading="lazy" src={img2} alt="img2" />
          <img loading="lazy" src={img3} alt="img3" />
          <img loading="lazy" src={img4} alt="img4" />
          <img loading="lazy" src={img5} alt="img5" />
          <img loading="lazy" src={img6} alt="img6" />
        </div>
      </div>
      <div className="footer__container__content__bottom">
        <div className="footer__container__content__bottom__container">
          <div className="footer__container__content__bottom__left">
            <div className="footer__container__content__bottom__text">
              © 2022 DSME. All rights reserved.
            </div>
            <a
              href="#"
              className="footer__container__content__bottom__left__link"
            >
              Privacy Policy
            </a>
          </div>
          <div className="footer__container__content__bottom__right">
            <div className="footer__container__content__bottom__text">
              Follow us
            </div>
            <a
              href="https://www.facebook.com/dsmeglobal"
              className="footer__container__content__bottom__left__link"
              title="Facebook"
            >
              <Facebook size={20} color="currentColor" />
            </a>
            <a
              href="https://www.instagram.com/dsmeglobal"
              className="footer__container__content__bottom__left__link"
              title="Instagram"
            >
              <Instagram size={20} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsmegloballinks"
              className="footer__container__content__bottom__left__link"
              title="Linkedin"
            >
              <Linkedin size={20} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsmegloballinks"
              className="footer__container__content__bottom__left__link"
              title="Linkedin"
            >
              <Dribbble size={20} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsmegloballinks"
              className="footer__container__content__bottom__left__link"
              title="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.639"
                height="30.685"
                viewBox="0 0 133.639 84.685"
              >
                <path
                  id="Union_7"
                  data-name="Union 7"
                  d="M89.968,79.483A25.358,25.358,0,0,1,74.947,64.422c-3.658-9.669-3.559-19.355,1.24-28.621,4.733-9.138,12.53-14.042,22.725-15.134,7.132-.764,13.815.534,19.721,4.76,6.305,4.513,9.769,10.889,11.17,18.361a98.226,98.226,0,0,1,.826,9.876c.091,1.084-.371,1.34-1.4,1.337q-19.451-.046-38.9-.02H88.616c-.074,8.533,4.179,14.189,12.947,14.689a14.926,14.926,0,0,0,10.817-3.3,23.714,23.714,0,0,0,2.749-3.44c.26-.321.631-.782.955-.787,4.415-.052,8.83-.035,13.337-.035a3.392,3.392,0,0,1-.067.693c-3.516,10.287-10.428,17.393-22.6,18.64a45.052,45.052,0,0,1-4.6.244A32.8,32.8,0,0,1,89.968,79.483Zm11.761-46.892c-7.61.053-12.6,4.7-13.109,12.272h25.861c-.686-8.063-5.033-12.272-12.609-12.273ZM39.038,80.154q-14.072-.022-28.144-.013H0V0Q5.561,0,11.121,0,25.462,0,39.8.037a34.228,34.228,0,0,1,13.318,2.44c6.548,2.761,9.869,7.879,10.332,14.8a29.016,29.016,0,0,1-.625,8.2c-1.016,4.514-4.061,7.646-7.979,9.962-.573.338-1.153.663-1.728,1a62.058,62.058,0,0,1,6.288,3.347c4.43,3.015,6.741,7.424,7.546,12.645,1.009,6.554.12,12.728-4.049,18.111-3.188,4.115-7.529,6.536-12.432,8.023a38.882,38.882,0,0,1-11.37,1.591ZM17.764,44.6V66.461c.384.032.674.076.965.077,5.864,0,11.729.032,17.592-.017a27.7,27.7,0,0,0,4.685-.425c3.937-.715,7.029-2.6,8.112-6.725a15.982,15.982,0,0,0,.4-4.285c-.108-6.106-3.715-10.128-9.79-10.377-7.17-.294-14.356-.176-21.535-.232h0A1.975,1.975,0,0,0,17.764,44.6Zm35.322-8.136C53.064,36.476,53.057,36.51,53.086,36.459ZM17.743,13.845v18.5c6.44,0,12.738.245,19.008-.068,6.441-.322,9.342-3.357,9.567-9.113.167-4.271-1.757-7.3-5.616-8.532a16.411,16.411,0,0,0-4.609-.822c-4.416-.079-8.834-.073-13.253-.068q-2.169,0-4.338,0A5.94,5.94,0,0,0,17.743,13.845Zm67.6-1.761V4.252H117.82v7.832Z"
                  transform="translate(1.5 1.5)"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
