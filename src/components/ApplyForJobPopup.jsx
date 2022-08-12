import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import { X } from "react-feather";
import ActionConfirm from "./ActionConfirm";

export default function ApplyForJobPopup({ selectItem, setIsApplyOpen }) {
  const [submitted, setSubmited] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCV] = useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {submitted ? (
        <ActionConfirm />
      ) : (
        <div className="apply__popup">
          <WidgetLoader />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              axios
                .post(
                  `${
                    import.meta.env.VITE_REACT_APP_API_URL
                  }api/v1/set_careers_applied`,
                  {
                    name: name,
                    email: email,
                    phone: phone,
                    position: selectItem.position,
                    department: selectItem.department,
                    cv: cv,
                  }
                )
                .then(() => {
                  console.log("data submited");
                });
              setSubmited(true);
              setTimeout(() => {
                setSubmited(false);
                setIsApplyOpen(false);
              }, 3000);
            }}
            className="apply__popup__form"
          >
            <button
              className="apply__popup__close"
              onClick={() => {
                setIsApplyOpen(false);
              }}
            >
              <X size={25} color="currentColor" />
            </button>
            <div className="apply__popup__form__heading">Apply For Job</div>
            <div className="apply__popup__form__row">
              <Input
                type="text"
                placeholder="Name"
                required={true}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Email"
                required={true}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="apply__popup__form__row">
              <Input
                type="text"
                placeholder="Phone"
                required={true}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Position"
                required={true}
                value={selectItem.position}
              />
            </div>
            <div
              className="apply__popup__form__label"
              style={{ marginBottom: ".5em" }}
            >
              Upload CV
            </div>
            <Widget
              sources={["local"]}
              resourceType="image"
              cloudName="mehfoozurrehman"
              uploadPreset="cqido5en"
              buttonText={
                cv !== "" ? (
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
                    {cv
                      .replace(/dsme_global/, "")
                      .replace("/", "")
                      .substring(cv.indexOf("/") + 1)
                      .trim()}
                  </div>
                ) : (
                  "+"
                )
              }
              style={{
                color: "black",
                width: "fit-content",
                minWidth: "170px",
                backgroundColor: "white",
                border: "1px solid #383838",
                borderRadius: "4px",
                fontSize: cv === "" ? 30 : 12,
                height: "50px",
                cursor: "pointer",
                padding: 0,
              }}
              folder="dsme_global"
              cropping={true}
              multiple={false}
              autoClose={false}
              onSuccess={(e) => {
                setCV(e.info.path);
              }}
              onFailure={(e) => {
                console.log(e);
              }}
              logging={true}
              use_filename={true}
              destroy={true}
              apiKey={915662453295273}
            />
            <button className="apply__popup__form__button">Apply</button>
          </form>
        </div>
      )}
    </>
  );
}
