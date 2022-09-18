import React, { useEffect, useState } from "react";
import { applyForJob, successSvg } from "../assets";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import axios from "axios";

export default function ApplyForJobJumbotron({ state }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [resume, setResume] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setPosition(state?.position);
    setDepartment(state?.department);
  }, [state]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        import.meta.env.VITE_REACT_APP_API_URL + "api/v1/set_careers_applied",
        {
          name: name,
          email: email,
          phone: phone,
          position: position,
          department: department,
          cv: resume,
        }
      )
      .then(() => {
        setSuccess(true);
        setEmail("");
        setName("");
        setResume("");
        setPhone("");
      });
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);
  return (
    <div className="contact">
      <WidgetLoader />
      {success ? (
        <div
          className="contact__overlay"
          style={{ backgroundColor: "#131313" }}
        >
          <img
            loading="lazy"
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
            loading="lazy"
            src={applyForJob}
            alt="applyForJob"
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
              value={phone}
              required={true}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              label="Position"
              title="Position"
              placeholder="Select Position"
              value={position}
              disabled={true}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div
            className="contact__content__left__input"
            style={{ width: "fit-content" }}
          >
            <label className="contact__content__left__input__label">
              Upload CV
            </label>
            <Widget
              sources={["local"]}
              resourceType="image"
              cloudName="mehfoozurrehman"
              uploadPreset="cqido5en"
              buttonText={
                resume !== "" ? (
                  <div
                    style={{
                      width: "100%",
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                  >
                    <div
                      style={{
                        background: "red",
                        width: 40,
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        marginRight: 10,
                      }}
                    >
                      PDF
                    </div>
                    {resume
                      .replace(/dsme_global/, "")
                      .replace("/", "")
                      .substring(resume.indexOf("/") + 1)
                      .trim()}
                  </div>
                ) : (
                  "+"
                )
              }
              style={{
                color: "white",
                width: 150,
                minWidth: "fit-content",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "4px",
                fontSize: resume === "" ? 30 : 12,
                height: resume === "" ? 150 : 30,
                cursor: "pointer",
                padding: 0,
              }}
              folder="dsme_global"
              cropping={true}
              multiple={false}
              autoClose={false}
              onSuccess={(e) => {
                setResume(e.info.path);
                document.body.style.overflow = "auto";
              }}
              onFailure={(e) => {
                console.log(e);
                document.body.style.overflow = "auto";
              }}
              logging={true}
              use_filename={true}
              destroy={true}
              apiKey={915662453295273}
            />
          </div>
          <button
            title="Apply for job"
            className="contact__content__left__button"
            style={{ marginLeft: "0em", marginRight: "auto" }}
          >
            Apply
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
