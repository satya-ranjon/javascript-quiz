import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";
import useQuestion from "../../hooks/useQuestions";
import _ from "lodash";
import { useAuth } from "../../Context/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTION":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "ANSWERE":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loding, error, questions } = useQuestion(id);
  const [currentQuestion, setQCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: "QUESTION",
      value: questions,
    });
  }, [questions]);

  const handelAnswerChange = (e, index) => {
    dispatch({
      type: "ANSWERE",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // When user click next button to get the next question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setQCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  // When user click prev button to get the next question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setQCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  };

  // culcalute progresss
  const Progress =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // submit

  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    navigate(`/result/${id}`, {
      state: qna,
    });
  }

  return (
    <>
      {loding && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}

      {!loding && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={qna[currentQuestion].options}
            handelChange={handelAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={Progress}
            submit={submit}
          />
          <Miniplayer id={id} title={location.state.videoTitle} />
        </>
      )}
    </>
  );
}
