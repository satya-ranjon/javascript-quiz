import React from "react";
import Style from "../Styles/llustration.module.css";

export default function Illustration({ img }) {
  return (
    <div className={Style.illustration}>
      <img src={img} alt="Login" />
    </div>
  );
}
