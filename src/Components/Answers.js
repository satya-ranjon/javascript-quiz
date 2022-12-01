import React, { Fragment } from "react";
import ChackBox from "./ChackBox";
import Style from "../Styles/Answers.module.css";

export default function Answers({ options = [], handelChange, input }) {
  return (
    <div className={Style.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <ChackBox
              key={index}
              className={Style.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handelChange(e, index)}
            />
          ) : (
            <ChackBox
              key={index}
              className={`${Style.answer} ${
                option.correct
                  ? Style.correct
                  : option.checked
                  ? Style.wrong
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
