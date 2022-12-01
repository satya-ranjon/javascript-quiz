import React from "react";
import Style from "../Styles/analysis.module.css";
import Quistions from "./Quistions";

export default function Analysis({ answere }) {
  return (
    <div className={Style.analysis}>
      <h1>Question Analysis</h1>
      <Quistions answere={answere} />
    </div>
  );
}
