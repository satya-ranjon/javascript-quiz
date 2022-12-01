import React from "react";
import Style from "../Styles/button.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <button className={`${Style.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
