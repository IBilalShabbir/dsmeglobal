import React, { useEffect } from "react";
import { notFound } from "../assets";

export default function NotFound({ setIsContact }) {
  useEffect(() => {
    setIsContact(false);
    document.querySelector("body").style.backgroundColor = "#131313";
    return () => {
      setIsContact(true);
      document.querySelector("body").style.backgroundColor = "white";
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={notFound}
        alt="notFound"
        style={{ width: "100%", maxWidth: "700px", padding: "2em" }}
      />
    </div>
  );
}
