import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";
import { contactBannerSvg, successSvg } from "../assets";
import { fetcher } from "../utils/fetcher";

export default function QuoteJumbotron() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher
  );

  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [service, setService] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "api/v1/set_quote", {
        username: name,
        email: email,
        service: service,
        budget: budget,
        phone: mobile,
        company: company,
        message: message,
      })
      .then(() => {
        setSuccess(true);
        setName("");
        setCompany("");
        setEmail("");
        setMobile("");
        setService("");
        setMessage("");
        setBudget("");
      });
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);
  return (
    <div className="contact">
      {success ? (
        <div
          className="contact__overlay"
          style={{ backgroundColor: "#131313" }}
        >
          <img
            src={successSvg}
            alt="success"
            className="contact__overlay__img"
          />
          <div className="contact__overlay__heading" style={{ color: "white" }}>
            Submitted Successfully We will contact you soon
          </div>
        </div>
      ) : null}
      <div className="contact__content" style={{ maxWidth: "1366px" }}>
        <div className="contact__content__right" style={{ marginRight: 100 }}>
          <img
            src={contactBannerSvg}
            alt="contactImage"
            className="contact__content__right__img"
          />
        </div>
        <form
          className="contact__content__left contact__content__left__reverse"
          onSubmit={handleSubmit}
        >
          <div className="contact__content__left__row">
            <Input
              type="text"
              label="Name"
              title="Name"
              placeholder="Enter Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              label="Email"
              title="Email"
              placeholder="Enter Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact__content__left__row">
            <Input
              type="tel"
              label="Phone"
              title="Phone"
              placeholder="Enter Phone"
              value={mobile}
              required={true}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Input
              type="text"
              label="Service"
              title="Service"
              placeholder="Select Service"
              value={service}
              required={true}
              list={data?.map((item) => item.name)}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          <div className="contact__content__left__row">
            <Input
              type="text"
              label="Estimate Budget"
              title="Estimate Budget"
              placeholder="Enter Estimate Budget"
              required={true}
              list={[
                "$50,000 - $100,000",
                "$100,000 - $200,000",
                "$200,000 - $500,000",
                "$500,000 or above",
                "Request budget guidance",
              ]}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <Input
              type="text"
              label="Company/Organization"
              title="Company/Organization"
              placeholder="Enter Company/Organizayion"
              value={company}
              required={true}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <Input
            textarea
            label="Message"
            title="Message"
            placeholder="Enter Let us know a bit more about the project you have in mind..."
            required={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            title="Get a Quote"
            className="contact__content__left__button"
          >
            Get a Quote
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ textarea, required, label, error, list, ...props }) {
  return (
    <div className="contact__content__left__input">
      <label
        htmlFor={props.id}
        className="contact__content__left__input__label"
      >
        {label}
        {required ? <span>*</span> : null}
      </label>
      {textarea ? (
        <textarea
          {...props}
          cols="30"
          rows="10"
          className="contact__content__left__input__field"
          required={required}
          style={{ padding: "1em" }}
        />
      ) : (
        <input
          {...props}
          className="contact__content__left__input__field"
          required={required}
          list={label + "s"}
          id={label}
        />
      )}
      {error !== "" ? (
        <div className="contact__content__left__input__error">{error}</div>
      ) : null}
      {list ? (
        <datalist id={label + "s"}>
          {list.map((item, i) => (
            <option key={i} value={item} />
          ))}
        </datalist>
      ) : null}
    </div>
  );
}
