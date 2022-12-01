import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswere from "../../hooks/useAnswere";
import Analysis from "../Analysis";
import Summery from "../Summery";
import _ from "lodash";

export default function Result() {
  const { state } = useLocation();
  const { id } = useParams();
  const { loding, error, answere } = useAnswere(id);

  function resultCalculate() {
    let score = 0;
    answere.forEach((question, index1) => {
      let correctIndex = [];
      let checkedIndex = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (state[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = resultCalculate();

  return (
    <>
      {loding && <h1> loading ....</h1>}
      {error && <h1> There was an error </h1>}
      {answere && answere.length > 0 && (
        <>
          <Summery score={userScore} noq={answere.length} />
          <Analysis answere={answere} />
        </>
      )}
    </>
  );
}
