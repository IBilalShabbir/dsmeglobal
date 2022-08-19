import React from "react";
import { contactImage } from "../assets";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div className="contact">
      {/* <div className="contact__overlay">
        Submitted Successfully We will contact you soon
      </div> */}
      <div className="contact__content">
        <form className="contact__content__left">
          <div className="contact__content__left__heading heading">
            Get in Touch
          </div>
          <div className="contact__content__left__row">
            <Input
              label="Name"
              placeholder="Enter Name"
              required={true}
              error="Please Enter Name"
            />
            <Input
              label="Company Name (Optional)"
              placeholder="Type your company name"
            />
          </div>
          <div className="contact__content__left__row">
            <Input
              label="Email"
              placeholder="Enter Email"
              required={true}
              error="Please Enter Email"
            />
            <Input label="Mobile (Optional)" placeholder="Enter Mobile" />
          </div>
          <Input
            label="Subject"
            placeholder="Enter Subject"
            required={true}
            error="Please Enter Subject"
          />
          <Input
            textarea
            label="How can we help you"
            placeholder="Give us some details about your project"
          />
          <button className="contact__content__left__button">
            Let’s Start a Conversation
          </button>
        </form>
        <div className="contact__content__right">
          <img
            src={contactImage}
            alt="contactImage"
            className="contact__content__right__img"
          />
        </div>
      </div>
    </div>
  );
}

function Input({ textarea, required, label, error, ...props }) {
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
        />
      ) : (
        <input
          {...props}
          className="contact__content__left__input__field"
          required={required}
        />
      )}
      {error !== "" ? (
        <div className="contact__content__left__input__error">{error}</div>
      ) : null}
    </div>
  );
}
