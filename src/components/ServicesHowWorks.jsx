import React from "react";

export function ServicesHowWorks({}) {
  return (
    <div className="services__how__works">
      <div className="services__how__works__heading heading">
        How the Process Works?
      </div>
      <div className="services__how__works__info">
        We have been successfully delivered over 250+ products on-time and
        within budget for startups, entrepreneurs, businesses and large
        enterprises.
      </div>
      <div className="services__how__works__content">
        <div className="services__how__works__content__left">
          <div className="services__how__works__content__heading">
            Initial Discovery
          </div>
          <div className="services__how__works__content__top">
            <div className="services__how__works__content__top__entry">
              Assesment
            </div>
            <div className="services__how__works__content__top__entry">
              Deep Dive
            </div>
          </div>
          <div className="services__how__works__content__bottom">
            <div className="services__how__works__content__bottom__entry">
              We discuss your project requirements over a couple of calls or It
              will be meetings and assess what you already have.
            </div>
            <div className="services__how__works__content__bottom__entry">
              If we feel that the requirements are enough for us to provide you
              with a tentative cost/effort estimate - we go down that route.
              Otherwise, we recommend that you go through our Agile Discovery
              Workshop to get you development ready.
            </div>
            <div className="services__how__works__content__bottom__entry">
              Otherwise, we recommend that you go through our Agile Discovery
              Workshop to get you development ready.
            </div>
          </div>
        </div>
        <div className="services__how__works__content__middle">
          <div className="services__how__works__content__heading">Develop</div>
          <div className="services__how__works__content__top">
            <div className="services__how__works__content__top__entry">
              Detailed Discovery
            </div>
            <div className="services__how__works__content__top__entry">
              Design
            </div>
            <div className="services__how__works__content__top__entry">
              Development & QA
            </div>
            <div className="services__how__works__content__top__entry">UAT</div>
          </div>
          <div
            className="services__how__works__content__bottom"
            style={{
              minHeight: "fit-content",
            }}
          >
            <div className="services__how__works__content__bottom__entry">
              We start off with doing a detailed discovery as a first milestone,
              where we revisit the initial requirements and make them more
              detailed (user stories, wire-frames, non-functional requirements).
            </div>
            <div className="services__how__works__content__bottom__entry">
              On the basis of this, we draft a statement of work and provide a
              detailed project & payment plan
            </div>
            <div className="services__how__works__content__bottom__entry">
              The remaining milestones are about delivering the scope of work
              defined during detailed discovery.
            </div>
          </div>
          <div className="services__how__works__content__bottom__special">
            We understand that each client is unique although a typical
            fixed-price project is composed of all the above stages, we tailor
            our process according to your needs. You can also benefit from our
            additional offerings below:
          </div>
        </div>
        <div className="services__how__works__content__right">
          <div className="services__how__works__content__heading">Go Live</div>
          <div className="services__how__works__content__top">
            <div className="services__how__works__content__top__entry">
              Pilot
            </div>
            <div className="services__how__works__content__top__entry">
              Support & Transition
            </div>
          </div>
          <div className="services__how__works__content__bottom">
            <div className="services__how__works__content__bottom__entry">
              Once the product has gone through the User Acceptance Testing
              stage, we successfully launch it while providing ongoing support &
              maintenance during the Pilot phase.
            </div>
            <div className="services__how__works__content__bottom__entry">
              After that, we can either transition everything to your team or
              move to a monthly Support & Maintenance contract.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
