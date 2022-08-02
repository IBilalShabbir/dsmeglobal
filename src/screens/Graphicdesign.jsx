import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Check } from "react-feather";
import Graphic from "../assets/graphic.png";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";

function Graphicdesign() {
  const talentFeatures = [
    "Corporate Identity Development",
    "Web Design & Development",
    "User Experience Design (UX)",
    "Interactive Design",
    "Interactive Design",
    "Rich Media Production",
    "Online Branding",
    "Campaign Microsites",
    "2D / 3D Illustration and Visualization",
    "Video Content Creation",
    " Print, Packaging and POS",
  ];
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Designing Your Presence"
          info="Unleash and expand your brand with strategic art and design."
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <div className="staff__talent">
        <div className="staff__talent__heading">
          LET THE <span>IDENTITY OF YOUR </span> BRAND MOLD ITSELF
        </div>

        <div className="staff__talent__sub__heading__one">
          We offer an entire suite of solutions, bound by data, strategy,
          creativity, and pragmatism. Through impactful branding, impeccable
          advertising and marketing, effective innovative web sites, noticeably
          engaging content material and tactical distribution of content
          material on social media. Everything we will consider the mix of
          artwork and creativity can translate normal concepts into the entirety
          of modern.
        </div>

        <div className="staff__talent__info">
          We work strategically with companies and many other brands to
          establish the new media roadmap for their future and implement it. Our
          Creative agency was laid on the founding vision and mission to deliver
          the best out of the rest: to be the right new media platform for both
          media companies and brands. It's working exceedingly well, and we're
          delivering some staggering.
        </div>
        <div
          className="staff__talent__info"
          style={{ fontSize: "25px", fontWeight: "500" }}
        >
          Want to create a <span>lasting brand impact?</span>
        </div>
        <div
          className="staff__talent__info"
          style={{ width: "100%", marginBottom: "20px" }}
        >
          Get in touch with our graphic design services consultants.
        </div>
        <div className="staff__talent__features">
          {talentFeatures.map((feature) => (
            <div
              className="staff__talent__features__entry"
              key={JSON.stringify(feature)}
            >
              <Check size={20} color="currentColor" />
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div className="graphic__design__essence__container">
        THE ESSENCE OF 360 <span>DEGREE BRANDING</span>
      </div>
      <div className="graphic__design__essence__container__content">
        A belief that permeates the way we do business One brand – One voice
        Every point of contact matters Emanating from a single, focused brand
        strategy OUR graphic design services surround the brand, making
        important brand equity deposits into the brand.
      </div>
      <div className="graphic__design__essence__container__buttton">
        <a href="">Get started </a>
      </div>
      <div style={{ backgroundColor: "#242424", width: "100%" }}>
        <div className="graphic__design__essence__container__skills__and__image">
          <div className="graphic__design__essence__container__image">
            <img src={Graphic} alt="" />
            <div className="graphic__design__essence__container__skills__all">
              <div className="graphic__design__essence__container__skills__heading">
                Skills
              </div>

              <div className="graphic__design__essence__container__skills__main">
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Graphic design
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    91%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Product branding
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    95%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Bussines planing
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    93%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Photography
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    95%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Market research
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    95%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Strategic consulting
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    90%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Ecommerence consulting
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    98%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Web design
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    97%
                  </div>
                </div>
                <div className="graphic__design__essence__container__skills__one__percentage">
                  <div className="graphic__design__essence__container__skills__one">
                    Web development
                  </div>
                  <div className="graphic__design__essence__container__skills__heading__percentage">
                    96%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="graphic__design__essence__container__we__offer">
        <div className="graphic__design__essence__container__we__offer__heading">
          WE OFFER CUSTOM <span>PRICING BECAUSE EVERY</span> GRAPHIC DESIGN
          SERVICE IS DIFFERENT
        </div>
        <div className="graphic__design__essence__container__we__offer__content">
          Through our years of experience, we’ve learned it’s best to start by
          listening to your story. Then we review your existing brand and offer
          you options from there. Below we’ve listed our most requested
          packages, but each of these can be tweaked or we can give you a
          completely custom quote.
        </div>
      </div>
      <div className="graphic__design__essence__container__packages">
        <div className="graphic__design__essence__container__we__offer__heading">
          LOGO & BRANDING <span>DESIGN PACKAGES</span>
        </div>
        <div className="graphic__design__essence__container__we__offer__content">
          DESIGN At DSME Global Links we begin every project with a
          conversation. It’s important for us to spend time listening to your
          story before we offer any solutions because every business is
          different. So before we offer final estimates we spend time on the
          phone with you brain-storming strategies and solutions that work best
          for you.
        </div>
      </div>
      <div className="ios__mobile__share__your__idea__section__buttons__section">
        <div className="graphic__design__logos__and__brands__imgs">
          <div className="graphic__design__logos__and__brands">
            {logos.map((logo, i) => (
              <div
                className="graphic__design__logo__wrapper"
                style={(i + 1) % 5 === 0 ? { borderRight: "none" } : null}
              >
                <img className="graphic__design__logo" src={logo} alt={logo} />
              </div>
            ))}
            <div className="graphic__design__logo__wrapper">hello</div>
          </div>
        </div>
      </div>
      <div className="graphic__design__essence__container__packages">
        <div className="graphic__design__essence__container__we__offer__heading">
          SMALL BUSINESS <span>START-UP PACKAGES</span>
        </div>
        <div className="graphic__design__essence__container__we__offer__content">
          If you have a brand new business these are the best options for you.
          We know you’re excited to present yourself in a professional way so
          we’ve put these packages to give you just what you need AND save your
          money.
        </div>
      </div>
      <div className="graphic__design__logos__and__brands__imgs">
        <div className="graphic__design__logos__and__brands">
          {logos.map((logo, i) => (
            <div
              className="graphic__design__logo__wrapper"
              style={(i + 1) % 5 === 0 ? { borderRight: "none" } : null}
            >
              <img className="graphic__design__logo" src={logo} alt={logo} />
            </div>
          ))}
          <div className="graphic__design__logo__wrapper">hello</div>
        </div>
      </div>
    </>
  );
}

export default Graphicdesign;
