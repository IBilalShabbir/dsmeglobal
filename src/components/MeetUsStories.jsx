import React from "react";
import { Fade } from "react-reveal";
import { teamData } from "../constants/data";

export function MeetUsStories() {
  return (
    <div className="meetus__container__stories">
      <div className="meetus__container__stories__content">
        <Fade up>
          <div className="meetus__container__stories__heading">
            See our <span>stories</span>
          </div>
        </Fade>
        <Fade up>
          <div className="meetus__container__stories__para">
            Your passion is part of our identity. See how #dsmeglobalpeople
            rock.
          </div>
        </Fade>
        <div className="meetus__container__stories__card__container">
          {teamData.map((item) => (
            <Fade up>
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1658515904/dsme_team/" +
                      item.image +
                      ".webp"
                    }
                    alt="Stories card"
                  />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    {item.name}
                  </div>
                  <div className="meetus__container__stories__card__para">
                    {item.designation}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
