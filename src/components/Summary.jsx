import trophyLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  console.log(userAnswers);
  const skipped = userAnswers.filter((answer) => answer === null);
  const procentSkipped = Math.round((skipped.length / QUESTIONS.length) * 100);

  const correct = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const procentCorrect = Math.round((correct.length / QUESTIONS.length) * 100);

  const wrong = userAnswers.filter(
    (answer, index) => answer !== QUESTIONS[index].answers[0] && answer !== null
  );
  const procentWrong = Math.round((wrong.length / QUESTIONS.length) * 100);

  return (
    <div id="summary">
      <img src={trophyLogo} alt="Trophy" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{procentSkipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{procentCorrect}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{procentWrong}%</span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Question was skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
