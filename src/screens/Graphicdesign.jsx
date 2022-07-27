import React from "react";
import servicesbanner from "../assets/servicesbanner.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Check } from "react-feather";

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
        <div className="staff__talent__info" style={{fontsize:30}}>
        Want to create a lasting brand impact?
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
    </>
  );
}

export default Graphicdesign;
