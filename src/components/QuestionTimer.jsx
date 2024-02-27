import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTiem] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTiem((prev) => prev - 100);
    }, 100);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
