import React, { useEffect, useState } from "react";
import axios from "axios";
import { newsLetterSvg } from "../assets";

export function HomeNewsletter({}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.length === 0) {
      setError("Please enter valid email address");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      axios
        .post("https://dsmeglobal-api.herokuapp.com/api/v1/set_news_letter", {
          email: email,
        })
        .then(() => {
          setEmail("");
        });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  return (
    <div className="home__newsletter">
      <img
        src={newsLetterSvg}
        alt="newsLetterSvg"
        className="home__newsletter__svg"
      />
      <div className="home__newsletter__content">
        <div className="home__newsletter__content__left">
          <div className="home__newsletter__content__left__heading heading">
            Newsletter
          </div>
          <div className="home__newsletter__content__left__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            ipsam. Lorem ipsum dolor sit amet consectetur
          </div>
        </div>
        <form
          className="home__newsletter__content__right"
          onSubmit={handleSubmit}
        >
          <div className="home__newsletter__content__right__input">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="home__newsletter__content__right__input__field"
            />
            {error !== "" ? (
              <div className="home__newsletter__content__right__input__error">
                {error}
              </div>
            ) : null}
            {success ? (
              <div className="home__newsletter__content__right__input__success">
                Successfully Subscribed
              </div>
            ) : null}
          </div>
          <button className="home__newsletter__content__right__button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
