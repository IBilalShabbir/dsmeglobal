import React from "react";
import logo from "../assets/logoDark.svg";

export default function Loader({ style }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <img src={logo} alt="logo" style={{ width: "300px", maxWidth: "100%" }} />
    </div>
  );
}
