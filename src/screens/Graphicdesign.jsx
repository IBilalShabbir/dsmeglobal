import React from "react";
import servicesbanner from "../assets/servicesbanner.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Check } from "react-feather";
import Graphic from "../assets/graphic.png";

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
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Designing Your Presence"
          info={
            <>Unleash and expand your brand with strategic art and design.</>
          }
          img={servicesbanner}
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
          style={{ fontSize: "30px", fontWeight: "600" }}
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
        THE ESSENCE OF 360 DEGREE BRANDING
      </div>
      <div className="graphic__design__essence__container__content">
        A belief that permeates the way we do business One brand – One voice
        Every point of contact matters Emanating from a single, focused brand
        strategy OUR graphic design services surround the brand, making
        important brand equity deposits into the bran
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
                <div className="graphic__design__essence__container__skills__one">
                  Graphic design
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Product branding
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Bussines planing
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Photography
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Market research
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Strategic consulting
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Ecommerence consulting
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Web design
                </div>
                <div className="graphic__design__essence__container__skills__one">
                  Web development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="graphic__design__essence__container__we__offer">
        <div className="graphic__design__essence__container__we__offer__heading">
          WE OFFER CUSTOM PRICING BECAUSE EVERY GRAPHIC DESIGN SERVICE IS
          DIFFERENT
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
        LOGO & BRANDING DESIGN PACKAGES
      </div>
      <div className="graphic__design__essence__container__we__offer__content">
        DESIGN At DSME Global Links we begin every project with a conversation.
        It’s important for us to spend time listening to your story before we
        offer any solutions because every business is different. So before we
        offer final estimates we spend time on the phone with you brain-storming
        strategies and solutions that work best for you.
      </div>
      </div>
    </>
  );
}

export default Graphicdesign;
