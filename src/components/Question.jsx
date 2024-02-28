import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({ onSelectAnswer, onSkipAnswer, key }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[key].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);

    let answerState = "";

    if (answer.selectedAnswer) {
      answerState = answer.isCorrect ? "correct" : "wrong";
    }

    return (
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h2>{QUESTIONS[key].text}</h2>
        <Answers
          answers={QUESTIONS[key].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    );
  }
}