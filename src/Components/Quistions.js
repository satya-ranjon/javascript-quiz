import React from "react";
import Style from "../Styles/questions.module.css";
import Answers from "./Answers";

export default function Quistions({ answere = [] }) {
  return answere.map((answer, index) => (
    <div className={Style.question} key={index}>
      <div className={Style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
