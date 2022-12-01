import React, { useRef, useState } from "react";
import Classes from "../Styles/progressbar.module.css";
import Button from "./Button";

export default function ProgressBar({ next, prev, progress, submit }) {
  const [tooltip, setTooltipe] = useState(false);
  const tooltipeRef = useRef();

  function togleTooltipe() {
    if (tooltip) {
      setTooltipe(false);
      tooltipeRef.current.style.display = "none";
    } else {
      setTooltipe(true);
      tooltipeRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipeRef.current.style.display = "block";
    }
  }

  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip} ref={tooltipeRef}>
          {progress}% Cimplete!
        </div>
        <div className={Classes.rangeBody}>
          <div
            className={Classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={togleTooltipe}
            onMouseOut={togleTooltipe}
          ></div>
        </div>
      </div>
      <Button
        className={Classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span> {progress === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
