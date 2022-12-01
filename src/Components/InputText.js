import React from "react";
import Style from "../Styles/inputText.module.css";

export default function InputText({ icon, ...rest }) {
  return (
    <div className={Style.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
